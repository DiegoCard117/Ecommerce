import { Metadata } from 'next';
import '../css/globals.scss'
import '../css/desktop.scss'

export const metadata: Metadata = {
  title: 'Ecommerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
