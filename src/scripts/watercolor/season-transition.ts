import { seasonName, type Season } from '../../data/seasons';
import { canonical, layerBox } from './geometry';
import { dims, field, type ArrivalCache, type Point } from './field';
import { seasonImageCache } from './season-image-cache';

export const variable = ['landscape', 'ground', 'foliage'] as const;
export type Variable = (typeof variable)[number];
export interface Visual {
  src: string;
  scale: number;
  x: number;
  y: number;
  opacity: number;
  visible: boolean;
}
export interface SeasonFrame {
  season: Season;
  sharedSrc: string;
  layers: Record<Variable, Visual>;
}

const maskOrigin: Record<Variable, Point> = {
  landscape: [0.42, 0.63],
  ground: [0.54, 0.84],
  foliage: [0.53, 0.26],
};
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (v: number) => v * v * (3 - 2 * v);

function planSeason(changing: readonly Variable[]) {
  const duration = 1550;
  const step = duration * (1 - 42 / 100);
  const tracks = [...variable]
    .reverse()
    .filter((id) => changing.includes(id))
    .map((id, i) => ({
      id,
      start: i * step,
      duration,
      mask: {
        origin: maskOrigin[id],
        seed: 34 + variable.indexOf(id) * 31,
        softness: clamp(0.25 + { landscape: 0.15, ground: 0.04, foliage: 0 }[id]),
      },
    }));
  return { tracks, total: tracks.length ? duration + (tracks.length - 1) * step : 0 };
}

function visibleUrls(frame: SeasonFrame) {
  return [
    frame.sharedSrc,
    ...variable.filter((id) => frame.layers[id].visible).map((id) => frame.layers[id].src),
  ].filter(Boolean);
}
function canvas(w: number, h: number) {
  const surface = document.createElement('canvas');
  surface.width = w;
  surface.height = h;
  const ctx = surface.getContext('2d');
  if (!ctx) {
    surface.width = surface.height = 0;
    throw Error('Canvas 2D no disponible');
  }
  return {
    surface,
    ctx,
    release() {
      surface.remove();
      surface.width = surface.height = 0;
    },
  };
}

type Job = ReturnType<typeof createJob>;
// Horizontally registered landscapes may paint beyond the nominal board.
function bounds(a: SeasonFrame, b: SeasonFrame, ids: readonly Variable[]) {
  let x = 0,
    y = 0,
    right: number = canonical.width,
    bottom: number = canonical.height;
  for (const id of ids)
    for (const v of [a.layers[id], b.layers[id]]) {
      if (!v.visible) continue;
      x = Math.min(x, v.x);
      y = Math.min(y, v.y);
      right = Math.max(right, v.x + v.scale * canonical.width);
      bottom = Math.max(bottom, v.y + v.scale * canonical.height);
    }
  return { x, y, width: right - x, height: bottom - y };
}

function createJob(
  board: HTMLElement,
  images: Record<Variable, HTMLImageElement>,
  a: SeasonFrame,
  b: SeasonFrame,
  changing: Variable[],
  assets: Map<string, HTMLImageElement>,
  applyLayer: (id: Variable, v: Visual) => void,
  arrivals: ArrivalCache,
) {
  const plan = planSeason(changing);
  const rect = board.getBoundingClientRect();
  if (!rect.width || !rect.height) throw Error('El lienzo estacional no está visible.');
  const frame = bounds(a, b, changing);
  const style = getComputedStyle(board);
  const local = {
    width: parseFloat(style.width),
    height: parseFloat(style.height),
  };
  const box = layerBox(frame, local);
  if (!box.width || !box.height) throw Error('El lienzo estacional no está visible.');

  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  // Use the same rounded box as the images and keep the buffer within its pixel area.
  const [w, h] = dims(Math.floor(box.width * dpr), Math.floor(box.height * dpr), 1300);
  const [mw, mh] = dims(frame.width, frame.height, 420);
  const allocated: Array<() => void> = [];
  const surfaces = new Map<Variable, ReturnType<typeof canvas>>();
  const masks = new Map<Variable, ReturnType<typeof field>>();
  const staticAt = new Map<Variable, number>();
  let scratch: ReturnType<typeof canvas>;
  try {
    scratch = canvas(w, h);
    allocated.push(scratch.release);
    for (const track of plan.tracks) {
      const { origin, softness, seed } = track.mask;
      const center: Point = [
        (canonical.width * origin[0] - frame.x) / frame.width,
        (canonical.height * origin[1] - frame.y) / frame.height,
      ];
      const mask = field(
        mw,
        mh,
        center,
        {
          softness,
          seed,
          irregularity: 0.62,
          color: '#52786b',
        },
        arrivals,
      );
      masks.set(track.id, mask);
      allocated.push(mask.dispose);
    }
  } catch (error) {
    allocated.forEach((release) => release());
    throw error;
  }

  const samples = new Map<Visual, [number, number, number, number]>();
  for (const id of changing)
    for (const v of [a.layers[id], b.layers[id]]) {
      const r = layerBox(
        {
          x: v.x,
          y: v.y,
          width: canonical.width * v.scale,
          height: canonical.height * v.scale,
        },
        local,
      );
      samples.set(v, [
        ((r.x - box.x) * w) / box.width,
        ((r.y - box.y) * h) / box.height,
        (r.width * w) / box.width,
        (r.height * h) / box.height,
      ]);
    }
  const drawImage = (ctx: CanvasRenderingContext2D, v: Visual) => {
    if (!v.visible || !v.opacity) return;
    ctx.globalAlpha = v.opacity;
    ctx.drawImage(assets.get(v.src)!, ...samples.get(v)!);
    ctx.globalAlpha = 1;
  };
  function getSurface(id: Variable) {
    let item = surfaces.get(id);
    if (!item) {
      item = canvas(w, h);
      allocated.push(item.release);
      item.surface.dataset.seasonLayer = id;
      item.surface.setAttribute('aria-hidden', 'true');
      Object.assign(item.surface.style, {
        position: 'absolute',
        pointerEvents: 'none',
        left: box.x + 'px',
        top: box.y + 'px',
        width: box.width + 'px',
        height: box.height + 'px',
      });
      images[id].after(item.surface);
      surfaces.set(id, item);
    }
    return item;
  }
  function render(time: number) {
    for (const track of plan.tracks) {
      const { id } = track;
      const p = clamp((time - track.start) / track.duration);
      if (p === 0 || p === 1) {
        if (staticAt.get(id) !== p) {
          const surface = surfaces.get(id);
          if (surface) surface.surface.hidden = true;
          images[id].style.visibility = '';
          applyLayer(id, (p === 0 ? a : b).layers[id]);
          staticAt.set(id, p);
        }
        continue;
      }
      staticAt.delete(id);
      const { ctx, surface } = getSurface(id);
      surface.hidden = false;
      images[id].style.visibility = 'hidden';
      const mask = masks.get(id)!;
      ctx.clearRect(0, 0, w, h);
      mask.render(ease(p), 0.72);
      drawImage(ctx, a.layers[id]);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.drawImage(mask.canvas, 0, 0, w, h);
      const incoming = scratch.ctx;
      incoming.clearRect(0, 0, w, h);
      drawImage(incoming, b.layers[id]);
      incoming.globalCompositeOperation = 'destination-in';
      incoming.drawImage(mask.canvas, 0, 0, w, h);
      incoming.globalCompositeOperation = 'source-over';
      // Add the premultiplied results. Source-over here would attenuate outgoing alpha twice.
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(scratch.surface, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  return {
    a,
    b,
    plan,
    render,
    time: 0,
    direction: 1,
    dispose() {
      allocated.forEach((release) => release());
      changing.forEach((id) => {
        images[id].style.visibility = '';
      });
    },
  };
}

export interface Navigation {
  phase: 'idle' | 'preparing' | 'animating';
  confirmed: Season;
  origin: Season;
  destination: Season;
  reverse?: Season;
  direction: number;
}

interface Hooks {
  board: HTMLElement;
  images: Record<Variable, HTMLImageElement>;
  initial: SeasonFrame;
  apply: (frame: SeasonFrame) => void;
  applyLayer: (id: Variable, layer: Visual) => void;
  status: (navigation: Navigation, message: string) => void;
}

export function seasonController(hooks: Hooks) {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const listeners = new AbortController();
  const { signal } = listeners;
  let confirmed = hooks.initial,
    requested = confirmed;
  let phase: Navigation['phase'] = 'idle';
  let revision = 0,
    raf = 0;
  let last: number | undefined;
  let active: Job | undefined;
  const cache = seasonImageCache();
  const arrivals: ArrivalCache = new Map();
  cache.protect(visibleUrls(confirmed));

  function status(message: string) {
    const origin = active?.a.season ?? confirmed.season;
    const endpoint = !active || active.direction > 0 ? origin : active.b.season;
    hooks.status(
      {
        phase,
        confirmed: confirmed.season,
        origin,
        destination: requested.season,
        reverse: phase !== 'idle' && endpoint !== requested.season ? endpoint : undefined,
        direction: active?.direction ?? 1,
      },
      message,
    );
  }

  function halt() {
    cancelAnimationFrame(raf);
    last = undefined;
    active?.dispose();
    active = undefined;
    phase = 'idle';
  }

  function commit(frame: SeasonFrame, message: string) {
    halt();
    confirmed = requested = frame;
    cache.protect(visibleUrls(frame));
    hooks.apply(frame);
    status(message);
  }

  function tick(now: number) {
    const job = active;
    if (!job || document.hidden) return;
    const elapsed = last === undefined ? 0 : now - last;
    last = now;
    job.time = Math.max(0, Math.min(job.plan.total, job.time + elapsed * job.direction));
    try {
      job.render(job.time);
    } catch {
      commit(requested, 'Cambio estático aplicado.');
      return;
    }
    if ((job.direction > 0 && job.time === job.plan.total) || (job.direction < 0 && job.time === 0))
      commit(requested, '');
    else raf = requestAnimationFrame(tick);
  }

  async function request(destination: SeasonFrame, animate = true) {
    if (signal.aborted || (animate && destination.season === requested.season)) return;
    if (
      animate &&
      active &&
      destination.season !== active.a.season &&
      destination.season !== active.b.season
    )
      return;
    requested = destination;
    if (animate && active && !motion.matches) {
      const direction = destination.season === active.a.season ? -1 : 1;
      if (direction !== active.direction) {
        cancelAnimationFrame(raf);
        last = undefined;
        active.direction = direction;
        status('Invirtiendo hacia ' + seasonName[destination.season] + '…');
        if (!document.hidden) raf = requestAnimationFrame(tick);
      }
      return;
    }
    const token = ++revision;
    halt();
    hooks.apply(confirmed);
    if (destination.season === confirmed.season) {
      cache.protect(visibleUrls(confirmed));
      status('');
      return;
    }
    phase = 'preparing';
    status('Preparando ' + seasonName[destination.season] + '…');
    const source = confirmed;
    const changing = variable.filter((id) => source.layers[id].src !== destination.layers[id].src);
    const sourceUrls = visibleUrls(source).filter((url) => url !== source.sharedSrc);
    const destinationUrls = visibleUrls(destination).filter((url) => url !== destination.sharedSrc);
    const animation = animate && !motion.matches && !document.hidden && changing.length > 0;
    cache.protect([...sourceUrls, ...destinationUrls]);
    const decode = (urls: string[]) =>
      Promise.all(urls.map(async (src) => [src, await cache.decode(src)] as const));
    const outgoing = animation ? decode(sourceUrls).catch(() => undefined) : undefined;
    let incoming: Awaited<ReturnType<typeof decode>>;
    try {
      incoming = await decode(destinationUrls);
    } catch {
      if (token === revision) commit(confirmed, 'No se pudo cargar la estación.');
      return;
    }
    if (token !== revision) return;
    if (!animation || motion.matches || document.hidden) {
      commit(destination, '');
      return;
    }
    const previous = await outgoing;
    if (token !== revision) return;
    if (!previous || document.hidden) {
      commit(destination, 'Cambio estático aplicado.');
      return;
    }
    try {
      active = createJob(
        hooks.board,
        hooks.images,
        source,
        destination,
        changing,
        new Map([...previous, ...incoming]),
        hooks.applyLayer,
        arrivals,
      );
    } catch {
      commit(destination, 'Cambio estático aplicado.');
      return;
    }
    phase = 'animating';
    status('Cambiando a ' + seasonName[destination.season] + '…');
    raf = requestAnimationFrame(tick);
  }

  function cancel() {
    revision++;
    commit(confirmed, 'Cambio de estación cancelado.');
  }

  function interrupt() {
    if (phase !== 'idle') void request(requested, false);
  }

  motion.addEventListener(
    'change',
    () => {
      if (motion.matches) interrupt();
    },
    { signal },
  );
  window.addEventListener('resize', interrupt, { signal });
  document.addEventListener(
    'visibilitychange',
    () => {
      if (!active) return;
      cancelAnimationFrame(raf);
      last = undefined;
      if (!document.hidden) raf = requestAnimationFrame(tick);
    },
    { signal },
  );
  return {
    request,
    cancel,
    async warmNext(frame: SeasonFrame) {
      if (signal.aborted || phase !== 'idle' || motion.matches || document.hidden) return false;
      const src = visibleUrls(frame).find((src) => src !== confirmed.sharedSrc && !cache.has(src));
      if (!src) return false;
      try {
        await cache.decode(src, true);
      } catch {
        return false;
      }
      return true;
    },
    dispose() {
      listeners.abort();
      revision++;
      halt();
      hooks.apply(confirmed);
      cache.clear();
      arrivals.clear();
    },
  };
}
