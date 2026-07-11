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
    
    setupScrollAnimations(containerRef.current)

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
    <section id="fit-check" ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/10 text-center overflow-hidden">
      <div className="cta-orb absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-copper/15 blur-[90px] rounded-full pointer-events-none opacity-40"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="gsap-fade-up text-copper uppercase font-sans font-semibold text-sm md:text-lg tracking-[0.28em] mb-6">
          THE NEXT MOVE
        </p>
        <h2 className="gsap-fade-up font-display font-bold text-[clamp(36px,5.5vw,68px)] leading-[1.08] text-paper mb-8">
          Stop staring at clean accounts and calling it <span className="text-copper">strategy.</span>
        </h2>
        
        <div className="gsap-fade-up space-y-4 font-sans text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          <p>
            Your numbers already know more than you think. Signals CFO turns them into the 5 moves that matter next.
          </p>
          <p className="text-paper font-medium">
            So you can stop carrying every decision and start moving with certainty.
          </p>
        </div>

        <div className="gsap-fade-up bg-forest-800/80 border border-copper/30 p-8 md:p-10 max-w-3xl mx-auto mb-12">
          <p className="font-display font-bold text-2xl md:text-4xl text-paper mb-8">
            Walk in with the noise.<br />
            <span className="text-copper">Walk out with the next 5 moves.</span>
          </p>
          <div>
            <MagneticButton 
              href="https://tidycal.com/jaysmaniar/30-minute-meeting"
              className="inline-block bg-copper hover:bg-copper-light transition-colors text-forest-900 font-sans font-bold text-[13px] tracking-[0.2em] uppercase py-[18px] px-[44px] shadow-[0_0_35px_rgba(184,115,51,0.3)]"
            >
              Apply for the Critical Mirror
            </MagneticButton>
          </div>
        </div>

        <div className="gsap-fade-up font-sans text-sm md:text-lg text-text-muted space-y-1">
          <p className="text-paper font-medium">I only run 6 each month.</p>
          <p>If it’s right, I’ll say so. If it’s overkill, I’ll tell you that too.</p>
        </div>
      </div>
    </section>
  )
}
