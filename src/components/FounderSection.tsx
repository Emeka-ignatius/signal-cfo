'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'
import Image from 'next/image'

export default function FounderSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <div className="gsap-fade-up">
            <h2 className="font-display font-light text-[42px] leading-[1.0] text-paper mb-4">
              Jay<br />
              Maniar
            </h2>
            <p className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-copper-muted mb-10">
              Founder, Signals CFO
            </p>

            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.8] mb-6 max-w-xl">
              25 years across finance, operations, strategy and founder advisory. One diagnostic system built from direct work — not theory.
            </p>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.8] mb-12 max-w-xl">
              Financial clarity. Founder pattern recognition. Commercial action.
            </p>
            
            <div className="flex flex-col gap-3">
              {[
                "KPMG trained · CIMA qualified",
                "MIT Sloan — Digital Transformation",
                "120+ founders advised",
                "UK Help to Grow programme",
                "2026 National Mentoring Finalist"
              ].map((cred, i) => (
                <div key={i} className="font-sans text-[12px] font-normal text-text-muted pl-4 border-l border-copper-muted tracking-[0.04em]">
                  {cred}
                </div>
              ))}
            </div>
          </div>

          <div className="gsap-fade-up">
            <div className="relative aspect-4/5 w-full max-w-[480px] mx-auto rounded-md overflow-hidden shadow-2xl border border-white/5 group">
              <div className="absolute inset-0 bg-copper/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
              <Image 
                src="/images/jay-maniar-signalscfo.jpeg" 
                alt="Jay Maniar - Signals CFO" 
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
