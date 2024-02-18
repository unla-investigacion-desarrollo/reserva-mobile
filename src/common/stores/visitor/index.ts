import { createPersistentStore } from '#/lib/stores/utils';

import { VisitorStore } from './types';

export const useVisitorStore = createPersistentStore<VisitorStore>(
  (set, _) => ({
    visitor: { name: '' },
    registerVisitor: (name, role) => set({ visitor: { name, role } }, false, 'registerVisitor')
  }),
  {
    name: 'visitor-store'
  }
);
