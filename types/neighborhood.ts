export interface Amenity {
  type: string;
  name: string;
  address: string;
  rating?: number;
  description?: string;
}

export interface NeighborhoodData {
  id: string;
  name: string;
  slug: string;
  description: string;
  overview: {
    population: number;
    medianIncome: number;
    medianHomePrice: number;
    crimeRate: string;
    walkScore: number;
  };
  highlights: string[];
  amenities: {
    restaurants: Amenity[];
    schools: Amenity[];
    parks: Amenity[];
    shopping: Amenity[];
    transportation: Amenity[];
  };
  images: {
    main: string;
    gallery: string[];
  };
}