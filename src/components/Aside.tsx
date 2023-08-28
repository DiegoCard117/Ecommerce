'use client'

import { useContext, useState } from 'react'
import { SearchContext } from '@/contexts/SearchProvider';
import fetchProducts from '@/Api/fetchProducts';

const menuItems = [
  { id: '1', name: 'Placa de Video' },
  { id: '2', name: 'Periféricos' },
  { id: '3', name: 'Computadores' },
  { id: '4', name: 'Kit Upgrade' },
  { id: '5', name: 'Monitores' },
  { id: '6', name: 'Cadeiras e Mesas Gamer' },
  { id: '7', name: 'Cadeiras e Mesas de Escritório' },
  { id: '8', name: 'Notebooks' },
  { id: '9', name: 'Consoles' },
  { id: '10', name: 'Redes e Wireless' },
];

export default function Aside() {
  const { setProducts } = useContext(SearchContext)
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    const products = await fetchProducts(searchText)
    setProducts(products)
  }

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
            <li key={item.id} onClick={() => handleListItemClick(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      </aside>
  )
}
