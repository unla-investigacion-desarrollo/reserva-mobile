import { StateCreator, create } from 'zustand';
import { PersistOptions, createJSONStorage, persist } from 'zustand/middleware';

import { zustandStorage } from './mmkv';

/**
 * Creates a persistent store using Zustand's persist middleware.
 *
 * The type declarations are structured to ensure compatibility and flexibility.
 * Aliases simplify complex types to improve readability.
 * @defaultStorage MMKV - Default storage adapter is MMKV, which can be overridden.
 */
export function createPersistentStore<
  T extends object,
  PersistedState extends object = T,
  StateCreatorParams extends Parameters<StateCreator<T>> = Parameters<StateCreator<T>>,
  SetState extends StateCreatorParams[0] = StateCreatorParams[0]
>(
  creator: (
    set: (state: Parameters<SetState>[0], replace?: Parameters<SetState>[1], name?: string) => void,
    get: StateCreatorParams[1],
    api: StateCreatorParams[2]
  ) => ReturnType<StateCreator<T>>,
  options: PersistOptions<T, PersistedState>
) {
  return create<T>()(
    persist(creator, {
      storage: createJSONStorage<PersistedState>(() => zustandStorage),
      ...options
    })
  );
}
