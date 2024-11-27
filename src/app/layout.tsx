import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import classNames from 'classnames'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Roche',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={classNames(inter.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
