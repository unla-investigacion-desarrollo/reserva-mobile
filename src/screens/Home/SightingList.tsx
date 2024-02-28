import { FlatList, View } from 'react-native';

import { Sighting } from '#/common/types/stightings';
import { SightingTag } from '#/components';

import { styles } from './styles';

export type SightingListProps = {
  sightings: Sighting[];
};

export function SightingList({ sightings }: SightingListProps) {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={sightings}
        keyExtractor={item => `${item.id}-${item.scientificName}`}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        renderItem={({ item }) => <SightingTag key={item.id} sighting={item} />}
      />
    </View>
  );
}
