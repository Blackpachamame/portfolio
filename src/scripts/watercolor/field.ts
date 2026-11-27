export type Point = readonly [x: number, y: number];
interface MaskSettings {
  seed: number;
  irregularity: number;
  softness: number;
  color: string;
}

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (v: number) => v * v * (3 - 2 * v);
function hash(x: number, y: number, seed: number) {
  let n = Math.imul(x + Math.imul(y, 374761393) + Math.imul(seed, 668265263), 1274126177);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}
function noise(x: number, y: number, seed: number) {
  const ix = Math.floor(x),
    iy = Math.floor(y),
    u = smooth(x - ix),
    v = smooth(y - iy);
  const a = hash(ix, iy, seed) * (1 - u) + hash(ix + 1, iy, seed) * u;
  const b = hash(ix, iy + 1, seed) * (1 - u) + hash(ix + 1, iy + 1, seed) * u;
  return a * (1 - v) + b * v - 0.5;
}
export function dims(width: number, height: number, limit: number) {
  const scale = Math.min(1, limit / Math.max(width, height));
  return [Math.max(1, Math.round(width * scale)), Math.max(1, Math.round(height * scale))] as const;
}

function computeArrival(w: number, h: number, origin: Point, o: MaskSettings) {
  const map = new Float32Array(w * h);
  const grains = new Uint8Array(w * h);
  const ratio = w / h;
  const distance = (x: number, y: number, px: number, py: number) =>
    Math.hypot((x - px) * ratio, y - py);
  const points: readonly (readonly [number, number, number])[] = [
    [origin[0], origin[1], 0],
    [0.28, 0.38, 0.35],
    [0.68, 0.3, 0.43],
    [0.51, 0.75, 0.52],
  ];
  let lo = Infinity,
    hi = -Infinity;
  for (let y = 0, i = 0; y < h; y++)
    for (let x = 0; x < w; x++, i++) {
      const u = (x + 0.5) / w,
        v = (y + 0.5) / h;
      let arrival = Infinity;
      for (const [px, py, delay] of points)
        arrival = Math.min(arrival, distance(u, v, px, py) + delay);
      const texture =
        noise(u * 8, v * 8, o.seed) * 0.47 +
        noise(u * 28, v * 28, o.seed + 7) * 0.14 +
        noise(u * 100, v * 100, o.seed + 29) * 0.038;
      const value =
        arrival + texture * o.irregularity * Math.min(1, distance(u, v, origin[0], origin[1]) * 7);
      map[i] = value;
      lo = Math.min(lo, value);
      hi = Math.max(hi, value);
      grains[i] = Math.round(hash(x, y, o.seed + 88) * 255);
    }
  const span = Math.max(0.001, hi - lo);
  for (let i = 0; i < map.length; i++) map[i] = (map[i]! - lo) / span;
  return { map, grains };
}

export type ArrivalCache = Map<string, ReturnType<typeof computeArrival>>;
const arrivalLimit = 6;

export function field(
  w: number,
  h: number,
  origin: Point,
  o: MaskSettings,
  arrivals: ArrivalCache,
) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const context = canvas.getContext('2d');
  if (!context) throw Error('Canvas 2D no disponible');
  const pixels = context.createImageData(w, h);
  const key = JSON.stringify([w, h, origin, o.irregularity, o.seed]);
  const arrival = arrivals.get(key) ?? computeArrival(w, h, origin, o);
  arrivals.delete(key);
  arrivals.set(key, arrival);
  if (arrivals.size > arrivalLimit) arrivals.delete(arrivals.keys().next().value!);
  const { map, grains } = arrival;
  const rgb = [1, 3, 5].map((at) => parseInt(o.color.slice(at, at + 2), 16));
  const feather = 0.025 + o.softness * 0.15;
  const data = pixels.data;
  for (let j = 0; j < data.length; j += 4) {
    data[j] = rgb[0]!;
    data[j + 1] = rgb[1]!;
    data[j + 2] = rgb[2]!;
  }
  return {
    canvas,
    render(progress: number, grainAlpha: number) {
      const p = clamp(progress);
      const head = p * (1 + feather);
      for (let i = 0, j = 3; i < map.length; i++, j += 4) {
        const t = head - map[i]!;
        if (p === 0 || (p !== 1 && t <= 0)) data[j] = 0;
        else if (p === 1 || t >= feather) data[j] = 255;
        else {
          const a = smooth(t / feather);
          const grain = (grains[i]! / 255 - 0.5) * (1 - Math.abs(a * 2 - 1)) * grainAlpha * 0.45;
          data[j] = Math.round(clamp(a + grain) * 255);
        }
      }
      context.putImageData(pixels, 0, 0);
    },
    dispose() {
      canvas.width = canvas.height = 0;
    },
  };
}
