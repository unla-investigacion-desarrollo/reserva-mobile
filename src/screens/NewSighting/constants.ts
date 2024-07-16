import { Tx } from '#/common/types/i18n';
import { ValueOf } from '#/common/types/utilities';
import { translate } from '#/translations/utils';

import { styles } from './styles';

export const MAX_IMAGES_AMOUNT = 3;

export const FORM_FIELDS = {
  name: 'name',
  scientificName: 'scientificName',
  type: 'type',
  fields: 'fields',
  title: 'title',
  description: 'description',
  files: 'files'
} as const;

export const FIELD_DEFAULT_VALUES = {
  title: '',
  description: ''
};

export const FILE_DEFAULT_VALUES = {
  fileName: '',
  fileUri: '',
  fileMimeType: ''
};

export const FORM_DEFAULT_VALUES = {
  name: '',
  scientificName: '',
  type: '',
  fields: [FIELD_DEFAULT_VALUES],
  files: [FILE_DEFAULT_VALUES]
};

export const FORM_FIELDS_NAMES: Record<ValueOf<typeof FORM_FIELDS>, string> = {
  name: translate('NewSighting.name'),
  scientificName: translate('NewSighting.scientificName'),
  type: translate('NewSighting.type'),
  fields: translate('NewSighting.fields'),
  title: translate('NewSighting.title'),
  description: translate('NewSighting.description'),
  files: translate('NewSighting.Files')
} as const;

export const FORM_TEXT_FIELDS = [FORM_FIELDS.name, FORM_FIELDS.scientificName] as const;

export const FORM_TEXT_FIELDS_LABELS: Record<(typeof FORM_TEXT_FIELDS)[any], Tx> = {
  name: translate('NewSighting.nameLabel'),
  scientificName: translate('NewSighting.scientificNameLabel')
} as const;

export const FORM_FIELD_SUB_FIELDS = [FORM_FIELDS.title, FORM_FIELDS.description] as const;

export const FORM_FIELDS_PROPS: Record<(typeof FORM_TEXT_FIELDS | typeof FORM_FIELD_SUB_FIELDS)[any], any> = {
  name: {
    placeholder: FORM_FIELDS_NAMES.name
  },
  scientificName: {
    placeholder: FORM_FIELDS_NAMES.scientificName
  },
  title: {
    placeholder: FORM_FIELDS_NAMES.title
  },
  description: {
    placeholder: FORM_FIELDS_NAMES.description,
    multiline: true,
    textStyle: styles.descriptionField
  }
} as const;
