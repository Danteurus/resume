import type { Experience, Locale } from '../../data/types';
import type { ExperienceTranslation } from '../../locales/types';
import { formatDate } from '../../utils/formatDate';
import { createTemplate, select } from '../../utils/template';
import experienceItemTemplate from './ExperienceItem.html?raw';

export function ExperienceItem(
  experience: Experience,
  translation: ExperienceTranslation,
  locale: Locale,
  present: string,
): string {
  const item = createTemplate(experienceItemTemplate);
  select(item, '[data-field="role"]').textContent = translation.role;
  select(item, '[data-field="company"]').textContent = experience.company;
  select(item, '[data-field="location"]').textContent = experience.location ?? '';
  select(item, '[data-field="dates"]').textContent =
    `${formatDate(experience.startDate, locale)} – ${experience.endDate ? formatDate(experience.endDate, locale) : present}`;
  select(item, '[data-field="summary"]').textContent = translation.summary ?? '';

  const bullets = select(item, '[data-field="bullets"]');
  for (const bullet of translation.bullets) {
    const listItem = document.createElement('li');
    listItem.textContent = bullet;
    bullets.append(listItem);
  }

  select(item, '[data-field="technologies"]').textContent =
    experience.technologies?.join(', ') ?? '';
  return item.outerHTML;
}
