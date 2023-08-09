import menu from '../img/menu.svg'
import cart from '../img/cart.svg'
import favorites from '../img/heart.svg'

import Image from 'next/image'

import '../css/header.scss'

import Aside from './Aside';


export default function Header() {
  return (
    <>
      <header>
        <nav>
          <div className='logo'>
            <h1 className='logo-title'>Ecommerce</h1>
            <div className='btn-menu-top'>
              <button className='favorites'>
                <Image
                  src={favorites}
                  alt='favoritos'
                />
              </button>
              <button className='cart'>
              <Image
                  src={cart}
                  alt='favoritos'
                />
              </button>
            </div>
          </div>
          <div className='menu-bottom'>
            <button>
            <Image
                src={menu}
                alt='favoritos'
              />
            </button>
            <input type="text" id="search" className='search'/>
          </div>
        </nav>
      </header>
      <Aside/>
    </>
  )
}