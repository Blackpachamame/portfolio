import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend principal',
    description:
      'React y TypeScript como núcleo web; Next.js en productos actuales y Angular en experiencia profesional previa.',
    skills: [
      { name: 'React', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
      { name: 'Next.js' },
      { name: 'Angular' },
    ],
  },
  {
    title: 'Estado y datos',
    description:
      'Integración con APIs REST, datos del servidor con TanStack Query y estado de cliente según el proyecto.',
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
      'Este portfolio, aprendizaje mobile, colaboración en la preparación Android y trabajos puntuales con CMS.',
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
      'Versionado, pull requests, formato y tests; otras herramientas como apoyo al equipo.',
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
