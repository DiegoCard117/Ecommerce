"use client";
import menu from '../img/menu.svg'
import cart from '../img/cart.svg'
import favorites from '../img/heart.svg'
import profile from '../img/profile.svg'
import interrogaçao from '../img/interrogaçao.svg'

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

import Image from 'next/image'
import React, { useEffect, useState, useContext } from 'react';

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

import fetchProducts from '@/Api/fetchProducts';
import { SearchContext } from '@/Contexts/SearchProvider';

export default function Header() {

  const [MenuClass, setMenuClass] = useState('close')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [shouldRender, setShouldRender] = useState(false)

  const { setProducts } = useContext(SearchContext)

  const [text, setText] = useState("");

  useEffect(()=> {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setShouldRender(true)
      } else {
        setShouldRender(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if(!shouldRender) {
    return null
  }

  const updateMenu = () => {
    const aside = document.querySelector('aside');
    if (aside) {
      !isMenuOpen ? setMenuClass("open") : setMenuClass("close")
      setIsMenuOpen(!isMenuOpen)
    }
  }

  const handleSearch = async () => {
    const products = await fetchProducts(text)
    setProducts(products)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value); // Atualize o estado text com o valor do campo de entrada
  }

  return (
    <>
      <header id='header responsivo'>
        <nav>
          <div className='logo'>
            <h1 className='logo-title'>Ecommerce</h1>
            <div className='btn-menu-top'>
              <button className='favorites'>
                <Image
                  src={profile}
                  alt='favoritos'
                />
                <span>Minha Conta</span>
              </button>
              <button className='interrogaçao'>
                <Image
                  src={interrogaçao}
                  alt='interrogaçao'
                />
                <span>Fale Conosco</span>
              </button>
              <button className='favorites'>
                <Image
                  src={favorites}
                  alt='favoritos'
                />
                <span>Favoritos</span>
              </button>
              <button className='cart'>
              <Image
                  src={cart}
                  alt='favoritos'
                />
                <span>Carrinho</span>
                <div></div>
              </button>
            </div>
          </div>
          <div className='menu-bottom'>
            <button onClick={updateMenu}>
            <Image
                src={menu}
                alt='menu'
              />

            </button>
              <input type="text" id="search" className='search' onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
              }}
              onChange={handleChange}/>
          </div>
        </nav>
      </header>
      <aside>
        <div className='menu-left' onClick={updateMenu}>
          {imagens.map( (item) => (
            <button key={item.id}>
              <Image
                src={item.img}
                alt='menu'
              />
            </button>
          ))}
        </div>
        <div className={MenuClass}>
          <ul>
            <li>Hardware</li>
            <li>Perifericos</li>
            <li>Computadores</li>
            <li>Kit Upgrade</li>
            <li>Monitores</li>
            <li>Cadeiras e Mesas Gamer</li>
            <li>Cadeiras e Mesas de Escritorio</li>
            <li>Notebooks</li>
            <li>Consoles</li>
            <li>Redes e Wireless</li>
          </ul>
        </div>
      </aside>
    </>
  )
}
