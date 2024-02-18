import { ENV_VARIABLES } from '../constants/envs';
import { ValueOf } from './utilities';

type EnvVariables = typeof ENV_VARIABLES[number]

export type Enviroment = Record<EnvVariables, string>;
