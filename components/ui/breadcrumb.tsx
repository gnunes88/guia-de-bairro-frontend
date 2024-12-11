'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Guia de bairro', href: '/guia-de-bairro' },
    { label: 'São Paulo', href: '/guia-de-bairro/sao-paulo' },
    { label: 'Moema', href: '/guia-de-bairro/sao-paulo/moema' },
  ];

  return (
    <nav className="absolute top-4 left-4 z-10">
      <ol className="flex items-center space-x-2 text-white">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
            <Link
              href={item.href}
              className="hover:text-gray-200 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}