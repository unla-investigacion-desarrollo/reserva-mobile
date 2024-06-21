import { useRef, useState } from 'react';

import { View } from 'react-native';

import { ImageStyle } from 'expo-image';
import { router } from 'expo-router';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';

import { ArrowLeftIcon } from '#/assets';
import { primary, transparent, white } from '#/common/constants/colors';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '#/common/constants/platform';
import { getCategoryIcon } from '#/common/models/sightings';
import { Sighting } from '#/common/types/stightings';
import { lastItem } from '#/common/utils/array';
import { Button, ExternalImage, Text } from '#/components';

import { BACK_ICON_SIZE, CATEGORY_ICON_SIZE, styles } from './styles';

export type SightingHeaderProps = {
  sighting: Sighting;
};

export function SightingHeader({ sighting }: SightingHeaderProps) {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Icon = getCategoryIcon(sighting.type.category);

  return (
    <View>
      <View>
        <Carousel
          ref={carouselRef}
          data={[...sighting.images]}
          width={WINDOW_WIDTH}
          height={WINDOW_HEIGHT * (7 / 16)}
          onSnapToItem={index => setCurrentImageIndex(index)}
          renderItem={({ item }) => (
            <ExternalImage source={item.url} style={styles.backgroundImage as ImageStyle} />
          )}
        />
        <View style={styles.dotRow}>
          {sighting.images.map((_, index) => {
            return <View key={`dot-${index}`} style={styles.dot(index === currentImageIndex)} />;
          })}
        </View>
        <Button
          Svg={ArrowLeftIcon}
          iconSize={BACK_ICON_SIZE}
          iconStroke={white}
          iconFill={transparent}
          title="Core.goBack"
          textStyle={styles.backButtonText}
          style={styles.backButton}
          onPress={() => router.back()}
        />
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
