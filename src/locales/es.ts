import type { ResumeTranslations } from './types';

export const es = {
  headline: '',
  summary: '',

  labels: {
    present: 'Actualidad',
    languageLevels: {
      native: 'Nativo',
      professional: 'Competencia profesional',
      advanced: 'Avanzado',
      intermediate: 'Intermedio',
      basic: 'Básico',
    },
  },

  sections: {
    summary: 'Perfil',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades técnicas',
    education: 'Educación',
    languages: 'Idiomas',
    certifications: 'Certificaciones',
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
      name: 'Español',
    },
    english: {
      name: 'Inglés',
    },
  },
} satisfies ResumeTranslations;
