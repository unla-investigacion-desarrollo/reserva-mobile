import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

export const storage = new MMKV({
  id: 'zustand'
});


export const zustandStorage: StateStorage = {
  setItem: (key: string, value: string) => storage.set(key, value),
  getItem: (name: string) => storage.getString(name) ?? null,
  removeItem: (key: string) => storage.delete(key)
};
