'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setupScrollAnimations } from '@/utils/animations'
import MagneticButton from './MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCtaSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Base fade-up animations
    setupScrollAnimations(containerRef.current)

    // Breathing & Parallax orb
    gsap.to('.cta-orb', {
      y: 100,
      scale: 1.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.cta-orb', {
      opacity: 0.6,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef })

  return (
    <section id="fit-check" ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/5 text-center overflow-hidden">
      <div className="cta-orb absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-copper/10 blur-[80px] rounded-full pointer-events-none opacity-30"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="gsap-fade-up font-display font-light text-[clamp(42px,6vw,72px)] leading-[1.05] text-paper mb-6">
          Look at all the signals.<br />
          <span className="text-copper">Not just the financial ones.</span>
        </h2>
        
        <p className="gsap-fade-up font-sans text-[15px] font-light text-text-secondary leading-[1.8] mb-12 max-w-lg mx-auto">
          Short call. Straight answer on whether this is the right fit. If it isn't, you'll be told directly.
        </p>

        <div className="gsap-fade-up mb-6">
          <MagneticButton href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="group overflow-hidden bg-transparent border border-copper hover:bg-copper transition-colors text-paper hover:text-forest-900 font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px] text-center inline-block">
            Book a free fit check
          </MagneticButton>
        </div>

        <p className="gsap-fade-up font-sans text-[11px] font-normal tracking-[0.06em] text-text-muted mt-5">
          No bloated proposal. No vague advisory package. No polite nonsense.
        </p>
      </div>
    </section>
  )
}
