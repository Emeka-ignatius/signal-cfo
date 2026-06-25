import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Orbitron } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '500', '600', '700'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', weight: ['700', '800'] })

export const metadata: Metadata = {
  title: 'Signals CFO | Find the Pattern',
  description: 'Find the five moves your business is already asking you to make.',
}

import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import SmoothScrolling from '@/components/SmoothScrolling'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${orbitron.variable}`}>
      <body className="relative">
        <SmoothScrolling>
          <div className="noise-overlay pointer-events-none"></div>
          <Cursor />
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  )
}
