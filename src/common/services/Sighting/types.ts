import { Sighting } from '#/common/types/stightings';

import { Pagination } from '../types';

export type GetSightingsParams = {
  name?: string;
  status?: string;
  type?: string;
  page?: number;
  size?: number;
  orderBy?: 'asc' | 'desc';
  sortBy?: string;
};

export type GetSightingsResponse = Pagination<Sighting>;

export type GetSightingByIdParams = { id: string };

export type GetSightingByIdResponse = Sighting;
