import { createQuery } from 'react-query-kit';

import { getSightings } from '#/common/services/Sighting';
import {
  GetSightingsError,
  GetSightingsParams,
  GetSightingsResponse
} from '#/common/services/Sighting/types';

export const useGetSighting = createQuery<
  GetSightingsResponse | undefined,
  GetSightingsParams,
  GetSightingsError
>({
  queryKey: ['/sighting'],
  fetcher: variables => getSightings(variables).then(res => res.data)
});
