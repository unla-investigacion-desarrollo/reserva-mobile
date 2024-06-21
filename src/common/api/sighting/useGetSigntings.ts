import { createInfiniteQuery } from 'react-query-kit';

import { getSightings } from '#/common/services/Sighting';
import { GetSightingsParams, GetSightingsResponse } from '#/common/services/Sighting/types';
import { ErrorResponse } from '#/common/services/types';

export const useGetSightings = createInfiniteQuery<
  GetSightingsResponse | undefined,
  GetSightingsParams,
  ErrorResponse
>({
  queryKey: ['/sighting'],
  fetcher: (variables, { pageParam }) => {
    return getSightings({ ...variables, page: pageParam }).then(res => res.data);
  },
  getNextPageParam: lastPage => {
    if (!lastPage || lastPage.currentPage >= lastPage.amountOfPages) {
      return;
    }
    return lastPage.currentPage + 1;
  },
  initialPageParam: 1
});
