import api from '#/common/config/api';

import { GetSightingTypesResponse } from './types';

const BASE_URL = '/sighting/type';

export const getSightingTypes = () => api.get<GetSightingTypesResponse>(BASE_URL);
