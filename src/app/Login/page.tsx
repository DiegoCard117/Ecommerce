import HeaderDesktop from "@/components/HeaderDesktop";
import Link from "next/link";

import Header from "@/components/Header";

function Login() {
  return (
    <>
      <HeaderDesktop />
      <Header />
      <Link href="/">Pagina Principal</Link>
    </>
  )
}

export default Login

