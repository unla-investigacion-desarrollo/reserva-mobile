
import { I18N_SEPARATOR, LOCALES } from '#/translations/constants';
import { resources } from '#/translations/resources';
import { ValueOf } from './utilities';

export type Language = ValueOf<typeof LOCALES>;

export type DefaultLocale = typeof resources.es.translation;
type Separator = typeof I18N_SEPARATOR;

//  https://github.com/infinitered/ignite/blob/master/boilerplate/app/i18n/i18n.ts
export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>;
}[keyof TObj & (string | number)];

export type Tx = RecursiveKeyOf<DefaultLocale>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type TxOrString = Tx | (string & {});

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `${Separator}${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
    ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text;
