import { FlatList, View, ViewStyle } from 'react-native';

import { Sighting } from '#/common/types/stightings';
import { isEven } from '#/common/utils/numbers';
import { SightingCard, VisitUsCard } from '#/components';
import { Separator } from '#/components/Separator';

import { SIGHTING_CARDS_GAP, styles } from './styles';

export type SightingCardsProps = {
  sightings: Sighting[];
};

export function SightingCards({ sightings }: SightingCardsProps) {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        contentContainerStyle={styles.flatList}
        ListHeaderComponent={
          <View style={styles.visitUsCardContainer}>
            <VisitUsCard />
          </View>
        }
        ListHeaderComponentStyle={styles.visitUsCard}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={sightings}
        ItemSeparatorComponent={() => <Separator gap={SIGHTING_CARDS_GAP} />}
        renderItem={({ item, index }) => (
          <View style={styles.cardContainer(isEven(index)) as ViewStyle}>
            <SightingCard key={item.id} sighting={item} />
          </View>
        )}
      />
    </View>
  );
}
