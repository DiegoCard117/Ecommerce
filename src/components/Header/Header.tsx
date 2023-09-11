'use client'
import { useMediaQuery } from 'react-responsive';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import HeaderDesktop from '../HeaderDesktop/HeaderDesktop';

export default function Header() {

  const isMobile = useMediaQuery({
    query: '(max-width: 720px)'
  })

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 721px)'
  })
  return (
    <>
      {isMobile && <HeaderMobile/>}
      {isDesktopOrLaptop && <HeaderDesktop/>}
    </>
  )
}