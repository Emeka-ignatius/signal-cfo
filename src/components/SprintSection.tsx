'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

export default function SprintSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-forest-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="gsap-fade-up text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-10 text-center md:text-left">
          The Signals CFO Sprint
        </p>

        <div className="gsap-fade-up bg-forest-800/80 border-l-[2px] border-copper p-10 md:p-14">
          <h2 className="font-display font-light text-[clamp(28px,4vw,44px)] leading-[1.1] text-paper mb-6">
            The Mirror shows it.<br />
            <span className="text-copper">The Sprint shifts it.</span>
          </h2>
          <p className="font-sans text-[14px] font-light text-text-secondary leading-[1.8] max-w-2xl mb-10">
            Three months of hands-on implementation across the five moves — finance, pricing, cash, client mix, operations, decision structure. This is where strategy becomes movement.
          </p>
          <div>
            <div className="font-display font-light text-[36px] text-copper mb-2">From £5,000 / month</div>
            <div className="font-sans text-[11px] font-normal tracking-[0.08em] text-text-muted">Minimum 3-month engagement. Critical Mirror cost credited against month one.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
