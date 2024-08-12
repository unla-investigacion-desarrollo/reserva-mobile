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

export type CreateSightingParams = {
  request: {
    userId: number;
    name: string;
    scientificName: string;
    latitude: number;
    longitude: number;
    type: string;
    fields: {
      title: string;
      description: string;
    }[];
  };
  files: {
    name: string;
    uri: string;
    mimeType: string;
  }[];
};

export type CreateSightingResponse = {
  success: boolean;
  result: string;
  data: Sighting;
};
