import api from '#/common/config/api';

import { GetSightingTypesResponse, GetSightingsParams, GetSightingsResponse } from './types';

const BASE_URL = '/sighting';

export const getSightings = (params: GetSightingsParams) => api.get<GetSightingsResponse>(BASE_URL, params);

export const getSightingTypes = () => api.get<GetSightingTypesResponse>(`${BASE_URL}/type`);
