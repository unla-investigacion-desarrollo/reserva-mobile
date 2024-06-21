import { useState } from 'react';

import { router } from 'expo-router';

import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';

import { useLoginMutation } from '#/common/api';
import { setAuthHeader } from '#/common/config/api';
import { ROUTE_LINKS } from '#/common/constants/routes';
import { useMount } from '#/common/hooks/useMount';
import { LoginResponse } from '#/common/services/Auth/types';
import { useSessionStore } from '#/common/stores/session';
import { translate } from '#/translations/utils';

import { FORM_DEFAULT_VALUES, FORM_FIELDS } from './constants';

export const useLoginForm = () => {
  const { setIsLoggedIn, loginFields, setLoginFields, clearLoginFiels } = useSessionStore();

  const [responseError, setResponseError] = useState('');

  const handleLoginResponse = (res?: LoginResponse) => {
    if (!res || !res.success) {
      setResponseError(res?.result ?? translate('Error.connectionFailed'));
      return;
    }
    setAuthHeader(res.data.accessToken);
    setIsLoggedIn(true);
    router.replace(ROUTE_LINKS.Home);
  };

  const { mutateAsync } = useLoginMutation({
    onSuccess: res => handleLoginResponse(res),
    onError: res => setResponseError(res.result)
  });

  const LoginForm = useForm({
    validatorAdapter: zodValidator,
    defaultValues: FORM_DEFAULT_VALUES,
    onSubmit: async ({ value }) => {
      setResponseError('');
      await mutateAsync(value, {
        onSuccess: res => {
          if (!res || !res.success) {
            return;
          }
          if (value.rememberMe) {
            setLoginFields(value);
          } else {
            clearLoginFiels();
          }
        }
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
