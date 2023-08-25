import '../css/globals.scss'
import '../css/desktop.scss'

import { SearchProvider } from '@/Contexts/SearchProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SearchProvider>
        <html lang="pt-br">
          <body>{children}</body>
        </html>
      </SearchProvider>
    </>
  )
}
