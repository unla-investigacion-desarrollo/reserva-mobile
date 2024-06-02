import { SightingUser } from './user';

export type SightingType = {
  name: string;
  category: string;
  active: boolean;
};

export type SightingField = {
  title: string;
  description: string;
};

export type SightingImage = {
  id: number;
  url: string;
};

export type Sighting = {
  id: number;
  name: string;
  scientificName: string;
  createdAt: string;
  status: string;
  latitude: number;
  longitude: number;
  type: SightingType;
  createdBy: SightingUser;
  fields: SightingField[];
  images: SightingImage[];
};
