'use client';

import { Link as ScrollLink } from 'react-scroll';

export function Navigation() {
  const links = [
    { id: 'sobre', label: 'Sobre o bairro', bold: true },
    { id: 'historia', label: 'História' },
    { id: 'lazer', label: 'Lazer' },
    { id: 'imoveis', label: 'Imóveis prontos' },
    { id: 'gastronomia', label: 'Gastronomia' },
    { id: 'avaliacoes', label: 'Avaliações' },
    { id: 'acessibilidade', label: 'Acessibilidade' },
    { id: 'lancamentos', label: 'Lançamentos' },
    { id: 'seguranca', label: 'Segurança' },
    { id: 'condominios', label: 'Condomínios' },
    { id: 'compare', label: 'Compare' },
    { id: 'infraestrutura', label: 'Infraestrutura' },
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 overflow-x-auto">
        <div className="flex gap-6 whitespace-nowrap">
          {links.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`cursor-pointer hover:text-primary transition-colors ${
                link.bold ? 'font-bold underline' : ''
              }`}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
}