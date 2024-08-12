import { createInfiniteQuery } from 'react-query-kit';

import { SIGHTING } from '#/common/constants/queryKeys';
import { getSightings } from '#/common/services/Sighting';
import { GetSightingsParams, GetSightingsResponse } from '#/common/services/Sighting/types';
import { ErrorResponse } from '#/common/services/types';

export const useGetSightings = createInfiniteQuery<
  GetSightingsResponse | undefined,
  GetSightingsParams,
  ErrorResponse
>({
  queryKey: [SIGHTING],
  fetcher: (variables, { pageParam }) => {
    return getSightings({ ...variables, page: pageParam });
  },
  getNextPageParam: lastPage => {
    if (!lastPage || lastPage.currentPage >= lastPage.amountOfPages) {
      return;
    }
    return lastPage.currentPage + 1;
  },
  initialPageParam: 1
});
