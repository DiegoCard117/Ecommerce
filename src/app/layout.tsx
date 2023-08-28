import '../css/globals.scss'
import '../css/desktop.scss'

import { SearchProvider } from '@/contexts/SearchProvider'

import { AuthContextProvider } from '@/contexts/AuthContext'
import '../services/firebase'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AuthContextProvider>
        <SearchProvider>
          <html lang="pt-br">
            <body>{children}</body>
          </html>
        </SearchProvider>
      </AuthContextProvider>
    </>
  )
}
