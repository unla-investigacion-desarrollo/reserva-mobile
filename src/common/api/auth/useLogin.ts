import { createMutation } from 'react-query-kit';

import { login } from '#/common/services';
import { LoginParams, LoginResponse } from '#/common/services/Auth/types';
import { ErrorResponse } from '#/common/services/types';

export const useLoginMutation = createMutation<LoginResponse | undefined, LoginParams, ErrorResponse>({
  mutationFn: (params: LoginParams) => login(params).then(res => res.data)
});
