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
    image: nesDuelPreview,
    imageAlt: 'Pantalla principal de NesDuel con navegación y acceso a partidas.',
    description:
      'Juego táctico multijugador 1v1 en tiempo real, creado como producto propio por un equipo de dos personas. Trabajé principalmente en interfaces, responsive, integración de flujos frontend y validación de cambios.',
    contributions: [
      'Implementación de interfaces, componentes y ajustes responsive.',
      'Configuración y validación del acceso con Google OAuth.',
      'Trabajo sobre el flujo frontend de Mercado Pago, coordinado con la lógica del backend.',
      'Implementación de pruebas y revisión técnica de cambios antes de integrarlos.',
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
    image: mundifigusPreview,
    imageAlt: 'Interfaz de Mundifigus con funciones del álbum y el torneo.',
    description:
      'Plataforma web para el Mundial 2026 con álbum digital, marketplace, fixture y predicciones. Me incorporé a un frontend existente y participé en su reorganización progresiva y en la implementación de flujos del torneo.',
    contributions: [
      'Migración progresiva del estado de cliente a Zustand y de los datos del servidor a TanStack Query.',
      'Implementación de fixture, grupos y playoffs.',
      'Implementación de flujos de predicciones.',
      'Ajustes visuales y responsive en álbum y marketplace.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
    primaryLink: { label: 'Visitar Mundifigus', href: 'https://mundifigus.com/' },
  },
  {
    name: 'ClipFlow',
    category: 'Simulación laboral',
    role: 'Frontend Developer',
    level: 'Secundario',
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
    image: pokeKitPreview,
    imageAlt:
      'Tres pantallas de PokéKit con la Pokédex, el menú principal y el juego «¿Quién es ese Pokémon?».',
    description:
      'Aplicación móvil personal desarrollada con React Native y Expo para explorar Pokémon con búsqueda, filtros y fichas de detalle, gestionar favoritos y jugar a «¿Quién es ese Pokémon?».',
    technologies: ['React Native', 'Expo', 'TypeScript', 'APIs REST'],
    primaryLink: { label: 'Ver código', href: 'https://github.com/Blackpachamame/RN-PokeKit' },
  },
];
