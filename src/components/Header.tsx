"use client";

import menu from "../img/menu.svg";
import cart from "../img/cart.svg";
import favorites from "../img/heart.svg";
import profile from "../img/profile.svg";
import interrogaçao from "../img/interrogaçao.svg";

import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";

import fetchProducts from "@/Api/fetchProducts";
import { SearchContext } from "@/contexts/SearchProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/AuthContext";
import { useShoppingCart } from "@/contexts/CartContext";

export default function Header() {
  const { cartItems } = useShoppingCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [MenuClass, setMenuClass] = useState("close");

  const router = useRouter();

  const [shouldRender, setShouldRender] = useState(false);

  const { setProducts } = useContext(SearchContext);

  const [text, setText] = useState("");

  const { user } = useContext(AuthContext);

  const updateMenu = () => {
    const aside = document.querySelector("aside");
    if (aside) {
      !isMenuOpen ? setMenuClass("open") : setMenuClass("close");
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 719) {
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

  if (!shouldRender) {
    return null;
  }

  const handleSearch = async () => {
    router.push("/Home");
    const products = await fetchProducts(text);
    setProducts(products);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header id="header responsivo">
        <nav>
          <div className="logo">
            <Link className="linkLogo" href={"/"}>
              <h1 className="logo-title">Ecommerce</h1>
            </Link>
            <div className="btn-menu-top">
              <Link
                className="favorites btn-nav"
                href={user ? "/Perfil" : "/Login"}
              >
                <Image src={profile} alt="Profile" />
                <span>Minha Conta</span>
                {user ? (
                  <p className="nameUsuario">Olá, {user.name}</p>
                ) : (
                  <p className="nameUsuario nameUsuarioLimpo"></p>
                )}
              </Link>
              <Link className="interrogaçao btn-nav" href={""}>
                <Image src={interrogaçao} alt="interrogaçao" />
                <span>Fale Conosco</span>
              </Link>
              <Link className="favorites btn-nav" href={"/Favorites"}>
                <Image src={favorites} alt="favoritos" />
                <span>Favoritos</span>
              </Link>
              <Link className="cart btn-nav" href={"/Cart"}>
                <Image src={cart} alt="Carrinho" />
                <span>Carrinho</span>
                {totalQuantity > 0 ? (
                  <div className="spanQuantidadeCart">{totalQuantity}</div>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>

          <div className="menu-bottom">
            <button onClick={updateMenu}>
              <Image src={menu} alt="menu" />
            </button>
            <input
              type="text"
              id="search"
              className="search"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              onChange={handleChange}
            />
          </div>
        </nav>
        <aside>
          <div className={MenuClass}>
            <ul>
              <li>Hardware</li>
              <li>Periféricos</li>
              <li>Computadores</li>
              <li>Kit Upgrade</li>
              <li>Monitores</li>
              <li>Cadeiras e Mesas Gamer</li>
              <li>Cadeiras e Mesas de Escritório</li>
              <li>Notebooks</li>
              <li>Consoles</li>
              <li>Redes e Wireless</li>
            </ul>
          </div>
        </aside>
      </header>
    </>
  );
}
