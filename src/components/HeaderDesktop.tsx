'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

import profile from '../img/profile-desktop.svg'
import oque from '../img/interrogaçao-desktop.svg'
import heart from '../img/heart-desktop.svg'
import cart from '../img/cart-desktop.svg'

export default function HeaderDesktop() {

  const [shouldRender, setShouldRender] = useState(false)

  useEffect(()=> {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
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

  return (
    <>
      <header className="header-desktop">
        <h1>Ecommerce</h1>
        <input type="text" name="" id="search" />
        <button className="profile">
          <Image
            src={profile}
            alt=""
          />
          <p>Minha Conta</p>
        </button>
        <button className="contato">
          <Image
            src={oque}
            alt=""
          />
          <p>Fale Conosco</p>
        </button>
        <button className="favoritos">
          <Image
            src={heart}
            alt=""
          />
          <p>Favoritos</p>
          <div className="quantidade-favoritos"><span>2</span></div>
        </button>
        <button>
          <Image
            src={cart}
            alt=""
          />
          <p>Carrinho</p>
          <div className="quantidade-compra"><span>4</span></div>
        </button>
      </header>
    </>
  )
} 