import { api, handleApiResponse } from '#/common/config/api';

import { ErrorResponse } from '../types';
import { GetSightingTypesResponse } from './types';

const BASE_URL = '/sighting/type';

export const getSightingTypes = () =>
  api.get<GetSightingTypesResponse, ErrorResponse>(BASE_URL).then(handleApiResponse);
