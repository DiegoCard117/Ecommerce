"use client";

import "../../css/perfil.scss";

import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
import React, { useContext } from "react";

import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/AuthContext";
import Head from "next/head";

import Image from "next/image";

import gear from "../../img/gear.svg";
import cart from "../../img/cart.svg";
import Footer from "@/components/Footer";

export default function Perfil() {
  const { signOut } = useContext(AuthContext);
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/Login");
    } catch (error) {
      console.error("Erro ao fazer Logout: ", error);
    }
  };

  return (
    <>
      <Head>
        <title>{user ? `${user.name}` : "Perfil | Ecoomerce"}</title>
      </Head>
      <Header />
      <HeaderDesktop />
      {console.log(user?.avatar)}
      {user !== null ? (
        <div className="topPerfil">
          <button className="btnGear">
            <Image src={gear} alt="" />
          </button>
          <Image
            className="avatar"
            loader={({ src }) => src}
            src={user.avatar}
            alt=""
            width={140}
            height={140}
          />
          <h2 className="name">{user.name}</h2>
        </div>
      ) : null}
      <div className="bottomPerfil">
        <div className="resumo">
          <Image src={cart} alt="" width={30} height={30} />
          <h3>Resumo do seu último pedido</h3>
        </div>
        <div className="boxResume">
          <div className="pedido">
            <h3>Numero do Pedido</h3>
            <p>#12345</p>
          </div>
          <div className="data">
            <h3>Data</h3>
            <p>06/09/2023</p>
          </div>
          <div className="status">
            <h3>Status</h3>
            <p className="concluido">Concluido</p>
          </div>
          <div className="pagamento">
            <h3>Pagamento</h3>
            <p>Cartão de Credito</p>
          </div>
          <div className="endereço">
            <h3>Endereço</h3>
            <p>Rua Lorem</p>
            <p>Número 1234, Bairro - Cep 12345678</p>
            <p>Cidade, UF</p>
          </div>
        </div>
        <button className="todosPedidos">Ver todos os pedidos</button>
        <button className="signOut" onClick={handleLogout}>
          SignOut
        </button>
      </div>
      <Footer />
    </>
  );
}
