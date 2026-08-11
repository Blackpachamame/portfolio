import type { NavigationLink, ProfileDetail, SiteInfo, SocialLink } from '../types/portfolio';

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
  titleLines: ['Marcos Andrés', 'Travaglini'],
  introduction:
    'Desarrollo interfaces web claras, responsivas y mantenibles con React y TypeScript, colaborando con equipos en productos reales.',
  highlights: [
    'Trabajo en producto',
    'Colaboración con diseño y backend',
    'Remoto desde Argentina',
  ],
};

export const profileContent = {
  eyebrow: '01 — Perfil',
  title: 'Construir frontend también es entender el producto.',
  paragraphs: [
    'Mi experiencia combina el desarrollo de interfaces nuevas con el trabajo sobre frontends ya iniciados: entender su estructura, mantener componentes y considerar cómo cada cambio afecta al flujo completo del producto.',
    'Participé en productos propios y equipos multidisciplinarios, coordinando cambios con diseño y backend. Busco seguir desarrollándome dentro de equipos de producto, con feedback y code review, aportando en tareas frontend concretas.',
  ],
};

export const profileDetails: ProfileDetail[] = [
  {
    label: 'Formación',
    value: 'Técnico Universitario en Desarrollo Web',
    supportingText: 'Universidad Nacional del Comahue',
  },
  {
    label: 'Foco actual',
    value: 'Frontend · Producto · Interfaces · Integraciones',
  },
  {
    label: 'Forma de trabajo',
    value: 'Colaboración · Git · Pull Requests · Code review',
    supportingText: 'Coordinación con diseño y backend',
  },
];

export const contactContent = {
  eyebrow: '06 — Contacto',
  title: '¿Buscás un Frontend Developer Junior para tu equipo?',
  description:
    'Estoy disponible para oportunidades remotas donde pueda participar en tareas frontend concretas, colaborar con otros perfiles y seguir creciendo mediante feedback técnico y code review.',
  primaryAction: 'Escribirme por correo',
  availabilityLabel: 'Disponible para',
  availability: 'Posiciones frontend junior · Trabajo remoto · Equipos con code review',
};
