import { getLocales } from 'expo-localization';

export const LOCALES = {
  es: 'es'
} as const;

export const OS_LOCALE = getLocales()[0].languageCode;

export const I18N_SEPARATOR = '.';
