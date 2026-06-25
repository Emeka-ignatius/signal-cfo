'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TopographicBackground from './TopographicBackground'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

    // Stagger slide-up for text lines
    tl.to('.hero-text-line', {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      delay: 0.2 // Small delay after page load
    })

    // Fade in buttons
    tl.to('.hero-btn', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1
    }, "-=0.6")

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      <TopographicBackground />
      
      <div className="relative z-10 max-w-3xl mt-12 md:mt-0">
        <h1 className="font-display font-extrabold text-[clamp(48px,7vw,84px)] leading-[1.05] text-paper mb-8 drop-shadow-xl flex flex-col">
          <span className="overflow-hidden inline-block pb-2">
            <span className="hero-text-line block translate-y-[100%] opacity-0">Find the five moves</span>
          </span>
          <span className="overflow-hidden inline-block pb-2">
            <span className="hero-text-line block translate-y-[100%] opacity-0">your business is already</span>
          </span>
          <span className="overflow-hidden inline-block pb-4">
            <span className="hero-text-line block translate-y-[100%] opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-glow">asking you to make.</span>
          </span>
        </h1>
        
        <div className="overflow-hidden inline-block mb-12">
          <p className="hero-text-line block translate-y-[100%] opacity-0 font-serif italic text-[24px] md:text-[28px] text-paper-muted leading-relaxed max-w-xl">
            Built on patterns from 120+ founders<br />
            and 5,500+ financials.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 overflow-hidden pt-2">
          <div className="hero-btn translate-y-8 opacity-0">
            <MagneticButton href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="group overflow-hidden bg-verdigris text-paper font-semibold text-sm tracking-[2px] py-5 px-10 rounded-sm text-center inline-block">
              BOOK THE FREE SESSION &rarr;
            </MagneticButton>
          </div>
          <div className="hero-btn translate-y-8 opacity-0">
            <a href="#the-pattern" className="glass-panel hover:bg-white/5 transition-all text-paper font-semibold text-sm tracking-[2px] py-5 px-10 rounded-sm text-center inline-block">
              LEARN HOW IT WORKS &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
