import { useLocalSearchParams } from 'expo-router';

import { Sighting as SightingType } from '#/common/types/stightings';
import { Sighting } from '#/screens';

export default function SightingScreen() {
  const { id } = useLocalSearchParams<{ id: number }>();

  return id && <Sighting sightingId={id} />;
}
