import type { ImageMetadata } from 'astro';

export interface ExternalLink {
  label: string;
  href: string;
}

export interface SiteInfo {
  name: string;
  role: string;
  location: string;
  education: string;
  title: string;
  description: string;
}

export interface NavigationLink {
  label: string;
  href: `#${string}`;
}

export interface SocialLink extends ExternalLink {
  platform: string;
}

export interface ProfileDetail {
  label: string;
  value: string;
  supportingText?: string;
}

export type ExperienceType = 'Experiencia en equipo' | 'Simulación laboral' | 'Proyecto puntual';

export interface Experience {
  organization: string;
  role: string;
  period: string;
  modality: string;
  type: ExperienceType;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export type ProjectLevel = 'Destacado' | 'Secundario';

export type ProjectMedia = 'Desktop' | 'Mobile';

export interface Project {
  name: string;
  category: string;
  role: string;
  level: ProjectLevel;
  media: ProjectMedia;
  image: ImageMetadata;
  imageAlt: string;
  description: string;
  contributions?: string[];
  technologies: string[];
  primaryLink: ExternalLink;
  caseStudyPath?: `/proyectos/${string}`;
}

export interface Skill {
  name: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export interface SecondaryCollaboration {
  name: string;
  category: string;
  period: string;
  role: string;
  description: string;
  contributions: string[];
  link: ExternalLink;
}

export interface ContributionArea {
  title: string;
  description: string;
}
