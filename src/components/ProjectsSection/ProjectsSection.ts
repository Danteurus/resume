import type { Project } from '../../data/types';
import type { ProjectTranslation } from '../../locales/types';
import { createTemplate, select } from '../../utils/template';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import projectsSectionTemplate from './ProjectsSection.html?raw';

export function ProjectsSection<T extends string>(
  title: string,
  projects: readonly (Project & { id: T })[],
  translations: Record<T, ProjectTranslation>,
): string {
  if (projects.length === 0) return '';

  const section = createTemplate(projectsSectionTemplate);
  select(section, '[data-field="title"]').textContent = title;
  select(section, '[data-field="items"]').innerHTML = projects
    .map((project) => ProjectItem(project, translations[project.id]))
    .join('');
  return section.outerHTML;
}
