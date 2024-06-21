import { useEffect, useState } from 'react';

import { queryClient, useGetSightings, useGetTypes } from '../api';
import { SIGHTING } from '../constants/queryKeys';
import { flattenPaginatedSightingResponses } from '../models/sightings';

export type UseSightingFetchParams = {
  type?: string;
  name?: string;
  size?: number;
};

export const useSightingFetch = ({ type, name, size = 4 }: UseSightingFetchParams) => {
  const [debouncedName, setDebouncedName] = useState<string | undefined>(name);
  const [userIsTyping, setuserIsTyping] = useState(false);

  useEffect(() => {
    setuserIsTyping(true);
    const timeoutId = setTimeout(() => {
      setDebouncedName(name);
      setuserIsTyping(false);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [name]);

  useEffect(() => {
    if (!type) {
      queryClient.resetQueries({ queryKey: [SIGHTING] });
    }
  }, [type]);

  const {
    data: sightingData,
    isFetching: isFetchingSightings,
    isFetchingNextPage: isFetchingNextSightings,
    isLoading,
    hasNextPage,
    fetchNextPage
  } = useGetSightings({
    variables: { size, type, name: debouncedName }
  });

  const loadMoreSightings = () => {
    console.log('isFetchingSightings in load more', isFetchingSightings);
    console.log('hasNextPage in load more', hasNextPage);
    if (hasNextPage && !isFetchingSightings) {
      console.log('got in');
      fetchNextPage();
    }
  };

  useEffect(() => console.log('isFetchingSightings', isFetchingSightings), [isFetchingSightings]);
  useEffect(() => console.log('hasNextPage', hasNextPage), [hasNextPage]);

  const isLoadingSightings = isLoading || userIsTyping;

  const sightings = flattenPaginatedSightingResponses(sightingData) ?? [];

  const { data: sightingTypesData } = useGetTypes();

  return {
    loadMoreSightings,
    isLoadingSightings,
    isFetchingSightings,
    isFetchingNextSightings,
    hasNextPage,
    sightings,
    sightingTypesData
  };
};
