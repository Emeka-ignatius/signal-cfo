'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import MagneticButton from './MagneticButton'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const showNav = gsap.fromTo(navRef.current, {
      yPercent: -100
    }, {
      yPercent: 0,
      paused: true,
      duration: 0.3
    }).progress(1)

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse()
      }
    })
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-forest-900/95 backdrop-blur-md z-50">
      <div className="font-display font-extrabold text-lg tracking-[.25em] text-paper">SIGNALS CFO</div>
      <MagneticButton 
        href="https://tidycal.com/jaysmaniar/30-minute-meeting" 
        className="group overflow-hidden bg-verdigris hover:bg-verdigris transition-colors text-paper font-sans font-semibold text-sm tracking-[1.5px] py-4 px-8 rounded-sm"
      >
        Book the free session
      </MagneticButton>
    </nav>
  )
}
