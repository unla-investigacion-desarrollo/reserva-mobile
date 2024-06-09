import { createQuery } from 'react-query-kit';

import { getSightingTypes } from '#/common/services/Sighting';
import { GetSightingTypesResponse } from '#/common/services/Sighting/types';
import { ErrorResponse } from '#/common/services/types';

export const useGetTypes = createQuery<GetSightingTypesResponse | undefined, void, ErrorResponse>({
  queryKey: ['/types'],
  fetcher: () => getSightingTypes().then(res => res.data)
});
