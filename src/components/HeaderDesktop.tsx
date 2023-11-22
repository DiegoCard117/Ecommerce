"use client";

import { useState, useEffect, useContext } from "react";
import Image from "next/image";

import profile from "../img/profile-desktop.svg";
import oque from "../img/interrogaçao-desktop.svg";
import heart from "../img/heart-desktop.svg";
import cart from "../img/cart-desktop.svg";

import { SearchContext } from "@/contexts/SearchProvider";
import fetchProducts from "@/Api/fetchProducts";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { useShoppingCart } from "@/contexts/CartContext";

import { useRouter } from "next/navigation";

export default function HeaderDesktop() {
  const { cartItems } = useShoppingCart();

  const [shouldRender, setShouldRender] = useState(false);

  const { setProducts } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const [text, setText] = useState("");

  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = async () => {
    const products = await fetchProducts(text);
    router.push('/')
    setProducts(products);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  if (!shouldRender) {
    return null;
  }

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header id="header" className="header-desktop">
        <Link className="linkLogo" href="/">
          <h1 className="titleSite">Ecommerce</h1>
        </Link>
        <input
          type="text"
          name=""
          id="search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          onChange={handleChange}
        />
        <Link href={user ? "/Perfil" : "/Login"} className="profile">
          <Image src={profile} alt="" />
          {user ? <p>Olá, {user.name}</p> : <p>Minha conta</p>}
        </Link>
        <Link href="" className="contato">
          <Image src={oque} alt="" />
          <p>Fale Conosco</p>
        </Link>
        <Link href="" className="favoritos">
          <Image src={heart} alt="" />
          <p>Favoritos</p>
          <div className="quantidade-favoritos">
            <p>2</p>
          </div>
        </Link>
        <Link href="/Cart" className="carrinho">
          <Image src={cart} alt="" />
          <p>Carrinho</p>
          {totalQuantity > 0 ? (
            <div className="quantidade-compra">{totalQuantity}</div>
          ) : (
            ""
          )}
        </Link>
      </header>
    </>
  );
}
