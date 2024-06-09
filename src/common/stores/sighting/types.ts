import { Sighting } from '#/common/types/stightings';

export type SightingStore = {
  selectedSighting: Sighting | null;
  setSelectedSighting: (value: Sighting) => void;
};
