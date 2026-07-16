import type {
  ContributionArea,
  NavigationLink,
  ProfileDetail,
  SiteInfo,
  SocialLink,
} from '../types/portfolio';

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

export const profileContent = {
  eyebrow: '01 — Perfil',
  title: 'Frontend con experiencia práctica y foco en producto.',
  paragraphs: [
    'Soy Técnico Universitario en Desarrollo Web y cuento con experiencia práctica en proyectos reales y colaborativos, además de simulaciones laborales.',
    'Trabajo principalmente con React y TypeScript, creando componentes, ajustando interfaces responsive e integrando APIs REST.',
    'Busco sumarme de forma remota a un equipo de producto, SaaS o aplicaciones web donde pueda aportar en tareas frontend concretas y seguir creciendo mediante feedback técnico y code review.',
  ],
};

export const profileDetails: ProfileDetail[] = [
  {
    label: 'Formación',
    value: 'Técnico Universitario en Desarrollo Web',
    supportingText: 'Universidad Nacional del Comahue',
  },
  {
    label: 'Foco',
    value: 'React · TypeScript · UI responsive · APIs REST',
  },
  {
    label: 'Modalidad',
    value: 'Remoto desde Argentina · Equipos con code review',
  },
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
