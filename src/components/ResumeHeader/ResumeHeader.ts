import type { PersonalInfo } from '../../data/types';
import { createTemplate, select } from '../../utils/template';
import resumeHeaderTemplate from './ResumeHeader.html?raw';

export function ResumeHeader(personal: PersonalInfo, headline: string): string {
  const header = createTemplate(resumeHeaderTemplate);
  select(header, '[data-field="name"]').textContent = personal.name;
  select(header, '[data-field="headline"]').textContent = headline;
  select(header, '[data-field="location"]').textContent = personal.location;

  const email = select<HTMLAnchorElement>(header, '[data-field="email"]');
  email.href = `mailto:${personal.email}`;
  email.textContent = personal.email;

  select<HTMLAnchorElement>(header, '[data-field="linkedin"]').href = personal.linkedin;
  select<HTMLAnchorElement>(header, '[data-field="github"]').href = personal.github;

  return header.outerHTML;
}
