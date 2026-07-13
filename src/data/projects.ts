import type { Project, SecondaryCollaboration } from '../types/portfolio';

export const featuredProjects: Project[] = [
  {
    name: 'NesDuel',
    period: 'Junio — julio de 2026',
    type: 'Producto propio desarrollado por un equipo de dos personas',
    role: 'Co-creador y Frontend Developer',
    description:
      'Juego táctico multijugador 1v1 en tiempo real desarrollado con Next.js, TypeScript y tecnologías modernas del ecosistema frontend.',
    contributions: [
      'Desarrollo y mejora de interfaces, ajustes responsive y correcciones de experiencia de usuario.',
      'Configuración de Prettier y configuración y validación de Google OAuth.',
      'Trabajo sobre el flujo frontend de Mercado Pago.',
      'Implementación, ajuste y validación de tests y ejecución de comprobaciones antes de aceptar cambios.',
      'Coordinación continua con el desarrollador backend y participación en tareas de Capacitor, Android y despliegue.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Google OAuth',
      'Mercado Pago',
      'Capacitor',
    ],
    liveLink: { label: 'Visitar el sitio de NesDuel', href: 'https://nesduel.com/es/' },
    repositoryVisibility: 'Privado',
    caseStudyPath: '/proyectos/nesduel',
  },
  {
    name: 'Mundifigus',
    period: 'Mayo — junio de 2026',
    type: 'Producto en equipo ya iniciado · Publicado en producción',
    role: 'Frontend Developer',
    description:
      'Plataforma web creada alrededor del Mundial 2026, con álbum digital, marketplace, fixture, calendario, grupos, playoffs y predicciones.',
    contributions: [
      'Revisión, limpieza y reorganización progresiva de un frontend existente.',
      'Propuesta y migración progresiva desde un uso excesivo de Context y paso de props hacia Zustand y TanStack Query.',
      'Implementación de fixture, calendario, grupos, playoffs y predicciones.',
      'Primera versión del flujo de intercambio del marketplace.',
      'Ajustes visuales en marketplace y álbum, correcciones responsive y mejoras de consistencia visual.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
    liveLink: { label: 'Visitar el sitio de Mundifigus', href: 'https://mundifigus.com/' },
    repositoryVisibility: 'Privado',
    caseStudyPath: '/proyectos/mundifigus',
  },
];

export const secondaryCollaborations: SecondaryCollaboration[] = [
  {
    name: 'NesConsulting',
    period: 'Mayo — junio de 2026',
    role: 'Colaboración frontend y mantenimiento',
    description: 'Sitio institucional de un proyecto interno de servicios digitales.',
    contributions: [
      'Configuración de Prettier, normalización con Bun y ajustes de build y documentación.',
      'Mejoras de contraste, formularios, responsive y consistencia visual.',
      'Correcciones de contenido, metadatos, URLs y refactorización del footer.',
    ],
    link: {
      label: 'Visitar el sitio de NesConsulting',
      href: 'https://nes-consulting.com/',
    },
  },
];
