'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import MagneticButton from './MagneticButton'
import MirrorGlassEffect from './MirrorGlassEffect'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

    tl.to('.hero-text-line', {
      y: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.12,
      delay: 0.15
    })

    tl.to('.hero-btn', {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.1
    }, "-=0.5")

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative min-h-[85vh] flex items-center px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <MirrorGlassEffect 
          src="/images/Founder performance advisory.png"
          rows={6}
          cols={10}
          className="scale-110 opacity-70"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mt-6 md:mt-0">
        <div className="overflow-hidden inline-block mb-5">
          <p className="hero-text-line text-copper block translate-y-full opacity-0 md:pl-44 text-sm md:text-lg font-mono font-semibold tracking-[0.28em] uppercase">
            Founder performance advisory
          </p>
        </div>

        <h1 className="font-display font-extrabold text-[clamp(34px,4.2vw,58px)] leading-[1.08] tracking-tight text-paper mb-6 drop-shadow-xl flex flex-col">
          <span className="overflow-hidden inline-block">
            <span className="hero-text-line block translate-y-full opacity-0 pb-[0.05em]">You have the numbers.</span>
          </span>
          <span className="overflow-hidden inline-block">
            <span className="hero-text-line block translate-y-full opacity-0 pb-[0.1em] text-transparent bg-clip-text bg-linear-to-r from-copper via-[#d98b48] to-copper-glow">
              Signals CFO turns them into your next 5 moves.
            </span>
          </span>
        </h1>
        
        <div className="overflow-hidden inline-block mb-8">
          <p className="hero-text-line block translate-y-full opacity-0 font-sans text-base md:text-lg font-light text-text-secondary leading-relaxed max-w-2xl">
            Clean accounts are useful. But they don’t tell you what to fix first, what to stop doing, where you’re burning cash, which clients are hurting margin, or which founder habits are getting in the way.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 overflow-hidden pt-1 mb-10">
          <div className="hero-btn translate-y-8 opacity-0">
            <MagneticButton href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="group overflow-hidden bg-copper hover:bg-copper-light transition-colors text-forest-900 font-sans font-bold text-[12px] tracking-[0.2em] uppercase py-[16px] px-[36px] rounded-none text-center inline-block shadow-[0_0_35px_rgba(184,115,51,0.3)]">
              Apply for the Critical Mirror
            </MagneticButton>
          </div>
          <div className="hero-btn translate-y-8 opacity-0">
            <a href="#how-it-works" className="border border-white/20 hover:border-copper/50 hover:bg-white/5 hover:text-paper transition-all text-text-secondary font-sans font-medium text-[12px] tracking-[0.2em] uppercase py-[16px] px-[32px] text-center inline-block">
              How It Works &darr;
            </a>
          </div>
        </div>

        <div className="overflow-hidden inline-block border-t border-white/10 pt-5 w-full max-w-3xl">
          <p className="hero-text-line block translate-y-full opacity-0 font-sans text-[12px] md:text-[13px] font-medium tracking-wider text-copper-muted uppercase">
            120+ founders advised &nbsp;·&nbsp; 5,500+ financial records analysed &nbsp;·&nbsp; 25 years across finance, operations and strategy
          </p>
        </div>
      </div>
    </section>
  )
}
