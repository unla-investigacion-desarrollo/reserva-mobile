export const formatLongMonthNumeric = (date?: Date | null, language?: string): string | undefined | null =>
  date &&
  date?.toLocaleString(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
