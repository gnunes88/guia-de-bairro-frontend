'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface NearbyNeighborhood {
  name: string;
  image: string;
  distance: string;
  slug: string;
}

const nearbyNeighborhoods: NearbyNeighborhood[] = [
  {
    name: 'Vila Mariana',
    image: 'https://images.unsplash.com/photo-1580130775562-0ef92da028de',
    distance: '2.5 km',
    slug: 'vila-mariana',
  },
  {
    name: 'Itaim Bibi',
    image: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f',
    distance: '3.1 km',
    slug: 'itaim-bibi',
  },
  {
    name: 'Campo Belo',
    image: 'https://images.unsplash.com/photo-1598977123118-4e20ea58df57',
    distance: '2.8 km',
    slug: 'campo-belo',
  },
];

export function NearbyNeighborhoods() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {nearbyNeighborhoods.map((neighborhood) => (
        <div
          key={neighborhood.slug}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <div className="relative h-48">
            <Image
              src={neighborhood.image}
              alt={neighborhood.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{neighborhood.name}</h3>
            <p className="text-gray-600 mb-4">
              Distância: {neighborhood.distance}
            </p>
            <Button
              className="w-full bg-[#EB194B] hover:bg-[#EB194B]/90 text-white"
            >
              Explorar bairro
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}