'use client'
import Image from "next/image";

import { useContext, useState } from 'react'
import { SearchContext } from '@/Contexts/SearchProvider';
import fetchProducts from '@/Api/fetchProducts';

import gpu from '../img/gpu.svg'
import mouse from '../img/mouse.svg'
import desktop from '../img/desktop.svg'
import upgrade from '../img/upgrade.svg'
import monitor from '../img/monitor.svg'
import cadeira from '../img/cadeira.svg'
import mesa from '../img/mesa.svg'
import note from '../img/note.svg'
import console from '../img/console.svg'
import router from '../img/router.svg'

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
        <div className="menu-left">
        {/* Mapear os itens do menu e criar botões com imagens */}
        {menuItems.map((item) => (
          <button key={item.id} onClick={() => handleListItemClick(item.name)}>
            <Image src={getMenuImage(item.name)} alt="menu" />
          </button>
        ))}
      </div>
      <div>
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

function getMenuImage(itemName: string) {
  switch (itemName) {
    case 'Placa de Video':
      return gpu;
    case 'Periféricos':
      return mouse;
    case 'Computadores':
      return desktop;
    case 'Kit Upgrade':
      return upgrade;
    case 'Monitores':
      return monitor;
    case 'Cadeiras e Mesas Gamer':
      return cadeira;
    case 'Cadeiras e Mesas de Escritório':
      return mesa;
    case 'Notebooks':
      return note;
    case 'Consoles':
      return console;
    case 'Redes e Wireless':
      return router;
    default:
      return ''; // Caso nenhum nome corresponda, retorne uma string vazia
  }
}