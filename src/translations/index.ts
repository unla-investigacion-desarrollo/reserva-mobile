import { getLocales } from 'expo-localization';
import i18n, { Module } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LOCALES, OS_LOCALE } from './constants';
import { resources } from './resources';
import { getLanguage } from './utils';

const getLocale = {
  type: 'languageDetector' as Module['type'],
  init: () => null,
  detect: () => {
    const locales = getLocales();
    return locales[0].languageCode;
  },
  cacheUserLanguage: () => null
};

i18n
  .use(initReactI18next)
  .use(getLocale)
  .init({
    resources,
    lng: getLanguage() || OS_LOCALE || LOCALES.es,
    fallbackLng: LOCALES.es,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
