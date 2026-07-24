import type { Project } from '../types/portfolio';
import clipFlowPreview from '../assets/images/projects/clipflow-preview.webp';
import mundifigusPreview from '../assets/images/projects/mundifigus-preview.webp';
import nesDuelPreview from '../assets/images/projects/nesduel-preview.webp';
import pokeKitPreview from '../assets/images/projects/pokekit-preview.webp';

export const projects: Project[] = [
  {
    name: 'NesDuel',
    category: 'Producto propio',
    role: 'Frontend Developer',
    level: 'Destacado',
    media: 'Desktop',
    image: nesDuelPreview,
    imageAlt: 'Pantalla principal de NesDuel con navegación y acceso a partidas.',
    description:
      'Juego táctico multijugador 1v1 desarrollado como producto propio por un equipo de dos personas. Mi foco estuvo en la interfaz, el responsive, la integración de flujos del frontend y la validación de cambios.',
    contributions: [
      'Implementación de UI y componentes.',
      'Adaptación responsive.',
      'Integración del acceso con Google.',
      'Flujo frontend de Mercado Pago.',
      'Pruebas y revisión de cambios.',
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
    primaryLink: { label: 'Visitar NesDuel', href: 'https://nesduel.com/es/' },
  },
  {
    name: 'Mundifigus',
    category: 'Producto colaborativo',
    role: 'Frontend Developer',
    level: 'Destacado',
    media: 'Desktop',
    image: mundifigusPreview,
    imageAlt: 'Interfaz de Mundifigus con funciones del álbum y el torneo.',
    description:
      'Plataforma web para el Mundial 2026 con álbum digital, marketplace, fixture y predicciones. Me incorporé a una base existente y trabajé en la reorganización progresiva del frontend y en flujos completos del torneo.',
    contributions: [
      'Migración progresiva del estado a Zustand.',
      'Gestión de datos con TanStack Query.',
      'Implementación de fixture, grupos y playoffs.',
      'Flujos de predicciones.',
      'Ajustes visuales del álbum y marketplace.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
    primaryLink: { label: 'Visitar Mundifigus', href: 'https://mundifigus.com/' },
  },
  {
    name: 'ClipFlow',
    category: 'Simulación laboral',
    role: 'Frontend Developer',
    level: 'Secundario',
    media: 'Desktop',
    image: clipFlowPreview,
    imageAlt: 'Página principal de ClipFlow para transformar videos en clips verticales.',
    description:
      'Aplicación desarrollada en una simulación de No Country para transformar videos horizontales en clips verticales. Trabajé en el frontend dentro de un equipo multidisciplinario.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'APIs REST'],
    primaryLink: { label: 'Ver código', href: 'https://github.com/Blackpachamame/ClipFlow' },
  },
  {
    name: 'PokéKit',
    category: 'Proyecto personal mobile',
    role: 'React Native Developer',
    level: 'Secundario',
    media: 'Mobile',
    image: pokeKitPreview,
    imageAlt: 'Pantalla móvil de PokéKit con información de Pokémon.',
    description:
      'Aplicación móvil creada para practicar React Native y Expo mediante exploración, búsqueda, filtros, detalles y favoritos de Pokémon.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'APIs REST'],
    primaryLink: { label: 'Ver código', href: 'https://github.com/Blackpachamame/RN-PokeKit' },
  },
];
