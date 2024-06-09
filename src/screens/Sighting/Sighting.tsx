import { FlatList, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useGetSightingById } from '#/common/api/sighting/useGetSightingById';
import { Text } from '#/components';
import { Separator } from '#/components/Separator';

import { SightingHeader } from './SightingHeader';
import { FIELD_GAP, styles } from './styles';

export type SightingProps = {
  sightingId: string;
};

export function Sighting({ sightingId }: SightingProps) {
  const { data: sighting, isLoading } = useGetSightingById({ variables: { id: sightingId } });

  const { top } = useSafeAreaInsets();
  return (
    !isLoading &&
    sighting && (
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
    )
  );
}
