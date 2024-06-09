import { create } from 'zustand';

import { SightingStore } from './types';

export const useSigntingStore = create<SightingStore>((set, _) => ({
  selectedSighting: null,
  setSelectedSighting: value => set({ selectedSighting: value })
}));
