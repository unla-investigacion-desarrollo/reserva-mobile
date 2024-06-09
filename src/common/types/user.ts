export type Role = {
  id: number;
  name: string;
};

export type SightingUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  active: boolean;
  role: Role;
};
