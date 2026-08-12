export type Locale = 'en' | 'es';

export type LanguageLevel = 'native' | 'professional' | 'advanced' | 'intermediate' | 'basic';

export interface PersonalInfo {
  name: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  phone?: string;
}

export interface Experience {
  id: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  technologies?: readonly string[];
}

export interface Project {
  id: string;
  name: string;
  repository?: string;
  url?: string;
  technologies: readonly string[];
}

export interface SkillGroup {
  id: string;
  skills: readonly string[];
}

export interface Education {
  id: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
}

export interface Language {
  id: string;
  level: LanguageLevel;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: readonly Experience[];
  projects: readonly Project[];
  skillGroups: readonly SkillGroup[];
  education: readonly Education[];
  languages: readonly Language[];
  certifications: readonly Certification[];
}
