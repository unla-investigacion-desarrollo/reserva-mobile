import { createPersistentStore } from '../utils';
import { SessionStore } from './types';

export const useSessionStore = createPersistentStore<SessionStore>(
  (set, get) => ({
    isLoggedIn: false,
    loginFields: null,
    userData: null,
    lastLoginDate: null,
    setIsLoggedIn: isLoggedIn => set({ isLoggedIn }, false, 'setIsLoggedIn'),
    setLoginFields: loginFields =>
      set({ loginFields, lastLoginDate: new Date().toUTCString() }, false, 'setLoginFields'),
    clearLoginFields: () => set({ loginFields: null }, false, 'clearLoginFields'),
    setUserData: userData => set({ userData }, false, 'setUserData'),
    clearUserData: () => set({ userData: null }, false, 'clearLoginFields'),
    setLastLoginDate: lastLoginDate =>
      set({ lastLoginDate: lastLoginDate.toUTCString() }, false, 'setLastLoginDate'),
    getLastLoginDate: () => {
      const date = get().lastLoginDate;
      return date ? new Date(date) : null;
    }
  }),
  {
    name: 'session-store'
  }
);
