import { useEffect, useState } from 'react';

import { useGetSightings } from '../api';
import { Sighting } from '../types/stightings';
import { isEmpty } from '../utils/array';

export const useSightingFetch = (size = 4, type: string) => {
  const [sightings, setSightings] = useState<Sighting[]>([]);

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  const {
    data: sightingsDataPage,
    isFetching,
    isSuccess
  } = useGetSightings({ variables: { size, page, type } });

  useEffect(() => {
    if (isSuccess && sightingsDataPage && sightingsDataPage.data && !isEmpty(sightingsDataPage.data)) {
      setSightings([...sightings, ...sightingsDataPage.data]);
      if (sightingsDataPage.amountOfPages === page) {
        setLastPage(true);
      }
    }
  }, [sightingsDataPage]);

  const loadMoreSightings = () => {
    if (!lastPage && !isFetching) {
      setPage(page + 1);
    }
  };

  return { loadMoreSightings, sightings };
};
