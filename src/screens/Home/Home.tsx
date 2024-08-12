import { useState } from 'react';

import { FlatList, View } from 'react-native';

import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { PlusIcon, SearchIcon } from '#/assets';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { neutral, primary, white } from '#/common/constants/colors';
import { ROUTES } from '#/common/constants/routes';
import { useSightingFetch } from '#/common/hooks/useSightingsFetch';
import { SightingType } from '#/common/types/stightings';
import { Button, Input } from '#/components';
import { Separator } from '#/components/Separator';
import i18n from '#/translations';

import { SightingCards } from './SightingCards';
import { SightingList } from './SightingList';
import { ICON_SIZE, TYPE_FILTERS_GAP, TYPE_HEADER_FOOTER_GAP, styles } from './styles';

export function Home() {
  const [searchValue, setSearchValue] = useState('');

  const [selectedType, setSelectedType] = useState<SightingType | null>(null);

  const {
    loadMoreSightings: loadMoreHome,
    isFetchingNextSightings: isFetchingNextPageHome,
    isLoadingSightings: isLoadingHome,
    sightings: homeSightings,
    hasNextPage: hasNextPageHome,
    sightingTypesData
  } = useSightingFetch({
    type: selectedType?.name
  });

  const {
    loadMoreSightings: loadMoreSearch,
    isFetchingNextSightings: isFetchingNextPageSearch,
    isLoadingSightings: isLoadingSearch,
    sightings: searchSightings,
    hasNextPage: hasNextPageSearch
  } = useSightingFetch({
    type: selectedType?.name,
    name: searchValue,
    size: 10
  });

  const sightingTypes = sightingTypesData?.data ?? [];

  return (
    <View style={styles.home}>
      <StatusBar style="light" />
      <View style={styles.searchBarRow}>
        <Input
          placeholder={i18n.t('Home.search')}
          placeholderTextColor={neutral.dark}
          value={searchValue}
          onChangeText={setSearchValue}
          Icon={SearchIcon}
          containerStyle={styles.searchBar}
          iconColor={primary.default}
          iconStyle={styles.searchIcon}
          showClearButton
        />
        <Button
          onPress={() => router.navigate(ROUTES.NewSighting)}
          intent={BUTTON_INTENTS.PRIMARY}
          Svg={PlusIcon}
          iconSize={ICON_SIZE}
          iconStroke={white}
          style={styles.newSightingButton}
        />
      </View>
      <View style={styles.typeFilters}>
        <FlatList
          horizontal
          ListHeaderComponent={() => <Separator gap={TYPE_HEADER_FOOTER_GAP} />}
          ListFooterComponent={() => <Separator gap={TYPE_HEADER_FOOTER_GAP} />}
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
        <SightingList
          sightings={searchSightings}
          onLoadMoreSightings={loadMoreSearch}
          isLoading={isLoadingSearch}
          isLoadingNextPage={isFetchingNextPageSearch}
          hasNextPage={hasNextPageSearch}
        />
      ) : (
        <SightingCards
          sightings={homeSightings}
          onEndReached={loadMoreHome}
          isLoading={isLoadingHome}
          isLoadingNextPage={isFetchingNextPageHome}
          hasNextPage={hasNextPageHome}
        />
      )}
    </View>
  );
}
