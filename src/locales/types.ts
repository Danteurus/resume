import type {
  EducationId,
  ExperienceId,
  LanguageId,
  ProjectId,
  SkillGroupId,
} from '../data/resume';
import type { LanguageLevel } from '../data/types';

export interface ExperienceTranslation {
  role: string;
  summary?: string;
  bullets: readonly string[];
}

export interface ProjectTranslation {
  description: string;
  bullets?: readonly string[];
}

export interface SkillGroupTranslation {
  label: string;
}

export interface EducationTranslation {
  degree: string;
}

export interface LanguageTranslation {
  name: string;
}

export interface SectionTranslations {
  summary: string;
  experience: string;
  projects: string;
  skills: string;
  education: string;
  languages: string;
  certifications: string;
}

export interface ResumeLocale<
  TExperienceId extends string = string,
  TProjectId extends string = string,
  TSkillGroupId extends string = string,
  TEducationId extends string = string,
  TLanguageId extends string = string,
> {
  headline: string;
  summary: string;

  labels: {
    present: string;
    languageLevels: Record<LanguageLevel, string>;
  };

  sections: SectionTranslations;

  experience: Record<TExperienceId, ExperienceTranslation>;
  projects: Record<TProjectId, ProjectTranslation>;
  skillGroups: Record<TSkillGroupId, SkillGroupTranslation>;
  education: Record<TEducationId, EducationTranslation>;
  languages: Record<TLanguageId, LanguageTranslation>;
}

export type ResumeTranslations = ResumeLocale<
  ExperienceId,
  ProjectId,
  SkillGroupId,
  EducationId,
  LanguageId
>;
