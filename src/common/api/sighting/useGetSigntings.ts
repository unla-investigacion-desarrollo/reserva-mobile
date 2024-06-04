import { createQuery } from 'react-query-kit';

import { getSightings } from '#/common/services/Sighting';
import { GetSightingsParams, GetSightingsResponse } from '#/common/services/Sighting/types';
import { ErrorResponse } from '#/common/services/types';

export const useGetSighting = createQuery<
  GetSightingsResponse | undefined,
  GetSightingsParams,
  ErrorResponse
>({
  queryKey: ['/sighting'],
  fetcher: variables => getSightings(variables).then(res => res.data)
});
