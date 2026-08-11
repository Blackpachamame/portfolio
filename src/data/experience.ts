import type { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    organization: 'Pangea Infinity',
    role: 'Frontend Web Developer',
    period: 'Mayo — noviembre de 2025',
    modality: 'Remota · Jornada parcial',
    type: 'Experiencia en equipo',
    summary:
      'Participé en el desarrollo frontend de un e-commerce con Angular, integrando interfaces, estado y APIs dentro de un equipo multidisciplinario con metodologías ágiles.',
    contributions: [
      'Desarrollo de componentes reutilizables y trabajo con rutas, módulos y servicios en Angular.',
      'Integración con APIs REST y manejo de estado con NgRx.',
      'Ajustes responsive y mejoras de interfaz con Tailwind CSS.',
      'Participación en dailies, planificación y revisiones junto a perfiles de diseño y backend.',
      'Implementación de tests unitarios con Jest y Testing Library.',
    ],
    technologies: ['Angular', 'TypeScript', 'NgRx', 'Tailwind CSS'],
  },
  {
    organization: 'No Country',
    role: 'Frontend Web Developer',
    period: 'Mar. — jun. 2024 · Sep. — oct. 2025 · Feb. — mar. 2026',
    modality: 'Remota',
    type: 'Simulación laboral',
    summary:
      'Participé en simulaciones laborales dentro de equipos multidisciplinarios, desarrollando aplicaciones web bajo dinámicas similares a proyectos de trabajo.',
    contributions: [
      'Desarrollo de interfaces y componentes reutilizables con React y TypeScript.',
      'Implementación responsive, consumo de APIs REST y manejo de estado.',
      'Trabajo colaborativo con GitHub, ramas y Pull Requests junto a perfiles de diseño y backend.',
      'Participación en Scrum y presentación de soluciones ante evaluadores.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'APIs REST', 'GitHub'],
  },
  {
    organization: 'Puntarena Eventos',
    role: 'WordPress / Frontend Developer',
    period: 'Enero — febrero de 2026',
    modality: 'Remota · Jornada parcial',
    type: 'Proyecto puntual',
    summary:
      'Colaboración breve en la maquetación con Elementor y el mantenimiento visual de un sitio para una empresa de eventos, con ajustes responsive, CSS personalizado, optimización de imágenes y organización de contenido en coordinación con el cliente.',
    contributions: [],
    technologies: ['WordPress', 'Elementor', 'CSS'],
  },
];
