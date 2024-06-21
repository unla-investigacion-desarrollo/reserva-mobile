import { useCallback } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import { BUTTON_INTENTS } from '#/common/constants/button';
import { primary } from '#/common/constants/colors';
import { Sighting } from '#/common/types/stightings';
import { Button, LoadingWrapper, SightingTag, Text } from '#/components';

import { styles } from './styles';

export type SightingListProps = {
  sightings: Sighting[];
  isLoading?: boolean;
  isLoadingNextPage?: boolean;
  onLoadMoreSightings?: () => void;
  hasNextPage?: boolean;
};

export function SightingList({
  sightings,
  isLoading,
  isLoadingNextPage,
  hasNextPage,
  onLoadMoreSightings
}: SightingListProps) {
  const ListFooter = useCallback(
    () => (
      <View>
        {isLoadingNextPage ? (
          <ActivityIndicator color={primary.default} style={styles.activityIndicator} />
        ) : (
          hasNextPage && (
            <Button title="Home.loadMore" intent={BUTTON_INTENTS.TEXT} onPress={onLoadMoreSightings} />
          )
        )}
      </View>
    ),

    [isLoadingNextPage, hasNextPage]
  );

  const EmptyListComponent = useCallback(() => <Text tx="Home.noResults" style={styles.emptyListText} />, []);

  return (
    <View>
      <LoadingWrapper loading={isLoading} color={primary.default} size={30} style={styles.loadingWrapper}>
        <FlatList
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={sightings}
          ListFooterComponent={ListFooter}
          ListEmptyComponent={EmptyListComponent}
          keyExtractor={(item, index) => `${index}-${item.id}-${item.scientificName}`}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          renderItem={({ item }) => <SightingTag key={item.id} sighting={item} />}
        />
      </LoadingWrapper>
    </View>
  );
}
