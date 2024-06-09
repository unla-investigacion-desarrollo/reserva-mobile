import { useLocalSearchParams } from 'expo-router';

import { Sighting } from '#/screens';

export default function SightingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return id && <Sighting sightingId={id} />;
}
