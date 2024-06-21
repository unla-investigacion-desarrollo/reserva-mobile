import { Pressable, View } from 'react-native';

import { ImageStyle } from 'expo-image';
import { Link } from 'expo-router';

import { ROUTE_LINKS } from '#/common/constants/routes';
import { Sighting } from '#/common/types/stightings';

import { ExternalImage } from '../ExternalImage';
import { Text } from '../Text';
import { styles } from './styles';

export type SightingTagProps = {
  sighting: Sighting;
};

export function SightingTag({ sighting }: SightingTagProps) {
  return (
    <Link
      style={styles.sightingTag}
      href={{ pathname: ROUTE_LINKS.Sighting, params: { id: sighting.id } }}
      asChild>
      <Pressable>
        <ExternalImage source={sighting.images[0]?.url} style={styles.image as ImageStyle} />
        <View style={styles.nameSection}>
          <Text style={styles.name}>{sighting.name}</Text>
          <Text style={styles.scientificName}>{sighting.scientificName}</Text>
        </View>
      </Pressable>
    </Link>
  );
}
