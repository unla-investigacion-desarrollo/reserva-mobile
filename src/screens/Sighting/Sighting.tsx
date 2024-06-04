import { FlatList, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Sighting as SightingType } from '#/common/types/stightings';
import { Text } from '#/components';
import { Separator } from '#/components/Separator';
import testData from '#/testData.json';

import { SightingHeader } from './SightingHeader';
import { FIELD_GAP, styles } from './styles';

export type SightingProps = {
  sightingId: string;
};

export function Sighting({ sightingId }: SightingProps) {
  const sighting: SightingType = testData.sightings[0];

  const { top } = useSafeAreaInsets();
  return (
    <View style={styles.SightingContainer}>
      <StatusBar animated style="dark" />
      <View style={styles.header(top)} />
      <FlatList
        bounces={false}
        contentContainerStyle={styles.fields}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator gap={FIELD_GAP} />}
        ListHeaderComponent={<SightingHeader sighting={sighting} />}
        data={sighting.fields}
        renderItem={({ item }) => (
          <View style={styles.field} key={item.description}>
            <Text style={styles.fieldTitle}>{item.title}</Text>
            <Text style={styles.fieldBody}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
