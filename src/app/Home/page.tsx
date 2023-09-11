import Aside from "@/components/Aside";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
import Head from "next/head";
import React from "react";

function Home() {

  return (
    <>
      <Head>
        <title>Home | Ecommerce</title>
      </Head>
      <div className="containerHome">
        <Header/>
        <HeaderDesktop/>
        <Body/>
        <Aside/>
        <Footer/>
      </div>
    </>
  )
}

export default Home