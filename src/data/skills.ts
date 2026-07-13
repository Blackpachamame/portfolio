import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Stack principal',
    description: 'Tecnologías con mayor peso en mi perfil y en las tareas frontend que realizo.',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
      { name: 'APIs REST' },
      { name: 'Git y GitHub' },
    ],
  },
  {
    title: 'Tecnologías complementarias',
    description:
      'Herramientas que utilicé en proyectos, experiencias de equipo o tareas específicas.',
    skills: [
      { name: 'Next.js' },
      { name: 'Angular' },
      { name: 'NgRx' },
      { name: 'Zustand' },
      { name: 'TanStack Query' },
      { name: 'React Hook Form' },
      { name: 'Zod' },
      { name: 'Astro' },
      { name: 'WordPress y Elementor' },
      { name: 'React Native y Expo' },
    ],
  },
];
