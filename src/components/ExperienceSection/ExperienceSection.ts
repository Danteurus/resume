import type { Experience, Locale } from '../../data/types';
import type { ExperienceTranslation } from '../../locales/types';
import { createTemplate, select } from '../../utils/template';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import experienceSectionTemplate from './ExperienceSection.html?raw';

export function ExperienceSection<T extends string>(
  title: string,
  experiences: readonly (Experience & { id: T })[],
  translations: Record<T, ExperienceTranslation>,
  locale: Locale,
  present: string,
): string {
  const section = createTemplate(experienceSectionTemplate);
  select(section, '[data-field="title"]').textContent = title;
  select(section, '[data-field="items"]').innerHTML = experiences
    .map((experience) => ExperienceItem(experience, translations[experience.id], locale, present))
    .join('');
  return section.outerHTML;
}
