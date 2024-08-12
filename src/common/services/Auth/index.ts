import { api, handleApiResponse } from '#/common/config/api';

import { ErrorResponse } from '../types';
import { LoginParams, LoginResponse } from './types';

const BASE_URL = '/account';

export const login = (params: LoginParams) =>
  api.post<LoginResponse, ErrorResponse>(BASE_URL + '/login', params).then(handleApiResponse);
