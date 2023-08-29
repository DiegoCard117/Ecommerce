'use client'
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";

import google from '../../img/google.svg'
import face from '../../img/face.svg'
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";

import '../../css/cadastro.scss'
import Link from "next/link";

export default function Cadastro() {
  
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
      <Header/>
      <HeaderDesktop/>
      <div className="containerCadastro">
        <Link
          href={'/Login'}
          className="btnLoginVolta"
        >Ja possui uma conta?</Link>
        <div className="TopCadastro">
          <h1>Novo Cliente?</h1>
          <p>É novo por aqui? <br/>
            Informe seus dados e uma senha para aproveitar todos os benefícios de ter uma conta.</p>
        </div>
        <div className="RightBoxCadastro">
          <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" placeholder="Digite seu primeiro nome"/>

            <label htmlFor="sobrenome">Sobrenome</label>
            <input type="text" name="sobrenome" placeholder="Digite seu segundo nome"/>

            <label htmlFor="celular">Celular</label>
            <input type="text" name="celular" placeholder="(XX)X XXXX XXXX"/>

            <label htmlFor="genero">Genero</label>
            <select name="genero">
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Transexual">Transexual</option>
              <option value="Não-binario">Não-binario</option>
              <option value="outro">Outro</option>
            </select>
          </form>
        </div>

        <div className="LeftBoxCadastro">
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Digite seu email"/>

            <label htmlFor="confirmEmail">Confirme seu Email</label>
            <input type="text" name="confirmEmail" placeholder="Confirme seu email"/>

            <div className="boxSenha">
              <label htmlFor="senha">Senha</label>
              <div className="boxSenhaDentro">
                <input type="password" name="senha" placeholder="Digite sua senha"/>
                <input type="password" name="confirmSenha" placeholder="Confirme sua senha"/>
              </div>
            </div>
            <button
              className="CriarCadastro"
              onClick={(e) => e.preventDefault()}
              >
              Criar Conta
            </button>
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
          </form>
        </div>
      </div>
    </>
  )
}

