import React from "react";
import HeaderDesktop from "@/components/HeaderDesktop";
import Link from "next/link";
import Image from "next/image";

import locker from '../../img/locker.svg'

import '../../css/login.scss'

import user from '../../img/user.svg'
import eyeClose from '../../img/eyeClose.svg'


import Header from "@/components/Header";

function Login() {
  return (
    <>
      <HeaderDesktop />
      <Header />
      <section className="containerLogin">
        <div className="TopLogin">
          <Image src={locker} alt={"cadeado"}/>
          <h2 className="titleLogin">Já tem uma conta?</h2>
          <h3 className="subTitleLogin">Informe seus dados para o login</h3>
        </div>
        <div className="MedLogin">
          <form>
            <input type="text" className="inputEmailLogin"/>
            <div className="inputSenhaLogin">
              <input type="password" />
              <button>
                <Image src={eyeClose} alt=""/>
              </button>
            </div>
            <button>Acessar Conta</button>
          </form>
        </div>
        <div className="BottomLogin">
          <Link
            href={'/Recuperar'}
            className="LinkRecuperar"
            >
            Esqueci minha senha
          </Link>
          <Link
            href={'/Cadastro'}
            className="LinkCadastro"
            >
            <Image src={user} alt=""/>
            <h2>Novo Cliente?</h2>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Login

