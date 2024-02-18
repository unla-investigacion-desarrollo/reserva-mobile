import { useCallback, useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState(aState => !aState), []);

  return [state, toggle] as const;
};
