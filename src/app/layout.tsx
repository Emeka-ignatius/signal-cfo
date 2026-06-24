import type { Metadata } from 'next'
import { Inter, Orbitron, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['300', '400', '500', '600'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', weight: ['700', '800'] })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400', '600'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Signals CFO | Find the Pattern',
  description: 'Find the five moves your business is already asking you to make.',
}

import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="relative">
        <div className="noise-overlay pointer-events-none"></div>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
