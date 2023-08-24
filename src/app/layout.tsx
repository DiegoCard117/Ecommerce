import { Metadata } from 'next';

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
