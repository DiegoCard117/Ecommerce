'use client'

import React from "react";
import HeaderDesktop from "@/components/HeaderDesktop";
import Link from "next/link";
import Image from "next/image";

import locker from '../../img/locker.svg'

import '../../css/login.scss'

import usuario from '../../img/user.svg'
import eyeClose from '../../img/eyeClose.svg'

import google from '../../img/google.svg'
import face from '../../img/face.svg'


import Header from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from 'next/navigation';

function Login() {

  const { user, signInWithGoogle } = useAuth()
  const router = useRouter();

  async function login(e: { preventDefault: () => void; }) {
    e.preventDefault()
    if(!user) {
      await signInWithGoogle()
    }
    router.push('/Home')
  }

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
          <form className="formLogin">
            <input
              type="text"
              className="inputEmailLogin"
              placeholder="Email"
              />
            <div className="inputSenhaLogin">
              <input
                type="password"
                placeholder="Senha"
              />
              <button className="btnEye">
                <Image
                  src={eyeClose}
                  alt=""
                  width={25}
                  height={25}
                  className="eye"
                  />
              </button>
            </div>
            <button
              className="btnLogin"
            >Acessar Conta</button>
          </form>
          <div className="boxLoginSocial">
            {/* login com google */}
            <button
              className="socialLogin"
              onClick={login}
            >
              <Image src={google} alt={"Login com google"}/>
            </button>
            <button className="socialLogin">
              <Image src={face} alt={"Login com Facebook"}/>
            </button>
          </div>
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
            <Image
              src={usuario}
              alt=""
              width={50}
              height={50}
              />
            <h2>Novo Cliente?</h2>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Login

