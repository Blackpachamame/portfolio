// Select a single trunk at build time. Use tree-base-q95.webp for the comparison build.
import tree from '../assets/watercolor/tree-base.webp?url';
import autumnFoliage from '../assets/watercolor/autumn-foliage-v2.webp?url';
import autumnGround from '../assets/watercolor/autumn-ground.webp?url';
import autumnLandscape from '../assets/watercolor/autumn-landscape.webp?url';
import springFoliage from '../assets/watercolor/spring-foliage-v2.webp?url';
import springGround from '../assets/watercolor/spring-ground.webp?url';
import springLandscape from '../assets/watercolor/spring-landscape.webp?url';
import summerFoliage from '../assets/watercolor/summer-foliage.webp?url';
import summerGround from '../assets/watercolor/summer-ground-v2.webp?url';
import summerLandscape from '../assets/watercolor/summer-landscape.webp?url';
import winterFrost from '../assets/watercolor/winter-foliage-refined.webp?url';
import winterSnapped from '../assets/watercolor/winter-foliage-snapped-12.webp?url';
import winterCrown from '../assets/watercolor/winter-foliage-snapped-12-crown.webp?url';
import winterCrownV2 from '../assets/watercolor/winter-foliage-snapped-12-crown-v2.webp?url';
import winterSnow from '../assets/watercolor/winter-foliage-v3.webp?url';
import winterGround from '../assets/watercolor/winter-ground.webp?url';
import winterLandscape from '../assets/watercolor/winter-landscape.webp?url';
import type { Season } from './seasons';

export { canonical as watercolorCanvas } from '../scripts/watercolor/geometry';

// Select a winter foliage variant before building.
type WinterFoliageVariant =
  'bare' | 'frost' | 'snapped12' | 'snapped12-crown' | 'snapped12-crown-v2' | 'snow-v3';
const winterFoliageVariant = 'snapped12-crown-v2' as WinterFoliageVariant;
const winterFoliage =
  winterFoliageVariant === 'snapped12-crown-v2'
    ? winterCrownV2
    : winterFoliageVariant === 'snapped12-crown'
      ? winterCrown
      : winterFoliageVariant === 'bare'
        ? ''
        : winterFoliageVariant === 'frost'
          ? winterFrost
          : winterFoliageVariant === 'snapped12'
            ? winterSnapped
            : winterSnow;
export const watercolorTree = tree;

type LayerId = 'landscape' | 'ground' | 'foliage';
interface Layer {
  id: LayerId;
  src: string;
  x: number;
  y: number;
  scale: number;
}

function layer(id: LayerId, src: string, x = 0, y = 0, scale = 1): Layer {
  return { id, src, x, y, scale };
}

// The transforms match the laboratory's production manifest in canonical pixel coordinates.
export const watercolorSeasons = {
  spring: [
    layer('landscape', springLandscape, -51.50214592274678, -41.84549356223176, 1.1030042918454934),
    layer('ground', springGround, -9.656652360515022, 16.094420600858367, 1.0515021459227467),
    layer('foliage', springFoliage),
  ],
  summer: [
    layer('landscape', summerLandscape),
    layer('ground', summerGround),
    layer('foliage', summerFoliage),
  ],
  autumn: [
    layer('landscape', autumnLandscape),
    layer('ground', autumnGround),
    layer('foliage', autumnFoliage),
  ],
  winter: [
    layer('landscape', winterLandscape),
    layer('ground', winterGround),
    layer('foliage', winterFoliage),
  ],
} satisfies Record<Season, readonly Layer[]>;

// Native coordinates from the approved 1536 by 1024 anchor map.
export const watercolorAnchors = [
  { id: 'perfil', label: 'Perfil', x: 413, y: 406 },
  { id: 'experiencia', label: 'Experiencia', x: 342, y: 553 },
  { id: 'proyectos', label: 'Proyectos', x: 978, y: 241 },
  { id: 'stack', label: 'Stack', x: 1006, y: 389 },
  { id: 'contacto', label: 'Contacto', x: 967, y: 574 },
] as const;
