'use client'
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

import Image from "next/image";

import { useContext, useState } from 'react'
import { SearchContext } from '@/Contexts/SearchProvider';
import fetchProducts from '@/Api/fetchProducts';


const imagens = [
  {id:'1', img: gpu},
  {id:'2', img: mouse},
  {id:'3', img: desktop},
  {id:'4', img: upgrade},
  {id:'5', img: monitor},
  {id:'6', img: cadeira},
  {id:'7', img: mesa},
  {id:'8', img: note},
  {id:'9', img: console},
  {id:'10', img: router}
]


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
        <div className='menu-left'>
          {imagens.map( (item) => (
            <button key={item.id}>
              <Image
                src={item.img}
                alt='menu'
              />
            </button>
          ))}
        </div>
        <div>
          <ul>
          <li onClick={() => handleListItemClick('Placa de Video')}>Placa de Video</li>
          <li onClick={() => handleListItemClick('Perifericos')}>Periféricos</li>
          <li onClick={() => handleListItemClick('Computadores')}>Computadores</li>
          <li onClick={() => handleListItemClick('Kit Upgrade')}>Kit Upgrade</li>
          <li onClick={() => handleListItemClick('Monitores')}>Monitores</li>
          <li onClick={() => handleListItemClick('Cadeiras e Mesas Gamer')}>Cadeiras e Mesas Gamer</li>
          <li onClick={() => handleListItemClick('Cadeiras e Mesas de Escritorio')}>Cadeiras e Mesas de Escritório</li>
          <li onClick={() => handleListItemClick('Notebooks')}>Notebooks</li>
          <li onClick={() => handleListItemClick('Consoles')}>Consoles</li>
          <li onClick={() => handleListItemClick('Redes e Wireless')}>Redes e Wireless</li>
          </ul>
        </div>
      </aside>
  )
}
