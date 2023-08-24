'use client'

import Aside from "@/components/Aside";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
import React from "react";

function Home() {

  return (
    <>
      <Header/>
      <HeaderDesktop/>
      <Body/>
      <Aside/>
      <Footer/>
    </>
  )
}

export default Home