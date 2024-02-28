export type SightingType = {
  id: number;
  name: string;
  category: string;
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
  createdBy: {
    id: number;
    name: string;
    username: string;
  };
  approvedBy: {
    id: number;
    name: string;
    username: string;
  };
  images: {
    id: number;
    url: string;
  }[];
  fields: {
    id: number;
    title: string;
    description: string;
  }[];
};
