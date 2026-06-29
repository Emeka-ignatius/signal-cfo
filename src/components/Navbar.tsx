'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import MagneticButton from './MagneticButton'
import TransitionLink from './TransitionLink'

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
    <nav ref={navRef} className="fixed top-0 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-forest-900/95 backdrop-blur-md z-50 border-b border-white/5">
      <TransitionLink href="/" className="font-display font-extrabold text-lg tracking-[.25em] text-paper">SIGNALS CFO</TransitionLink>
      
      <div className="hidden md:flex items-center gap-8 text-paper text-sm font-medium">
        <TransitionLink href="/methodology" className="hover:text-copper transition-colors">Methodology</TransitionLink>
        <TransitionLink href="/advisory" className="hover:text-copper transition-colors">Advisory</TransitionLink>
        <TransitionLink href="/sprint" className="hover:text-copper transition-colors">The Sprint</TransitionLink>
      </div>

      <MagneticButton 
        href="#fit-check" 
        className="group overflow-hidden bg-copper hover:bg-copper-light transition-colors text-forest-900 font-sans font-semibold text-sm py-3 px-6 rounded-full flex items-center gap-2"
      >
        Book Fit Call ↗
      </MagneticButton>
    </nav>
  )
}
