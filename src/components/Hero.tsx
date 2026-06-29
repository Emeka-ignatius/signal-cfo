'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import MagneticButton from './MagneticButton'
import MirrorGlassEffect from './MirrorGlassEffect'

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
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <MirrorGlassEffect 
          src="/images/Founder performance advisory.png"
          rows={6}
          cols={10}
          className="scale-110"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mt-12 md:mt-0">
        <div className="overflow-hidden inline-block mb-8">
          <p className="hero-text-line text-copper block translate-y-full opacity-0 text-[10px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-copper-muted">
            Founder performance advisory
          </p>
        </div>

        <h1 className="font-display font-extrabold text-[clamp(42px,6vw,92px)] leading-none text-paper mb-8 drop-shadow-xl flex flex-col">
          <span className="overflow-hidden inline-block pb-2">
            <span className="hero-text-line block translate-y-full opacity-0">Your data isn't the problem.</span>
          </span>
          <span className="overflow-hidden inline-block pb-4">
            <span className="hero-text-line block translate-y-full opacity-0 text-transparent bg-clip-text bg-linear-to-r from-copper to-copper-glow">Using it is.</span>
          </span>
        </h1>
        
        <div className="overflow-hidden inline-block mb-12">
          <p className="hero-text-line block translate-y-full opacity-0 font-sans text-[15px] md:text-[16px] font-light text-text-secondary leading-[1.7] max-w-[480px]">
            Signals CFO helps founder-led businesses move faster by connecting financial data, business patterns and founder behaviour to the decisions that actually matter.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 overflow-hidden pt-2 mb-8">
          <div className="hero-btn translate-y-8 opacity-0">
            <MagneticButton href="#fit-check" className="group overflow-hidden bg-copper hover:bg-copper-light transition-colors text-forest-900 font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px] rounded-none text-center inline-block">
              Book a free fit check
            </MagneticButton>
          </div>
          <div className="hero-btn translate-y-8 opacity-0">
            <a href="#mirror" className="border border-white/20 hover:bg-white/5 hover:text-paper transition-all text-text-secondary font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px] text-center inline-block">
              The Critical Mirror
            </a>
          </div>
        </div>

        <div className="overflow-hidden inline-block">
          <p className="hero-text-line block translate-y-full opacity-0 font-sans text-[11px] font-normal tracking-[0.1em] text-text-muted">
            Built from 120+ founder patterns and 5,500+ financials.
          </p>
        </div>
      </div>
    </section>
  )
}
