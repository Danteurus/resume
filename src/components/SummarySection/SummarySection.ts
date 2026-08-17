import { createTemplate, select } from '../../utils/template';
import summarySectionTemplate from './SummarySection.html?raw';

export function SummarySection(title: string, summary: string): string {
  const section = createTemplate(summarySectionTemplate);
  select(section, '[data-field="title"]').textContent = title;
  select(section, '[data-field="summary"]').textContent = summary;
  return section.outerHTML;
}
