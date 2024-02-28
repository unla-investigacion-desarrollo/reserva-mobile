/* eslint-disable react/display-name */
import { useState } from 'react';

import { FlatList, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { SearchIcon } from '#/assets';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { neutral, primary } from '#/common/constants/colors';
import { filterSightings, getTypesFromSightings } from '#/common/models/sightings';
import { SightingType } from '#/common/types/stightings';
import { Button, Input } from '#/components';
import { Separator } from '#/components/Separator';
import testData from '#/testData.json';
import i18n from '#/translations';

import { SightingCards } from './SightingCards';
import { SightingList } from './SightingList';
import { TYPE_FILTERS_GAP, styles } from './styles';

export function Home() {
  const [searchValue, setSearchValue] = useState('');

  const sightingTypes = getTypesFromSightings(testData.sightings);
  const [selectedType, setSelectedType] = useState<SightingType | null>(null);
  const shownSightings = filterSightings(testData.sightings, selectedType, searchValue);

  return (
    <View style={styles.home}>
      <StatusBar animated style="light" />
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
          keyExtractor={item => `${item.id}-${item.name}`}
          ItemSeparatorComponent={() => <Separator gap={TYPE_FILTERS_GAP} />}
          renderItem={({ item }) => {
            const selected = item.id === selectedType?.id;
            return (
              <Button
                onPress={() => (selected ? setSelectedType(null) : setSelectedType(item))}
                active={selected}
                style={styles.button}
                key={item.id}
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
        <SightingCards sightings={shownSightings} />
      )}
    </View>
  );
}
