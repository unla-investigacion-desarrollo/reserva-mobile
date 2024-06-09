import { ENV_VARIABLES } from '../constants/envs';

type EnvVariables = (typeof ENV_VARIABLES)[number];

export type Enviroment = Record<EnvVariables, string>;
