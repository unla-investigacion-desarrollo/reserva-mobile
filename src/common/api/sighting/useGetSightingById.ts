import { createQuery } from 'react-query-kit';

import { SIGHTING } from '#/common/constants/queryKeys';
import { getSightingById } from '#/common/services/Sighting';
import { GetSightingByIdParams, GetSightingByIdResponse } from '#/common/services/Sighting/types';
import { ErrorResponse } from '#/common/services/types';

export const useGetSightingById = createQuery<
  GetSightingByIdResponse | undefined,
  GetSightingByIdParams,
  ErrorResponse
>({
  queryKey: [SIGHTING],
  fetcher: params => getSightingById(params)
});
