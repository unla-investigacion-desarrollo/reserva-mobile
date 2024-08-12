import { UserData } from '#/common/services/Auth/types';
import { ValueOf } from '#/common/types/utilities';
import { FORM_FIELDS } from '#/screens/Login/constants';

export type SessionStore = {
  isLoggedIn: boolean;
  loginFields: Record<ValueOf<typeof FORM_FIELDS>, string> | null;
  userData: UserData | null;
  lastLoginDate: string | null;
  setIsLoggedIn: (isLogged: boolean) => void;
  setLoginFields: (loginFields: Record<ValueOf<typeof FORM_FIELDS>, string>) => void;
  clearLoginFields: () => void;
  setUserData: (userData: UserData) => void;
  clearUserData: () => void;
  setLastLoginDate: (date: Date) => void;
  getLastLoginDate: () => Date | null;
};
