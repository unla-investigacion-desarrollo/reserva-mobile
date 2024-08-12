import { useState } from 'react';

import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';

import { useLoginMutation } from '#/common/api';
import { useMount } from '#/common/hooks/useMount';
import { useSession } from '#/common/hooks/useSession';
import { LoginResponse } from '#/common/services/Auth/types';
import { useSessionStore } from '#/common/stores/session';
import { ValueOf } from '#/common/types/utilities';
import { translate } from '#/translations/utils';

import { FORM_DEFAULT_VALUES, FORM_FIELDS } from './constants';

export const useLoginForm = () => {
  const { loginFields, setLoginFields, clearLoginFields } = useSessionStore();
  const { login } = useSession();

  const [responseError, setResponseError] = useState('');

  const handleLoginResponse = (value: Record<ValueOf<typeof FORM_FIELDS>, string>, res?: LoginResponse) => {
    if (!res || !res.success) {
      console.log(res);
      setResponseError(res?.result ?? translate('Error.connectionFailed'));
      return;
    }
    if (value.rememberMe) {
      setLoginFields(value);
    } else {
      clearLoginFields();
    }
    login(res);
  };

  const { mutateAsync } = useLoginMutation();

  const LoginForm = useForm({
    validatorAdapter: zodValidator,
    defaultValues: FORM_DEFAULT_VALUES,
    onSubmit: async ({ value }) => {
      setResponseError('');
      await mutateAsync(value, {
        onSuccess: res => {
          handleLoginResponse(value, res);
        },
        onError: res => setResponseError(res.result)
      });
    }
  });

  useMount(() => {
    if (loginFields) {
      LoginForm.setFieldValue(FORM_FIELDS.rememberMe, true);
      LoginForm.setFieldValue(FORM_FIELDS.usernameOrEmail, loginFields.usernameOrEmail);
      LoginForm.setFieldValue(FORM_FIELDS.password, loginFields.password);
    }
  });

  return { LoginForm, responseError };
};
