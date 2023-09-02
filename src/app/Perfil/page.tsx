'use client'

import Header from '@/components/Header';
import HeaderDesktop from '@/components/HeaderDesktop';
import React, { useContext } from 'react';

import { useRouter } from 'next/navigation';
import { AuthContext } from '@/contexts/AuthContext';
import Head from 'next/head';

export default function Perfil() {
  const { signOut } = useContext(AuthContext)
  const router = useRouter()
  const { user } = useContext(AuthContext)

  const handleLogout = async () => {
    try {
      await signOut()
      router.push('/Login')
    } catch (error) {
      console.error('Erro ao fazer Logout: ', error)
    }
  }

  return (
    <>
      <Head>
        <title>{user ? `${user.name}` : 'Perfil | Ecoomerce'}</title>
      </Head>
      <Header/>
      <HeaderDesktop/>
      <h1>Perfil aqui</h1>
      <button onClick={handleLogout}>Deslogar</button>
    </>
  )
} 