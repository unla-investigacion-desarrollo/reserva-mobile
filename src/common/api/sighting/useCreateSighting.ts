import { createMutation } from 'react-query-kit';

import { createSighting } from '#/common/services';
import { CreateSightingParams, CreateSightingResponse } from '#/common/services/Sighting/types';
import { ErrorResponse } from '#/common/services/types';

export const useCreateSighting = createMutation<
  CreateSightingResponse | undefined,
  CreateSightingParams,
  ErrorResponse
>({
  mutationFn: (params: CreateSightingParams) =>
    createSighting(params).then(res => {
      return res.json;
    })
});
