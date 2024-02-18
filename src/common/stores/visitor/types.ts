import { ROLES } from './constants';

export type Role = (typeof ROLES)[number];
export interface Visitor {
  name: string;
  role?: Role;
}

export interface VisitorStore {
  visitor: Visitor;
  registerVisitor: (name: string, role?: Role) => void;
}
