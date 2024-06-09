import { ActivityIndicator, FlatList, View, ViewStyle } from 'react-native';

import { Sighting } from '#/common/types/stightings';
import { isEven } from '#/common/utils/numbers';
import { SightingCard, VisitUsCard } from '#/components';
import { Separator } from '#/components/Separator';

import { SIGHTING_CARDS_GAP, styles } from './styles';

export type SightingCardsProps = {
  sightings: Sighting[];
  onEndReached: () => void;
  isLoading?: boolean;
};

export function SightingCards({ sightings, onEndReached, isLoading }: SightingCardsProps) {
  const loadingFooter = () => {
    return (
      //Footer View with Loader
      <View>{isLoading && <ActivityIndicator color="black" style={styles.activityIndicator} />}</View>
    );
  };

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
        ListFooterComponent={loadingFooter}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
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
