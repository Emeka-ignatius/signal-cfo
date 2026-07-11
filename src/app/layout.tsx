import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Michroma } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '500', '600', '700'] })
const michroma = Michroma({ subsets: ['latin'], variable: '--font-michroma', weight: ['400'] })

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
    <html lang="en" className={`${plusJakarta.variable} ${michroma.variable}`}>
      <body className="relative">
        <SmoothScrolling>
          <div id="transition-curtain" className="fixed left-0 w-full h-full z-100 bg-forest-900 pointer-events-none flex flex-col justify-center items-center" style={{ top: '100%' }}>
            <div id="transition-logo" className="font-display font-light text-2xl md:text-4xl text-copper tracking-[0.2em] uppercase opacity-0">
              Signals CFO
            </div>
          </div>
          <div className="noise-overlay pointer-events-none"></div>
          <Cursor />
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  )
}
