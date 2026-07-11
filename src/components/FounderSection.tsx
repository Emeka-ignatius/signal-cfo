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
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          <div className="md:col-span-7 gsap-fade-up">
            <p className="text-sm md:text-lg font-mono font-semibold tracking-[0.28em] uppercase text-copper mb-4">
              ABOUT
            </p>
            <h2 className="font-display font-bold text-[clamp(40px,5vw,60px)] leading-[1.0] text-paper mb-4">
              Jay Maniar
            </h2>
            <p className="font-sans text-[13px] font-semibold tracking-[0.18em] uppercase text-copper-muted mb-8">
              Founder, Signals CFO
            </p>

            <div className="space-y-6 font-sans text-base md:text-lg text-text-secondary font-light leading-relaxed max-w-2xl">
              <p className="text-paper font-medium">
                I work with founder-led businesses that have outgrown gut feel but haven’t turned their numbers into a proper strategic rhythm.
              </p>
              <p>
                I’ve advised 120+ founders, analysed 5,500+ financial records, and spent 25 years across finance, operations and strategy.
              </p>
              <p>
                Signals CFO exists because most founders don’t need another report.
              </p>
              <p className="text-paper">
                They need someone commercial enough to understand the numbers, and human enough to see the habits getting in the way.
              </p>
              <p className="font-serif italic text-copper text-lg pt-2 border-t border-white/10">
                Because once the underlying pattern becomes visible, the next decision usually becomes obvious.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 gsap-fade-up">
            <div className="relative aspect-4/5 w-full max-w-[440px] mx-auto rounded-none overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-copper/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
              <Image 
                src="/images/jay-maniar-signalscfo.jpeg" 
                alt="Jay Maniar - Signals CFO" 
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
