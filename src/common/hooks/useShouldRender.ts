import { useMemo } from 'react';

export const useShouldRender = <T>(...values: (T | undefined)[]): boolean =>
  useMemo(() => values?.some(Boolean), [values]);
