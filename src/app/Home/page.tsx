import Aside from "@/components/Aside/Aside";
import Body from "@/components/Body/Body";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import React from "react";
import './globals.scss'

function Home() {

  return (
    <>
      <Head>
        <title>Home | Ecommerce</title>
      </Head>
      <div className="containerHome">
        <Body/>
        <Aside/>
        <Footer/>
      </div>
    </>
  )
}

export default Home