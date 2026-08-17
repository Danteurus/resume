import type { Project } from '../../data/types';
import type { ProjectTranslation } from '../../locales/types';
import { createTemplate, select } from '../../utils/template';
import projectItemTemplate from './ProjectItem.html?raw';

export function ProjectItem(project: Project, translation: ProjectTranslation): string {
  const item = createTemplate(projectItemTemplate);
  select(item, '[data-field="name"]').textContent = project.name;
  select(item, '[data-field="description"]').textContent = translation.description;
  select(item, '[data-field="technologies"]').textContent = project.technologies.join(', ');

  const bullets = select(item, '[data-field="bullets"]');
  for (const bullet of translation.bullets ?? []) {
    const listItem = document.createElement('li');
    listItem.textContent = bullet;
    bullets.append(listItem);
  }

  const links = select(item, '[data-field="links"]');
  for (const [label, href] of [
    ['Repository', project.repository],
    ['Website', project.url],
  ] as const) {
    if (href) {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      links.append(link);
    }
  }

  return item.outerHTML;
}
