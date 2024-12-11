import { notFound } from 'next/navigation';
import { Header } from '@/components/neighborhood/Header';
import { Overview } from '@/components/neighborhood/Overview';
import { Amenities } from '@/components/neighborhood/Amenities';
import { Gallery } from '@/components/neighborhood/Gallery';
import type { NeighborhoodData } from '@/types/neighborhood';

// This will be replaced with actual API call
async function getNeighborhoodData(slug: string): Promise<NeighborhoodData | null> {
  // Temporary mock data
  const mockData: NeighborhoodData = {
    id: '1',
    name: 'Example Neighborhood',
    slug: 'example-neighborhood',
    description: 'A vibrant community with rich history and modern amenities.',
    overview: {
      population: 25000,
      medianIncome: 75000,
      medianHomePrice: 450000,
      crimeRate: 'Low',
      walkScore: 85,
    },
    highlights: [
      'Historic district with preserved architecture',
      'Award-winning schools',
      'Multiple parks and green spaces',
    ],
    amenities: {
      restaurants: [
        {
          type: 'restaurant',
          name: 'Local Bistro',
          address: '123 Main St',
          rating: 4.5,
          description: 'Farm-to-table cuisine in a cozy setting',
        },
      ],
      schools: [
        {
          type: 'school',
          name: 'Washington Elementary',
          address: '456 Education Ave',
          rating: 4.8,
          description: 'Public K-5 school with excellent programs',
        },
      ],
      parks: [
        {
          type: 'park',
          name: 'Central Park',
          address: '789 Park Road',
          description: '50-acre park with walking trails and playground',
        },
      ],
      shopping: [
        {
          type: 'shopping',
          name: 'Main Street Mall',
          address: '321 Shopping Lane',
          description: 'Modern shopping center with diverse retail options',
        },
      ],
      transportation: [
        {
          type: 'transportation',
          name: 'Central Station',
          address: '555 Transit Way',
          description: 'Major transit hub with bus and train services',
        },
      ],
    },
    images: {
      main: 'https://images.unsplash.com/photo-1449844908441-8829872d2607',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc',
      ],
    },
  };

  return slug === mockData.slug ? mockData : null;
}

export default async function NeighborhoodPage({
  params,
}: {
  params: { slug: string };
}) {
  const neighborhood = await getNeighborhoodData(params.slug);

  if (!neighborhood) {
    notFound();
  }

  return (
    <main>
      <Header neighborhood={neighborhood} />
      <Overview overview={neighborhood.overview} />
      <Amenities amenities={neighborhood.amenities} />
      <Gallery images={neighborhood.images.gallery} />
    </main>
  );
}