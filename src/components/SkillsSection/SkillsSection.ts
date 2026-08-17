import type { SkillGroup } from '../../data/types';
import type { SkillGroupTranslation } from '../../locales/types';
import { createTemplate, select } from '../../utils/template';
import skillsSectionTemplate from './SkillsSection.html?raw';

export function SkillsSection<T extends string>(
  title: string,
  groups: readonly (SkillGroup & { id: T })[],
  translations: Record<T, SkillGroupTranslation>,
): string {
  if (groups.length === 0) return '';

  const section = createTemplate(skillsSectionTemplate);
  select(section, '[data-field="title"]').textContent = title;
  const container = select(section, '[data-field="groups"]');

  for (const group of groups) {
    const paragraph = document.createElement('p');
    const label = document.createElement('strong');
    label.textContent = `${translations[group.id].label}: `;
    paragraph.append(label, group.skills.join(', '));
    container.append(paragraph);
  }

  return section.outerHTML;
}
