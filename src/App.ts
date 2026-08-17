import { EducationSection } from './components/EducationSection/EducationSection';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { ResumeHeader } from './components/ResumeHeader/ResumeHeader';
import { SkillsSection } from './components/SkillsSection/SkillsSection';
import { SummarySection } from './components/SummarySection/SummarySection';
import { resumeData } from './data/resume';
import { locales } from './locales';
import resumeTemplate from './templates/resume.html?raw';

export function App(): string {
  const locale = new URLSearchParams(window.location.search).get('lang') === 'es' ? 'es' : 'en';
  const translations = locales[locale];

  return resumeTemplate
    .replace('<!-- resume-header -->', ResumeHeader(resumeData.personal, translations.headline))
    .replace(
      '<!-- summary-section -->',
      SummarySection(translations.sections.summary, translations.summary),
    )
    .replace(
      '<!-- experience-section -->',
      ExperienceSection(
        translations.sections.experience,
        resumeData.experience,
        translations.experience,
        locale,
        translations.labels.present,
      ),
    )
    .replace(
      '<!-- projects-section -->',
      ProjectsSection(translations.sections.projects, resumeData.projects, translations.projects),
    )
    .replace(
      '<!-- skills-section -->',
      SkillsSection(translations.sections.skills, resumeData.skillGroups, translations.skillGroups),
    )
    .replace(
      '<!-- education-section -->',
      EducationSection(
        translations.sections.education,
        resumeData.education,
        translations.education,
        locale,
      ),
    );
}
