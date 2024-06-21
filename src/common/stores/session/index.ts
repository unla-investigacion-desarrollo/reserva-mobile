import { createPersistentStore } from '../utils';
import { SessionStore } from './types';

export const useSessionStore = createPersistentStore<SessionStore>(
  (set, _) => ({
    isLoggedIn: false,
    loginFields: null,
    setIsLoggedIn: value => set({ isLoggedIn: value }, false, 'setIsLoggedIn'),
    setLoginFields: loginFields => set({ loginFields }, false, 'setLoginFields'),
    clearLoginFiels: () => set({ loginFields: null }, false, 'clearLoginFields')
  }),
  {
    name: 'session-store',
    partialize: state => ({ ...state, isLoggedIn: false })
  }
);
