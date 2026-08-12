import type { ResumeTranslations } from './types';

export const en = {
  headline: '',
  summary: '',

  labels: {
    present: 'Present',
    languageLevels: {
      native: 'Native',
      professional: 'Professional working proficiency',
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      basic: 'Basic',
    },
  },

  sections: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Technical Skills',
    education: 'Education',
    languages: 'Languages',
    certifications: 'Certifications',
  },

  experience: {
    delthac: {
      role: '',
      bullets: [],
    },
    fcv: {
      role: '',
      bullets: [],
    },
  },

  projects: {},

  skillGroups: {},

  education: {
    uis: {
      degree: '',
    },
  },

  languages: {
    spanish: {
      name: 'Spanish',
    },
    english: {
      name: 'English',
    },
  },
} satisfies ResumeTranslations;
