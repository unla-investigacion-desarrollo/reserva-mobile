import { Pressable, View, ViewStyle } from 'react-native';

import { ImageStyle } from 'expo-image';
import { Link } from 'expo-router';

import { black, neutral } from '#/common/constants/colors';
import { ROUTE_LINKS } from '#/common/constants/routes';
import { CATEGORIES } from '#/common/constants/sightings';
import { getCategoryIcon } from '#/common/models/sightings';
import { Sighting } from '#/common/types/stightings';
import { shadowStyles } from '#/styles/shadows';

import { Image } from '../Image';
import { Text } from '../Text';
import { ICON_SIZE, styles } from './styles';

export type SightingCardProps = {
  sighting: Sighting;
  style?: ViewStyle;
};

export function SightingCard({ sighting, style }: SightingCardProps) {
  const Icon = getCategoryIcon(sighting.type.category);
  const iconColor =
    sighting.type.category === CATEGORIES.FAUNA ? { fill: neutral.default } : { stroke: neutral.default };

  return (
    <Link
      href={{ pathname: ROUTE_LINKS.Sighting, params: { id: sighting.id } }}
      asChild
      style={[styles.sightingCard, shadowStyles.baseShadow(black), style]}>
      <Pressable>
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
      </Pressable>
    </Link>
  );
}
