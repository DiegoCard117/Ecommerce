'use client'

import { useState, useEffect, useContext } from "react";
import Image from "next/image";

import profile from '../img/profile-desktop.svg'
import oque from '../img/interrogaçao-desktop.svg'
import heart from '../img/heart-desktop.svg'
import cart from '../img/cart-desktop.svg'
import { SearchContext } from "@/Contexts/SearchProvider";
import fetchProducts from "@/Api/fetchProducts";
import Link from "next/link";

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
        <Link href="/"><h1 className="titleSite">Ecommerce</h1></Link>
        <input type="text" name="" id="search" 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
            }}
            onChange={handleChange}/>
        <Link href="/Login" className="profile">
          <Image
            src={profile}
            alt=""
          />
          <p>Minha Conta</p>
        </Link>
        <Link href=""className="contato">
          <Image
            src={oque}
            alt=""
          />
          <p>Fale Conosco</p>
        </Link>
        <Link href=""className="favoritos">
          <Image
            src={heart}
            alt=""
          />
          <p>Favoritos</p>
          <div className="quantidade-favoritos"><p>2</p></div>
        </Link>
        <Link href="" className="carrinho">
          <Image
            src={cart}
            alt=""
          />
          <p>Carrinho</p>
          <div className="quantidade-compra"><p>4</p></div>
        </Link>
      </header>
    </>
  )
} 