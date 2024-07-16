import { useState } from 'react';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useSession } from '#/common/hooks/useSession';

export function APIProvider({ children }: { children: React.ReactNode }) {
  const { logOut } = useSession();

  const onError = (error: Error) => {
    if ('status' in error && error.status === 401) {
      logOut();
    }
  };

  const queryCache = new QueryCache({
    onError
  });

  const mutationCache = new MutationCache({
    onError
  });

  const [queryClient] = useState(() => new QueryClient({ queryCache, mutationCache }));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
