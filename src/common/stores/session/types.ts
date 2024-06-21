import { ValueOf } from '#/common/types/utilities';
import { FORM_FIELDS } from '#/screens/Login/constants';

export type SessionStore = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLogged: boolean) => void;
  loginFields: Record<ValueOf<typeof FORM_FIELDS>, string> | null;
  setLoginFields: (loginFields: Record<ValueOf<typeof FORM_FIELDS>, string>) => void;
  clearLoginFiels: () => void;
};
