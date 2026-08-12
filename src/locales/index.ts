import type { Locale } from '../data/types';
import { en } from './en';
import { es } from './es';
import type { ResumeTranslations } from './types';

export const locales = {
  en,
  es,
} satisfies Record<Locale, ResumeTranslations>;

export type { ResumeTranslations } from './types';
