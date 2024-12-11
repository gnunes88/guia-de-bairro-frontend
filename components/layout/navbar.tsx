'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-[#EB194B]" />
            <span className="text-[#EB194B] font-bold text-xl">Lopes</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/lancamentos" className="hover:text-gray-600">
              Lançamentos
            </Link>
            <Link href="/prontos" className="hover:text-gray-600">
              Prontos
            </Link>
            <Link href="/aluguel" className="hover:text-gray-600">
              Aluguel
            </Link>
            <Link href="/anuncie" className="hover:text-gray-600">
              Anuncie seu imóvel
            </Link>
            <Link href="/franquia" className="hover:text-gray-600">
              Seja franqueado
            </Link>
            <Link href="/calculadora" className="hover:text-gray-600">
              Calculadora de compra
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Heart className="w-6 h-6 text-[#EB194B]" />
              <span className="absolute -top-2 -right-2 bg-[#EB194B] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
            <Button className="bg-[#EB194B] hover:bg-[#EB194B]/90 text-white">
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}