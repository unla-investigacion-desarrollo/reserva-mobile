import { useRef, useState } from 'react';

import { View } from 'react-native';

import { ImageStyle } from 'expo-image';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';

import { primary } from '#/common/constants/colors';
import { WINDOW_WIDTH } from '#/common/constants/platform';
import { getCategoryIcon } from '#/common/models/sightings';
import { Sighting } from '#/common/types/stightings';
import { lastItem } from '#/common/utils/array';
import { ExternalImage, Text } from '#/components';
import { CarouselDots } from '#/components/CarouselDots/CarouselDots';

import { CATEGORY_ICON_SIZE, styles } from './styles';

export type SightingHeaderProps = {
  sighting: Sighting;
};

export function SightingHeader({ sighting }: SightingHeaderProps) {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Icon = getCategoryIcon(sighting.type.category);
  const carouselData = [...sighting.images];

  return (
    <View>
      <View>
        <Carousel
          ref={carouselRef}
          data={carouselData}
          width={WINDOW_WIDTH}
          height={WINDOW_WIDTH / (4 / 3.2)}
          onProgressChange={(_, absProg) => setCurrentImageIndex(Math.round(absProg))}
          renderItem={({ item }) => (
            <ExternalImage source={item.url} style={styles.backgroundImage as ImageStyle} />
          )}
        />
        <CarouselDots data={carouselData} currentItemIndex={currentImageIndex} />
      </View>
      <View style={styles.headerInfo}>
        <Text style={styles.name}>{sighting.name}</Text>
        <Text style={styles.scientificName}>{sighting.scientificName}</Text>
        <View style={styles.typeRow}>
          <View style={styles.tag}>
            <Icon width={CATEGORY_ICON_SIZE} height={CATEGORY_ICON_SIZE} fill={primary.default} />
            <Text style={styles.type}>{sighting.type.category}</Text>
          </View>
          <Text style={[styles.type, styles.tag]}>{sighting.type.name}</Text>
        </View>
        <ExternalImage source={lastItem(sighting.images).url} style={styles.bannerImage as ImageStyle} />
      </View>
    </View>
  );
}
