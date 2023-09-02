import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
import '../../css/cart.scss'
import Head from "next/head";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Carrinho | Ecoomerce</title>
      </Head>
      <Header/>
      <HeaderDesktop/>
      <h1>Carrinho aqui </h1>
    </>
  )
}