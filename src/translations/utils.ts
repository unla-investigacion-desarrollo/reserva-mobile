import type TranslateOptions from 'i18next';
import i18n from 'i18next';
import memoize from 'lodash.memoize';

import { KEYS } from '#/common/constants/storage';
import { StorageService } from '#/common/services';
import { DefaultLocale, Language, Tx, TxOrString } from '#/common/types/i18n';

import { I18N_SEPARATOR, LOCALES } from './constants';
import { resources } from './resources';

export const getLanguage = (): Language => StorageService.storage.getString(KEYS.LOCALE) as Language;
export const setLanguage = (language: Language): void => StorageService.storage.set(KEYS.LOCALE, language);
export const getI18nLanguage = () => i18n.language.split('_')?.[0];
export const isEnglish = () => getI18nLanguage() === LOCALES.es;

export const translate = memoize(
  (key: TxOrString, options = undefined) => i18n.t(key, options),
  (key: TxOrString, options: typeof TranslateOptions) => (options ? key + JSON.stringify(options) : key)
);

type Resource = Partial<DefaultLocale>;

// Todo move typeof key to isString @shared/util
const couldBeTx = (key: TxOrString): key is TxOrString =>
  typeof key === 'string' && key.includes(I18N_SEPARATOR);

export const isTx = (key?: TxOrString, translations: Resource = resources.es.translation): key is Tx => {
  if (!key) {
    return false;
  }
  const [txPrefix, ...rest] = couldBeTx(key) ? key.split(I18N_SEPARATOR) : [key];
  if (txPrefix in translations) {
    const nextTranslations = translations[txPrefix as keyof typeof translations];
    if (rest.length === 0) {
      return true;
    }
    return isTx(rest.join(I18N_SEPARATOR), nextTranslations as Resource);
  }
  return false;
};
