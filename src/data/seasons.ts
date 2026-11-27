export type Season = 'spring' | 'summer' | 'autumn' | 'winter';
export type SeasonMode = 'auto' | Season;
export const seasonName: Record<Season, string> = {
  spring: 'Primavera',
  summer: 'Verano',
  autumn: 'Otoño',
  winter: 'Invierno',
};
export const seasonStorageKey = 'portfolio-season';

export function isSeasonMode(value: unknown): value is SeasonMode {
  return value === 'auto' || (typeof value === 'string' && Object.hasOwn(seasonName, value));
}

export const seasonCalendar = [
  'summer',
  'summer',
  'autumn',
  'autumn',
  'autumn',
  'winter',
  'winter',
  'winter',
  'spring',
  'spring',
  'spring',
  'summer',
] as const satisfies readonly Season[];

export const treeMedia = '(min-width: 1024px) and (min-height: 560px)';
