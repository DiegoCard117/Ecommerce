import Aside from "@/components/Aside";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home | Ecommerce'
}

function Home() {

  return (
    <>
      <div className="containerHome">
        <head>
          <title>Home | Ecommerce</title>
        </head>
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