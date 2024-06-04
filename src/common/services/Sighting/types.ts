import { Sighting, SightingType } from '#/common/types/stightings';

import { Pagination } from '../types';

export type GetSightingsParams = {
  status?: string;
  type?: string;
  page?: number;
  size?: number;
  orderBy?: 'asc' | 'desc';
  sortBy?: string;
};

export type GetSightingsResponse = Pagination<Sighting>;

export type GetSightingTypesResponse = Pagination<SightingType>;
