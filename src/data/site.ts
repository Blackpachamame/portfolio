import type { ContributionArea, NavigationLink, SiteInfo, SocialLink } from '../types/portfolio';

export const siteInfo: SiteInfo = {
  name: 'Marcos Andrés Travaglini',
  role: 'Frontend Developer Junior',
  location: 'Neuquén, Argentina',
  education: 'Técnico Universitario en Desarrollo Web por la Universidad Nacional del Comahue.',
  title: 'Marcos Travaglini | Frontend Developer Junior',
  description:
    'Portfolio de Marcos Travaglini, Frontend Developer Junior enfocado en React, TypeScript, interfaces responsive y APIs REST.',
};

export const navigationLinks: NavigationLink[] = [
  { label: 'Perfil', href: '#perfil' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Aportes', href: '#aportes' },
  { label: 'Stack', href: '#stack' },
  { label: 'Colaboraciones', href: '#colaboraciones' },
  { label: 'Contacto', href: '#contacto' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    label: 'Perfil de Marcos Travaglini en LinkedIn',
    href: 'https://www.linkedin.com/in/marcos-travaglini/',
  },
  {
    platform: 'GitHub',
    label: 'Perfil de Marcos Travaglini en GitHub',
    href: 'https://github.com/Blackpachamame',
  },
];

export const heroContent = {
  eyebrow: 'Frontend Developer Junior · Neuquén, Argentina',
  titleLines: ['Marcos Andrés', 'Travaglini'],
  introduction:
    'Construyo interfaces web claras, responsivas y mantenibles con React y TypeScript, colaborando en productos reales junto a equipos de desarrollo.',
  supportingText:
    'Experiencia práctica en UI, componentes reutilizables, integración con APIs y mantenimiento de frontends existentes.',
  highlights: ['Trabajo remoto', 'React', 'TypeScript', 'APIs REST'],
};

export const profileContent = [
  'Soy Técnico Universitario en Desarrollo Web y cuento con experiencia práctica en proyectos reales, colaborativos y simulaciones laborales.',
  'Me interesa sumarme de forma remota a equipos de producto, SaaS o aplicaciones web donde pueda resolver tareas frontend concretas, recibir feedback técnico y seguir creciendo mediante code review.',
];

export const contributionAreas: ContributionArea[] = [
  {
    title: 'Interfaces y componentes',
    description:
      'Implementación de interfaces a partir de diseños y creación de componentes reutilizables con una estructura clara.',
  },
  {
    title: 'Responsive y consistencia',
    description:
      'Ajustes para distintos tamaños de pantalla, correcciones visuales y mantenimiento de frontends existentes.',
  },
  {
    title: 'Formularios y APIs',
    description:
      'Trabajo con formularios, validaciones y consumo e integración de APIs REST desde el frontend.',
  },
  {
    title: 'Trabajo colaborativo',
    description:
      'Uso de Git, ramas y Pull Requests, coordinación con diseño y backend, y participación en revisiones de cambios.',
  },
  {
    title: 'Mejoras progresivas',
    description:
      'Corrección, reorganización y migraciones progresivas de estado y datos con supervisión técnica para reducir regresiones.',
  },
];

export const contactContent = {
  title: 'Hablemos sobre una oportunidad frontend',
  description:
    'Estoy disponible preferentemente para posiciones remotas dentro de equipos con feedback técnico y code review.',
};
