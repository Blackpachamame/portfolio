import type { SecondaryCollaboration } from '../types/portfolio';

export const secondaryCollaborations: SecondaryCollaboration[] = [
  {
    name: 'NesConsulting',
    category: 'Proyecto interno',
    period: 'Mayo — junio de 2026',
    role: 'Colaboración frontend y mantenimiento',
    description:
      'Sitio institucional de un proyecto interno de servicios digitales, desarrollado sobre una base existente.',
    contributions: [
      'Configuración de Prettier, normalización del flujo con Bun y ajustes de build y documentación.',
      'Mejoras de contraste, formularios, responsive y consistencia visual.',
      'Correcciones de contenido, metadatos, URLs y refactorización del footer.',
    ],
    link: {
      label: 'Visitar NesConsulting',
      href: 'https://nes-consulting.com/',
    },
  },
];
