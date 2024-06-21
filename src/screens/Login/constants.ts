import z from 'zod';

import { LockIcon, UserIcon } from '#/assets';
import { FormZodValidators } from '#/common/types/form';
import { ValueOf } from '#/common/types/utilities';
import { translate } from '#/translations/utils';

export const FORM_FIELDS = {
  usernameOrEmail: 'usernameOrEmail',
  password: 'password',
  rememberMe: 'rememberMe'
} as const;

export const FORM_DEFAULT_VALUES: Record<ValueOf<typeof FORM_FIELDS>, any> = {
  usernameOrEmail: '',
  password: '',
  rememberMe: false
} as const;

export const FORM_FIELDS_NAMES: Record<ValueOf<typeof FORM_FIELDS>, string> = {
  usernameOrEmail: translate('Login.usernameOrEmail'),
  password: translate('Login.password'),
  rememberMe: translate('Login.rememberMe')
} as const;

export const FORM_TEXT_FIELDS = [FORM_FIELDS.usernameOrEmail, FORM_FIELDS.password] as const;

export const FORM_FIELDS_PROPS: Record<(typeof FORM_TEXT_FIELDS)[any], any> = {
  usernameOrEmail: {
    placeholder: translate('Login.emailExample'),
    Icon: UserIcon
  },
  password: {
    placeholder: translate('Login.passwordExample'),
    Icon: LockIcon,
    hideText: true
  }
} as const;

export const FORM_VALIDATIONS: Record<(typeof FORM_TEXT_FIELDS)[any], FormZodValidators> = {
  usernameOrEmail: {
    onSubmit: z.string().min(1, translate('Login.requiredField'))
  },
  password: {
    onSubmit: z.string().min(1, translate('Login.requiredField'))
  }
};
