import type { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    organization: 'Pangea Infinity',
    role: 'Frontend Web Developer',
    period: 'Mayo de 2025 — noviembre de 2025',
    modality: 'Remota · Jornada parcial',
    type: 'Experiencia en equipo',
    summary:
      'Participé en el desarrollo de un e-commerce dentro de un equipo multidisciplinario utilizando metodologías ágiles.',
    contributions: [
      'Desarrollo de componentes reutilizables.',
      'Trabajo con rutas, módulos y servicios.',
      'Integración con APIs REST.',
      'Manejo de estado con NgRx.',
      'Ajustes responsive y mejoras de UI.',
      'Participación en dailies, planificación y revisión de tareas.',
      'Colaboración con perfiles de diseño y backend.',
      'Implementación de tests unitarios con Jest y Testing Library.',
    ],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'NgRx', 'Jest', 'Testing Library'],
  },
  {
    organization: 'No Country',
    role: 'Frontend Web Developer',
    period: 'Marzo a junio de 2024 · Septiembre a octubre de 2025',
    modality: 'Remota',
    type: 'Simulación laboral',
    summary:
      'Participé en equipos multidisciplinarios desarrollando aplicaciones web bajo dinámicas similares a proyectos laborales.',
    contributions: [
      'Desarrollo de interfaces con React y TypeScript.',
      'Creación de componentes reutilizables.',
      'Diseño responsive.',
      'Consumo de APIs REST.',
      'Manejo de estado.',
      'Trabajo con ramas y Pull Requests.',
      'Colaboración con perfiles de diseño y backend.',
      'Participación en Scrum.',
      'Presentación de soluciones ante evaluadores.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'APIs REST', 'GitHub'],
  },
  {
    organization: 'Puntarena Eventos',
    role: 'WordPress / Frontend Developer',
    period: 'Enero a febrero de 2026',
    modality: 'Remota · Jornada parcial',
    type: 'Proyecto puntual',
    summary:
      'Colaboración breve en la maquetación y mantenimiento visual de un sitio para una empresa de eventos.',
    contributions: [
      'Maquetación de páginas con Elementor.',
      'Ajustes visuales y responsive.',
      'CSS personalizado.',
      'Optimización de imágenes.',
      'Carga y organización de contenido.',
      'Comunicación directa con el cliente.',
    ],
    technologies: ['WordPress', 'Elementor', 'CSS'],
  },
];
