import Toast, { ToastShowParams } from 'react-native-toast-message';

import { translate } from '#/translations/utils';

import { SECOND } from '../constants/time';

export const showErrorToast = (props: ToastShowParams) =>
  Toast.show({
    type: 'error',
    text1: translate('Error.thereWasAnError'),
    visibilityTime: SECOND * 30,
    ...props
  });
