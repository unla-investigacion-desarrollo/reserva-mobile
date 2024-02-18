import { MMKV } from 'react-native-mmkv';

import { Key } from './types';

export const storage = new MMKV();

export function getItem<T>(key: Key): T {
  const value = storage.getString(key);
  return value ? JSON.parse(value) || null : null;
}

export async function setItem<T>(key: Key, value: T) {
  storage.set(key, JSON.stringify(value));
}
export async function removeItem(key: Key) {
  storage.delete(key);
}
