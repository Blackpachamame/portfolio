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

export interface Experience {
  organization: string;
  role: string;
  period: string;
  modality?: string;
  context?: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  period: string;
  type: string;
  role: string;
  description: string;
  contributions: string[];
  technologies: string[];
  liveLink: ExternalLink;
  repositoryVisibility: 'Público' | 'Privado';
  caseStudyPath: `/proyectos/${string}`;
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
