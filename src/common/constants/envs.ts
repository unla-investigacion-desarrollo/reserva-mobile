import { Enviroment } from '../types/envs';

export const ENV_VARIABLES = ['TENANT', 'BASE_URL', 'PLATFORM'] as const;

export const ENVIROMENT = ENV_VARIABLES.reduce(
  (obj, key) => ({ ...obj, [key]: process.env[`EXPO_PUBLIC_${key}`] }),
  {}
) as Enviroment;
