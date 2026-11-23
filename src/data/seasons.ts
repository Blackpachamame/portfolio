export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

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
