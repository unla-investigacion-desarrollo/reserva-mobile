import { create } from 'zustand';

import { SessionStore } from './types';

export const useSessionStore = create<SessionStore>((set, _) => ({
  isLoggedIn: false,
  setIsLoggedIn: value => set({ isLoggedIn: value })
}));
