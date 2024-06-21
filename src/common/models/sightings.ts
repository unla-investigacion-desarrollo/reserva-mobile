import { InfiniteData } from '@tanstack/react-query';

import { PawIcon, TreeIcon } from '#/assets';

import { CATEGORIES } from '../constants/sightings';
import { GetSightingsResponse } from '../services/Sighting/types';
import { Sighting, SightingType } from '../types/stightings';
import { ValueOf } from '../types/utilities';

export const getTypesFromSightings = (sightings: Sighting[]) =>
  sightings.reduce(
    (types, sighting) =>
      types.some(type => type.name === sighting.type.name) ? types : [...types, sighting.type],
    [] as SightingType[]
  );

export const getCategoryIcon = (category: ValueOf<typeof CATEGORIES>) =>
  category === CATEGORIES.FAUNA ? PawIcon : TreeIcon;

export const flattenPaginatedSightingResponses = (
  paginatedSightingResponses: InfiniteData<GetSightingsResponse | undefined, number> | undefined
) =>
  paginatedSightingResponses?.pages
    .filter((item): item is GetSightingsResponse => item !== undefined)
    .map(sightingResponse => sightingResponse.data)
    .flat();
