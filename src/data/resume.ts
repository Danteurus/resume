import type { ResumeData } from './types';

export const resumeData = {
  personal: {
    name: 'Cristian Serrano',
    email: 'cristiangserrano@gmail.com',
    location: 'Floridablanca, Colombia',
    linkedin: 'https://www.linkedin.com/in/cristian-serrano-acevedo',
    github: 'https://github.com/Danteurus',
  },

  experience: [
    {
      id: 'delthac',
      company: 'Delthac 1 Seguridad',
      location: 'Bucaramanga, Colombia',
      startDate: '2024-07',
      endDate: null,
      technologies: [],
    },
    {
      id: 'fcv',
      company: 'Fundación Cardiovascular de Colombia',
      location: 'Floridablanca, Colombia',
      startDate: '2023-04',
      endDate: '2024-03',
      technologies: [],
    },
  ],

  projects: [],

  skillGroups: [],

  education: [
    {
      id: 'uis',
      institution: 'Universidad Industrial de Santander',
      location: 'Bucaramanga, Colombia',
      startDate: '2017-03',
      endDate: '2023-06',
    },
  ],

  languages: [
    {
      id: 'spanish',
      level: 'native',
    },
    {
      id: 'english',
      level: 'professional',
    },
  ],

  certifications: [],
} as const satisfies ResumeData;

export type ExperienceId = (typeof resumeData.experience)[number]['id'];

export type ProjectId = (typeof resumeData.projects)[number]['id'];

export type SkillGroupId = (typeof resumeData.skillGroups)[number]['id'];

export type EducationId = (typeof resumeData.education)[number]['id'];

export type LanguageId = (typeof resumeData.languages)[number]['id'];

export type CertificationId = (typeof resumeData.certifications)[number]['id'];
