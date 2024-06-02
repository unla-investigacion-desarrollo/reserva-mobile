import { createQuery } from 'react-query-kit';

import { getSightingTypes } from '#/common/services/Sighting';
import { GetSightingTypesResponse, GetSightingsError } from '#/common/services/Sighting/types';

export const useGetTypes = createQuery<GetSightingTypesResponse | undefined, void, GetSightingsError>({
  queryKey: ['/types'],
  fetcher: () => getSightingTypes().then(res => res.data)
});
