import api from '#/common/config/api';

import { LoginParams, LoginResponse } from './types';

const BASE_URL = '/account';

export const login = (params: LoginParams) => api.post<LoginResponse>(BASE_URL + '/login', params);
