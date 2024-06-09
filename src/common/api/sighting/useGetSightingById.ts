import { createQuery } from 'react-query-kit';

import { getSightingById } from '#/common/services/Sighting';
import { GetSightingByIdParams, GetSightingByIdResponse } from '#/common/services/Sighting/types';
import { ErrorResponse } from '#/common/services/types';

export const useGetSightingById = createQuery<
  GetSightingByIdResponse | undefined,
  GetSightingByIdParams,
  ErrorResponse
>({
  queryKey: ['/sighting'],
  fetcher: params => getSightingById(params).then(res => res.data)
});
