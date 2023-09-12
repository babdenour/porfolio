import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Nav} from '@/app/components/Nav'

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
      <Nav/>
      <body className={`page text-white ${inter.className} relative flex place-items-center`}>{children}</body>
    </html>
  )
}
