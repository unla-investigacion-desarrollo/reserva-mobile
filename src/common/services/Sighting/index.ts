import api from '#/common/config/api';

import {
  GetSightingByIdParams,
  GetSightingByIdResponse,
  GetSightingsParams,
  GetSightingsResponse
} from './types';

const BASE_URL = '/sighting';

export const getSightings = (params: GetSightingsParams) => api.get<GetSightingsResponse>(BASE_URL, params);

export const getSightingById = ({ id }: GetSightingByIdParams) =>
  api.get<GetSightingByIdResponse>(`${BASE_URL}/${id}`);
