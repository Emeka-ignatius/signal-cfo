'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

export default function FounderSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-forest-900 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Text Content */}
        <div className="flex-1 order-2 md:order-1">
          <div className="inline-flex items-center gap-3 mb-6 gsap-fade-up">
            <p className="text-copper uppercase font-medium text-[11px] tracking-[4px]">THE ARCHITECT</p>
          </div>
          
          <h2 className="gsap-fade-up font-display font-bold text-4xl md:text-5xl text-paper mb-8 leading-tight">
            Jay Maniar
          </h2>
          
          <div className="gsap-fade-up font-serif text-[20px] text-paper-muted leading-relaxed space-y-6">
            <p>
              I’ve spent years analyzing the patterns behind over 5,500 financials and working directly with 120+ founders.
            </p>
            <p>
              What I discovered is that businesses don't fail because of complex external forces. They plateau because of internal, repeated decision loops—commercial friction that constrains growth.
            </p>
            <p>
              Signals CFO isn't a traditional financial firm. It is a diagnostic engine designed to locate your exact performance leaks and identify the precise moves your business is demanding you make.
            </p>
          </div>
        </div>
        
        {/* Image */}
        <div className="flex-1 order-1 md:order-2 w-full gsap-fade-up">
          <div className="relative aspect-[3/4] w-full max-w-[450px] mx-auto rounded-md overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
            {/* Subtle copper overlay that fades on hover */}
            <div className="absolute inset-0 bg-copper/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
            
            <Image 
              src="/images/jay-maniar-signals-cfo.jpg" 
              alt="Jay Maniar - Signals CFO Founder" 
              fill
              className="object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
