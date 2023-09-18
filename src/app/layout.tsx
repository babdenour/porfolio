import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nav } from '@/app/components/Nav'
import { Langue } from '@/app/components/Langue'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdenour Porfolio',
  description: 'Porfolio of Abdenour for dev and basketball',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`page text-white ${inter.className} relative flex place-items-center justify-center h-screen`}>
        <Nav />
        <Langue />
        {children}
      </body>
    </html>
  )
}
