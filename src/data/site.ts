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
  email: 'marcos.travaglini@est.fi.uncoma.edu.ar',
  title: 'Marcos Travaglini | Frontend Developer Junior',
  description:
    'Portfolio de Marcos Travaglini, Frontend Developer Junior enfocado en React, TypeScript, interfaces responsive y APIs REST.',
};

export const navigationLinks: NavigationLink[] = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
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

export const headerContent = {
  shortName: 'Marcos T.',
  descriptor: 'Frontend Developer',
};

export const heroContent = {
  eyebrow: 'Frontend Developer · Neuquén, Argentina',
  titleLines: ['Marcos Andrés', 'Travaglini'],
  introduction:
    'Desarrollo interfaces web claras, responsivas y mantenibles con React y TypeScript, colaborando con equipos en productos reales.',
  detailsLabel: 'En la práctica',
  supportingText:
    'Experiencia práctica en UI, componentes reutilizables, integración con APIs y mantenimiento de frontends existentes.',
  highlights: ['Disponibilidad remota', 'React', 'TypeScript', 'APIs REST'],
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
      'Implementación de interfaces a partir de diseños y creación de componentes reutilizables con estructura clara y consistente.',
  },
  {
    title: 'Responsive y consistencia visual',
    description:
      'Adaptación de vistas a distintos tamaños de pantalla, corrección de detalles visuales y mantenimiento de patrones existentes.',
  },
  {
    title: 'Formularios e integración con APIs',
    description:
      'Implementación de formularios, validaciones y consumo de APIs REST desde el frontend.',
  },
  {
    title: 'Trabajo dentro de equipos',
    description:
      'Coordinación mediante Git, ramas y Pull Requests, colaborando con diseño, backend y revisiones de código.',
  },
  {
    title: 'Mantenimiento y mejoras progresivas',
    description:
      'Corrección y reorganización de código existente, migraciones graduales de estado o datos y prevención de regresiones.',
  },
];

export const contactContent = {
  eyebrow: '07 — Contacto',
  title: '¿Buscás un Frontend Developer Junior para tu equipo?',
  description:
    'Estoy disponible para oportunidades remotas donde pueda participar en tareas frontend concretas, colaborar con otros perfiles y seguir creciendo mediante feedback técnico y code review.',
  primaryAction: 'Escribirme por correo',
  availabilityLabel: 'Disponible para',
  availability: 'Posiciones frontend junior · Trabajo remoto · Equipos con code review',
};
