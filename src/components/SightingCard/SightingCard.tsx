import { View, ViewStyle } from 'react-native';

import { Image, ImageStyle } from 'expo-image';

import { PawIcon, TreeIcon } from '#/assets';
import { black, neutral } from '#/common/constants/colors';
import { CATEGORIES } from '#/common/constants/sightings';
import { Sighting } from '#/common/types/stightings';
import { shadowStyles } from '#/styles/shadows';

import { Text } from '../Text';
import { ICON_SIZE, styles } from './styles';

export type SightingCardProps = {
  sighting: Sighting;
  style?: ViewStyle;
};

export function SightingCard({ sighting, style }: SightingCardProps) {
  const Icon = sighting.type.category === CATEGORIES.FAUNA ? PawIcon : TreeIcon;
  const iconColor =
    sighting.type.category === CATEGORIES.FAUNA ? { fill: neutral.default } : { stroke: neutral.default };
  return (
    <View style={[styles.sightingCard, shadowStyles.baseShadow(black), style]}>
      <Image source={sighting.images[0].url} style={styles.image as ImageStyle} />
      <View style={styles.body}>
        <Text numberOfLines={1} style={styles.name}>
          {sighting.name}
        </Text>
        <Text numberOfLines={1} style={styles.scientificName}>
          {sighting.scientificName}
        </Text>
        <View style={styles.typeRow}>
          <Icon width={ICON_SIZE} height={ICON_SIZE} {...iconColor} />
          <Text style={styles.type}>{sighting.type.name}</Text>
        </View>
      </View>
    </View>
  );
}
