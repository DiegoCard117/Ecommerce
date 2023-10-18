"use client";
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
import "../../css/cart.scss";
import Head from "next/head";
import { useShoppingCart } from "@/contexts/CartContext";
import Image from "next/image";

import cart from "../../img/cart.svg";
import trash from "../../img/trash.svg";
import truck from "../../img/truck.svg";
import formatCurrency from "@/utils/formatCurrency";
import { useEffect, useState } from "react";

export default function Cart() {
  const {
    cartItems,
    setCartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (acc, item) =>
        item.price !== undefined ? item.price * item.quantity + acc : acc,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const frete = 0;

  return (
    <>
      <Head>
        <title>Carrinho | Ecoomerce</title>
      </Head>
      <Header />
      <HeaderDesktop />
      <div className="containerCart">
        <div className="MyCart">
          <Image src={cart} alt="" />
          <h2>Meu Carrinho</h2>
        </div>
        <button className="btnFinale">Finalizar Pedido</button>
        <div className="boxResume">
          <h2>Resumo</h2>

          {cartItems.map((item) => (
            <ul className="subtotal" key={item.id}>
              <li>
                {item.title} : {item.quantity}
              </li>
              {item.price !== undefined && (
                <li>R${item.price * item.quantity}</li>
              )}
            </ul>
          ))}

          <div className="total">
            <h3>Total</h3>
            <h3>{formatCurrency(totalPrice + frete)}</h3>
          </div>

          <div className="valuesCart">
            <p className="spanGreen">à vista</p>
            <p className="totalPrice">{formatCurrency(totalPrice + frete)}</p>
            <p className="or">ou</p>
            <p className="priceRed">
              {formatCurrency((totalPrice + frete) * 1.2)}
            </p>
            <p className="diviSpan">
              em até 12x de{" "}
              <span className="priceRed">
                {formatCurrency(((totalPrice + frete) * 1.2) / 12)}
              </span>{" "}
              sem juros no cartão
            </p>
          </div>
        </div>
        {cartItems?.map((item) => (
          <div key={item.id} className="containerCartItem">
            <div className="CartItemLeft">
              <Image
                src={
                  typeof item.thumbnail === "string"
                    ? item.thumbnail
                        .replace(/http:/gi, "https:")
                        .replace(/\w\.jpg/gi, "W.jpg")
                    : ""
                }
                alt=""
                width={90}
                height={100}
              />
            </div>
            <div className="CartItemRight">
              <p className="title">{item.title}</p>
              <div className="btnCartItem">
                <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button
                  onClick={() =>
                    increaseCartQuantity([
                      {
                        id: item.id,
                        quantity: 1,
                      },
                    ])
                  }
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)}>
                  <Image src={trash} alt="" width={18} height={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="btnClearDiv">
          <button className="btnClear" onClick={() => setCartItems([])}>
            <Image src={trash} alt="" />
            Limpar Carrinho
          </button>
        </div>
        <div className="freteBox">
          <h3>Frete e Prazos</h3>
          <div className="inputsFrete">
            <input type="text" placeholder="Cep*" className="textCep" />
            <button className="btnCalcFrete">
              <Image src={truck} alt="" width={20} height={20} />
              Calcular
            </button>
          </div>
        </div>
        <button className="btnFinale">Finalizar Pedido</button>
      </div>
    </>
  );
}
