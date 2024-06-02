import { PawIcon, TreeIcon } from '#/assets';

import { CATEGORIES } from '../constants/sightings';
import { Sighting, SightingType } from '../types/stightings';
import { ValueOf } from '../types/utilities';
import { hasLength, normalize } from '../utils/string';

export const getTypesFromSightings = (sightings: Sighting[]) =>
  sightings.reduce(
    (types, sighting) =>
      types.some(type => type.name === sighting.type.name) ? types : [...types, sighting.type],
    [] as SightingType[]
  );

export const filterSightings = (sightings: Sighting[], type: SightingType | null, searchValue: string) => {
  const normalizedSearchValue = normalize(searchValue);
  return sightings.filter(
    sighting =>
      (type ? sighting.type.name === type.name : true) &&
      (hasLength(normalizedSearchValue)
        ? normalize(sighting.name).includes(normalizedSearchValue) ||
          normalize(sighting.scientificName).includes(normalizedSearchValue)
        : true)
  );
};

export const getCategoryIcon = (category: ValueOf<typeof CATEGORIES>) =>
  category === CATEGORIES.FAUNA ? PawIcon : TreeIcon;
