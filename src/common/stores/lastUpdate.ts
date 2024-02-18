import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { zustandStorage } from './mmkv';

export interface LastUpdateStore {
  lastUpdate: Date | null;
  number: number;
  logUpdate: (lastUpdate: Date) => void;
  increaseNumber: () => void;
}

const useLastUpdateStore = create<LastUpdateStore>()(
  persist(
    (set, _) => ({
      lastUpdate: null,
      number: 0,
      logUpdate: lastUpdate => set({ lastUpdate }),
      increaseNumber: () => set(state => ({ number: state.number + 1 }))
    }),
    {
      name: 'zustand',
      storage: createJSONStorage(() => zustandStorage)
    }
  )
);

export default useLastUpdateStore;
