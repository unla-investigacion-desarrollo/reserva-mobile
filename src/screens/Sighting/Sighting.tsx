import { FlatList, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { useGetSightingById } from '#/common/api';
import { Text } from '#/components';
import { BackButtonHeader } from '#/components/BackButtonHeader';
import { Separator } from '#/components/Separator';

import { SightingHeader } from './SightingHeader';
import { FIELD_GAP, styles } from './styles';

export type SightingProps = {
  sightingId: string;
};

export function Sighting({ sightingId }: SightingProps) {
  const { data: sighting, isLoading } = useGetSightingById({ variables: { id: sightingId } });

  return (
    !isLoading &&
    sighting && (
      <View style={styles.SightingContainer}>
        <StatusBar animated style="dark" />
        <BackButtonHeader />
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
