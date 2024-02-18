export type KeyedObject<T> = { [key: string]: T };
export type KeyedRecord<T extends string | number | symbol> = Record<T, T>;
export type ValueOf<T> = T[keyof T];
