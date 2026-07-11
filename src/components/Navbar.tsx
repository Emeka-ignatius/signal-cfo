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
    <nav ref={navRef} className="fixed top-0 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-forest-900/95 backdrop-blur-md z-50 border-b border-white/5">
      <a href="#" className="font-display font-extrabold text-lg tracking-[.25em] text-paper">SIGNALS CFO</a>
      
      <div className="hidden md:flex items-center gap-8 text-paper text-sm font-medium">
        {/* Commented out multi-page navigation to keep a single landing page */}
        {/* <TransitionLink href="/methodology">Methodology</TransitionLink> */}
        {/* <TransitionLink href="/advisory">Advisory</TransitionLink> */}
        {/* <TransitionLink href="/sprint">The Sprint</TransitionLink> */}
        
        <a href="#how-it-works" className="hover:text-copper transition-colors">How It Works</a>
        <a href="#the-mirror" className="hover:text-copper transition-colors">The Mirror</a>
        <a href="#the-sprint" className="hover:text-copper transition-colors">The Sprint</a>
        <a href="#testimonials" className="hover:text-copper transition-colors">Founders</a>
        <a href="#faq" className="hover:text-copper transition-colors">FAQs</a>
      </div>

      <MagneticButton 
        href="https://tidycal.com/jaysmaniar/30-minute-meeting" 
        className="group overflow-hidden bg-copper hover:bg-copper-light transition-colors text-forest-900 font-sans font-semibold text-sm py-3 px-6 rounded-full flex items-center gap-2"
      >
        Apply for Mirror ↗
      </MagneticButton>
    </nav>
  )
}

