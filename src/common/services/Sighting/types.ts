import { Sighting, SightingType } from '#/common/types/stightings';

export type GetSightingsParams = {
  status?: string;
  type?: string;
  page?: number;
  size?: number;
  orderBy?: 'asc' | 'desc';
  sortBy?: string;
};

export type GetSightingsResponse = Sighting[];

export type GetSightingsError = {
  time: string;
  result: string;
  from: string;
};

export type GetSightingTypesResponse = SightingType[];
