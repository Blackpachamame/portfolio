import type { Project } from '../types/portfolio';
import mundifigusPreview from '../assets/images/projects/mundifigus-preview.webp';
import nesDuelPreview from '../assets/images/projects/nesduel-preview.webp';
import pokeKitPreview from '../assets/images/projects/pokekit-preview.webp';
import techToJobPreview from '../assets/images/projects/techtojob-preview.webp';

export const projects: Project[] = [
  {
    name: 'NesDuel',
    category: 'Producto propio',
    role: 'Frontend Developer',
    period: 'jun 2026 – jul 2026',
    level: 'Destacado',
    image: nesDuelPreview,
    imageAlt: 'Pantalla principal de NesDuel con navegación y acceso a partidas.',
    description:
      'Juego táctico multijugador 1v1 en tiempo real, creado como producto propio por un equipo de dos personas. Trabajé principalmente en interfaces, responsive, integración de flujos frontend y validación de cambios.',
    contributions: [
      'Mejora de interfaces y experiencia de uso, con componentes y ajustes responsive.',
      'Configuración y validación del acceso con Google OAuth.',
      'Trabajo sobre el flujo frontend de Mercado Pago, coordinado con la lógica del backend.',
      'Implementación y validación de pruebas y revisión técnica antes de integrar cambios.',
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
    period: 'may 2026 – jun 2026',
    level: 'Destacado',
    image: mundifigusPreview,
    imageAlt: 'Interfaz de Mundifigus con funciones del álbum y el torneo.',
    description:
      'Plataforma del Mundial 2026 con álbum digital, marketplace, fixture y predicciones. Me incorporé a un frontend existente para implementar flujos del torneo y reorganizar progresivamente el estado y los datos.',
    contributions: [
      'Migración progresiva ante el exceso de Context y props: Zustand para estado de cliente y TanStack Query para datos del servidor.',
      'Implementación de fixture, grupos y playoffs.',
      'Implementación de flujos de predicciones.',
      'Ajustes visuales y responsive en álbum y marketplace.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
    primaryLink: { label: 'Visitar Mundifigus', href: 'https://mundifigus.com/' },
  },
  {
    name: 'TechToJob',
    category: 'Finalista · Torneo #2',
    role: 'Frontend Developer',
    level: 'Secundario',
    image: techToJobPreview,
    imageAlt:
      'Landing de TechToJob con la presentación de la comunidad y el acceso principal a Discord.',
    description:
      'Propuesta individual para la landing de TechToJob, comunidad de desarrolladores y empresas. Desarrollé la web a partir de su identidad visual existente; fue seleccionada como finalista del Torneo #2.',
    contributions: [
      'Propuesta visual, estructura y copy para explicar la comunidad y dirigir a los visitantes a Discord.',
      'Implementación frontend completa y responsive, con navegación accesible y animaciones GSAP que respetan reduced motion.',
      'SEO técnico: metadata, canonical, Open Graph, Twitter Cards, JSON-LD, sitemap y robots.txt.',
    ],
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'GSAP',
      'Sora (next/font)',
      'Vercel',
    ],
    primaryLink: { label: 'Ver TechToJob', href: 'https://techtojob.vercel.app/' },
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
      'Proyecto personal desarrollado individualmente para aprender React Native. Comenzó como una Pokédex con datos de una API y evolucionó con búsqueda, filtros, comparación y un minijuego, junto con mejoras de carga y experiencia mobile.',
    contributions: [
      'Búsqueda por nombre o número con debounce, filtros por tipo y carga paginada de datos desde la API.',
      'Desarrollo de fichas de detalle, comparación entre Pokémon y el juego «¿Quién es ese Pokémon?».',
      'Lista nativa con FlatList, actualización al deslizar y estados de carga, error y reintento.',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'APIs REST'],
    primaryLink: {
      label: 'Ver código de PokéKit',
      href: 'https://github.com/Blackpachamame/RN-PokeKit',
    },
  },
];
