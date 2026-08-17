import type { Education, Locale } from '../../data/types';
import type { EducationTranslation } from '../../locales/types';
import { formatDate } from '../../utils/formatDate';
import { createTemplate, select } from '../../utils/template';
import educationSectionTemplate from './EducationSection.html?raw';

export function EducationSection<T extends string>(
  title: string,
  education: readonly (Education & { id: T })[],
  translations: Record<T, EducationTranslation>,
  locale: Locale,
): string {
  const section = createTemplate(educationSectionTemplate);
  select(section, '[data-field="title"]').textContent = title;
  const container = select(section, '[data-field="items"]');

  for (const entry of education) {
    const article = document.createElement('article');
    const degree = document.createElement('h3');
    const institution = document.createElement('p');
    const dates = document.createElement('p');
    degree.textContent = translations[entry.id].degree;
    institution.textContent = [entry.institution, entry.location].filter(Boolean).join(' — ');
    dates.textContent = `${formatDate(entry.startDate, locale)} – ${formatDate(entry.endDate, locale)}`;
    article.append(degree, institution, dates);
    container.append(article);
  }

  return section.outerHTML;
}
