'use client'

import { useState, useEffect, useContext } from "react";
import Image from "next/image";

import profile from '../img/profile-desktop.svg'
import oque from '../img/interrogaçao-desktop.svg'
import heart from '../img/heart-desktop.svg'
import cart from '../img/cart-desktop.svg'
import { SearchContext } from "@/Contexts/SearchProvider";
import fetchProducts from "@/Api/fetchProducts";

export default function HeaderDesktop() {

  const [shouldRender, setShouldRender] = useState(false)

  const { setProducts } = useContext(SearchContext)

  const [text, setText] = useState("");

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

  const handleSearch = async () => {
    const products = await fetchProducts(text)
    setProducts(products)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value); // Atualize o estado text com o valor do campo de entrada
  }

  if(!shouldRender) {
    return null
  }

  return (
    <>
      <header id="header" className="header-desktop">
        <h1>Ecommerce</h1>
        <input type="text" name="" id="search" 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
            }}
            onChange={handleChange}/>
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