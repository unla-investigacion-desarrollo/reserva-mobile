import { useCallback } from 'react';

import { ActivityIndicator, FlatList, View, ViewStyle } from 'react-native';

import { primary } from '#/common/constants/colors';
import { Sighting } from '#/common/types/stightings';
import { isEven } from '#/common/utils/numbers';
import { SightingCard, Text, VisitUsCard } from '#/components';
import { Separator } from '#/components/Separator';

import { SIGHTING_CARDS_GAP, styles } from './styles';

export type SightingCardsProps = {
  sightings: Sighting[];
  onEndReached: () => void;
  isLoading?: boolean;
  isLoadingNextPage?: boolean;
};

export function SightingCards({ sightings, onEndReached, isLoading, isLoadingNextPage }: SightingCardsProps) {
  const CardsFooter = useCallback(
    () => (
      <View>
        {isLoadingNextPage && <ActivityIndicator color={primary.default} style={styles.activityIndicator} />}
      </View>
    ),

    [isLoadingNextPage]
  );

  const EmptyListComponent = useCallback(
    () =>
      isLoading ? (
        <ActivityIndicator color={primary.default} style={styles.activityIndicator} />
      ) : (
        <Text tx="Home.noSightings" style={styles.emptyListText} />
      ),
    []
  );

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        keyExtractor={(item, index) => `${item.scientificName}-${item.id}-${index}`}
        contentContainerStyle={styles.flatList}
        ListHeaderComponent={
          <View style={styles.visitUsCardContainer}>
            <VisitUsCard />
          </View>
        }
        ListHeaderComponentStyle={styles.visitUsCard}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListFooterComponent={CardsFooter}
        ListEmptyComponent={EmptyListComponent}
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
