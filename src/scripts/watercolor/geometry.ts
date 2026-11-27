export const canonical = { width: 1536, height: 1024 };

export const usesLayerGrid = () => CSS.supports('left', 'round(nearest, 0%, 1px)');

export function layerBox(
  box: { x: number; y: number; width: number; height: number },
  local: { width: number; height: number },
) {
  const grid = usesLayerGrid();
  const edge = (n: number, size: number, axis: number) => {
    const value = (n / size) * axis;
    return grid ? Math.round(value) : value;
  };
  const x = (n: number) => edge(n, canonical.width, local.width);
  const y = (n: number) => edge(n, canonical.height, local.height);
  return {
    x: x(box.x),
    y: y(box.y),
    width: x(box.x + box.width) - x(box.x),
    height: y(box.y + box.height) - y(box.y),
  };
}
