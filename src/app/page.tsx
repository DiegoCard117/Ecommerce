import '../css/globals.scss'
import '../css/desktop.scss'
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import HeaderDesktop from '@/components/HeaderDesktop';

export default function Home() {
  return (
    <>
      <Header/>
      <HeaderDesktop/>
      <Body/>
      <Footer/>
    </>
  )
}

