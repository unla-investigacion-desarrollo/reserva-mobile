import { View } from 'react-native';

import { ImageStyle } from 'expo-image';

import { Sighting } from '#/common/types/stightings';

import { Image } from '../Image';
import { Text } from '../Text';
import { styles } from './styles';

export type SightingTagProps = {
  sighting: Sighting;
};

export function SightingTag({ sighting }: SightingTagProps) {
  return (
    <View style={styles.sightingTag}>
      <Image source={sighting.images[0].url} style={styles.image as ImageStyle} />
      <View style={styles.nameSection}>
        <Text style={styles.name}>{sighting.name}</Text>
        <Text style={styles.scientificName}>{sighting.scientificName}</Text>
      </View>
    </View>
  );
}
