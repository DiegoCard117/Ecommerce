'use client';

import { useContext, useState } from 'react';
import { SearchContext } from '@/contexts/SearchProvider';
import fetchProducts from '@/Api/fetchProducts';

import './aside.scss'

const menuItems = [
  {
    id: 1,
    categoria: 'Eletrônicos',
  },
  {
    id: 2,
    categoria: 'Informática',
  },
  {
    id: 3,
    categoria: 'Televisores',
  },
  {
    id: 4,
    categoria: 'Consoles',
  },
  {
    id: 5,
    categoria: 'Eletrodomésticos',
  },
  {
    id: 6,
    categoria: 'Sapatos Sociais',
  },
  {
    id: 7,
    categoria: 'Esportes e Fitness',
  },
  {
    id: 8,
    categoria: 'Calçados',
  },
  {
    id: 9,
    categoria: 'Acessórios',
  },
  {
    id: 10,
    categoria: 'Livros',
  },
  {
    id: 11,
    categoria: 'Fotografia',
  },
  {
    id: 12,
    categoria: 'Impressoras',
  },
  {
    id: 13,
    categoria: 'Beleza',
  },
  {
    id: 14,
    categoria: 'Ferramentas Manuais',
  },
  {
    id: 15,
    categoria: 'Panelas',
  },
  {
    id: 16,
    categoria: 'Cadeiras Gamer',
  },
  {
    id: 17,
    categoria: 'Relógios Esportivos',
  },
  {
    id: 18,
    categoria: 'Fones de Ouvido',
  },
  {
    id: 19,
    categoria: 'Bolsas de Luxo',
  },
  {
    id: 20,
    categoria: 'Máquinas de Lavar',
  },
  {
    id: 21,
    categoria: 'Fogões',
  },
  {
    id: 22,
    categoria: 'Sofás de Couro',
  },
  {
    id: 23,
    categoria: 'Bolas de Futebol',
  },
  {
    id: 24,
    categoria: 'Teclados Eletrônicos',
  },
  {
    id: 25,
    categoria: 'Monitores',
  },
  {
    id: 26,
    categoria: 'Cadeiras de Escritório',
  },
  {
    id: 27,
    categoria: 'Malas de Viagem',
  },
  {
    id: 28,
    categoria: 'Aspiradores de Pó',
  },
  {
    id: 29,
    categoria: 'Bicicletas Ergométricas',
  },

];

export default function Aside() {
  const { setProducts } = useContext(SearchContext);
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    const products = await fetchProducts(searchText);
    setProducts(products);
  };

  const handleListItemClick = (itemText: string) => {
    setSearchText(itemText);
    handleSearch();
  };

  return (
    <aside className="aside-desktop">
      <div className="listIconAside">
        <ul>
          {/* Mapear os itens do menu e crie itens de lista */}
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => handleListItemClick(item.categoria)}>
              {item.categoria}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
