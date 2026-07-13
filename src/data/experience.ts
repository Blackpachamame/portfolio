import type { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    organization: 'Pangea Infinity',
    role: 'Frontend Web Developer',
    period: 'Mayo de 2025 — noviembre de 2025',
    modality: 'Remota · Jornada parcial',
    summary:
      'Participé en el desarrollo de un e-commerce dentro de un equipo con metodologías ágiles.',
    contributions: [
      'Creación de componentes reutilizables y trabajo con rutas, módulos y servicios.',
      'Integración con APIs REST y manejo de estado con NgRx.',
      'Implementación de interfaces responsive.',
      'Participación en dailies, planificación, revisiones y tareas de testing con Jest y Testing Library.',
    ],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'NgRx'],
  },
  {
    organization: 'No Country',
    role: 'Frontend Web Developer en simulaciones laborales',
    period: 'Marzo — junio de 2024 · Septiembre — octubre de 2025',
    context: 'Simulaciones laborales, no empleos tradicionales.',
    summary:
      'Colaboré en equipos multidisciplinarios para desarrollar soluciones con React y TypeScript y presentarlas ante evaluadores.',
    contributions: [
      'Desarrollo de componentes reutilizables, consumo de APIs y manejo de estado.',
      'Implementación de diseño responsive.',
      'Trabajo con GitHub, ramas y Pull Requests.',
      'Colaboración con perfiles de diseño y backend.',
    ],
    technologies: ['React', 'TypeScript', 'APIs REST', 'GitHub'],
  },
  {
    organization: 'Puntarena',
    role: 'WordPress / Frontend Developer',
    period: 'Enero de 2026 — febrero de 2026',
    modality: 'Remota · Jornada parcial',
    context: 'Experiencia breve y puntual.',
    summary:
      'Trabajé en la maquetación y el mantenimiento visual de un sitio realizado con WordPress y Elementor.',
    contributions: [
      'Maquetación con Elementor, CSS personalizado y ajustes visuales.',
      'Correcciones responsive y optimización de imágenes.',
      'Carga y organización de contenido y comunicación con el cliente.',
    ],
    technologies: ['WordPress', 'Elementor', 'CSS'],
  },
];
