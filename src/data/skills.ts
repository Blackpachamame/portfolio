import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend principal',
    description:
      'Tecnologías con las que trabajo con mayor frecuencia para implementar interfaces web.',
    skills: [
      { name: 'React', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'JavaScript' },
      { name: 'Angular' },
      { name: 'Next.js' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Estado y datos',
    description:
      'Herramientas utilizadas para manejar estado, sincronizar datos y conectar el frontend con servicios externos.',
    skills: [
      { name: 'APIs REST' },
      { name: 'TanStack Query' },
      { name: 'Zustand' },
      { name: 'NgRx' },
      { name: 'Context API' },
    ],
  },
  {
    title: 'Experiencia complementaria',
    description:
      'Tecnologías aplicadas en proyectos específicos, productos propios o trabajos puntuales.',
    skills: [
      { name: 'Astro' },
      { name: 'React Native' },
      { name: 'Expo' },
      { name: 'Capacitor' },
      { name: 'WordPress' },
      { name: 'Elementor' },
    ],
  },
  {
    title: 'Flujo de trabajo y calidad',
    description:
      'Herramientas que utilizo para colaborar, mantener consistencia y validar cambios.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Bun' },
      { name: 'Prettier' },
      { name: 'Jest' },
      { name: 'Testing Library' },
      { name: 'Figma' },
      { name: 'Jira' },
      { name: 'Trello' },
    ],
  },
];
