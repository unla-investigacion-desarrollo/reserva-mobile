import { SightingType } from '#/common/types/stightings';

import { ApiResponse, Pagination } from '../types';

export type GetSightingTypesResponse = ApiResponse<Pagination<SightingType>>;
