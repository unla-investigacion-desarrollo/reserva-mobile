import { useEffect, useState } from 'react';

import { useGetSighting } from '../api';
import { Sighting } from '../types/stightings';
import { isEmpty } from '../utils/array';

export const useSightingFetch = (size = 4, type: string) => {
  const [sightings, setSightings] = useState<Sighting[]>([]);

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  const { data, isFetching, isSuccess } = useGetSighting({ variables: { size, page, type } });

  useEffect(() => {
    if (isSuccess && data && !isEmpty(data)) {
      setSightings([...sightings, ...data]);
      if (data.length < size) {
        setLastPage(true);
      }
    }
  }, [data]);

  const loadMoreSightings = () => {
    if (!lastPage && !isFetching) {
      setPage(page + 1);
    }
  };

  return { loadMoreSightings };
};
