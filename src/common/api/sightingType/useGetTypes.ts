import { createQuery } from 'react-query-kit';

import { SIGHTING_TYPE } from '#/common/constants/queryKeys';
import { getSightingTypes } from '#/common/services';
import { GetSightingTypesResponse } from '#/common/services/SightingType/types';
import { ErrorResponse } from '#/common/services/types';

export const useGetTypes = createQuery<GetSightingTypesResponse | undefined, void, ErrorResponse>({
  queryKey: [SIGHTING_TYPE],
  fetcher: () => getSightingTypes()
});
