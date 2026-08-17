import type { Locale } from '../data/types';

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}-01T00:00:00Z`));
}
