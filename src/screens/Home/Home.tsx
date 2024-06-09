/* eslint-disable react/display-name */
import { useEffect, useState } from 'react';

import { FlatList, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { SearchIcon } from '#/assets';
import { useGetSightings, useGetTypes } from '#/common/api';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { neutral, primary } from '#/common/constants/colors';
import { filterSightings } from '#/common/models/sightings';
import { Sighting, SightingType } from '#/common/types/stightings';
import { isEmpty } from '#/common/utils/array';
import { Button, Input } from '#/components';
import { Separator } from '#/components/Separator';
import i18n from '#/translations';

import { SightingCards } from './SightingCards';
import { SightingList } from './SightingList';
import { TYPE_FILTERS_GAP, styles } from './styles';

export function Home() {
  const [searchValue, setSearchValue] = useState('');

  const [page, setPage] = useState(1);

  const [sightings, setSightings] = useState<Sighting[]>([]);

  const {
    data: sightingsDataPage,
    isSuccess,
    isFetching
  } = useGetSightings({ variables: { page, size: 4 }, queryHash: '' });
  const { data: sightingTypesData } = useGetTypes();

  useEffect(() => {
    if (isSuccess && sightingsDataPage && sightingsDataPage.data && !isEmpty(sightingsDataPage.data)) {
      setSightings([...sightings, ...sightingsDataPage.data]);
    }
  }, [sightingsDataPage]);

  const sightingTypes = sightingTypesData?.data ?? [];
  const [selectedType, setSelectedType] = useState<SightingType | null>(null);
  const shownSightings = filterSightings(sightings, selectedType, searchValue);

  const handleListEnd = () => {
    if (!isFetching) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.home}>
      <StatusBar style="light" />
      <Input
        placeholder={i18n.t('Home.search')}
        placeholderTextColor={neutral.dark}
        value={searchValue}
        onChangeText={setSearchValue}
        Icon={SearchIcon}
        iconColor={primary.default}
        iconStyles={styles.searchIcon}
        showClearButton
      />
      <View style={styles.typeFilters}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sightingTypes}
          style={styles.typeFilters}
          keyExtractor={item => `${item.category}-${item.name}`}
          ItemSeparatorComponent={() => <Separator gap={TYPE_FILTERS_GAP} />}
          renderItem={({ item }) => {
            const selected = item.name === selectedType?.name;
            return (
              <Button
                onPress={() => (selected ? setSelectedType(null) : setSelectedType(item))}
                active={selected}
                style={styles.button}
                intent={BUTTON_INTENTS.SECONDARY}
                title={item.name}
              />
            );
          }}
        />
      </View>
      {searchValue.length > 0 ? (
        <SightingList sightings={shownSightings} />
      ) : (
        <SightingCards sightings={shownSightings} onEndReached={handleListEnd} isLoading={isFetching} />
      )}
    </View>
  );
}
