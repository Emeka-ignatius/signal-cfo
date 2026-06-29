'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

import FlashlightCard from './FlashlightCard'

export default function RecognitionSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section id="the-pattern" ref={containerRef} className="py-32 px-6 md:px-12 relative bg-forest-900 overflow-hidden">
      <div className="marble-texture"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <p className="gsap-fade-up text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
            Three things founders recognise too late
          </p>
          <h2 className="gsap-fade-up font-display font-light text-[clamp(36px,5vw,58px)] leading-[1.05] text-paper">
            You probably<br />
            already <span className="text-copper">know this.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-copper/20">
          {/* Card 1 */}
          <FlashlightCard className="gsap-fade-up bg-forest-800 relative group transition-colors">
            <div className="p-10 md:p-12 h-full flex flex-col">
              <div className="w-8 h-[2px] bg-copper mb-8"></div>
              <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">The decision</div>
              <h3 className="font-display font-normal text-[26px] leading-[1.15] text-paper mb-6 group-hover:text-copper transition-colors">
                You're not stuck. You're carrying decisions that haven't landed yet.
              </h3>
              <p className="font-sans text-[14px] font-light text-text-secondary leading-[1.75] mt-auto">
                Pricing kept for later. A weak hire left in place. Clients you tolerate because they've been around. These aren't pressures — they're patterns. And patterns have a cost.
              </p>
            </div>
          </FlashlightCard>

          {/* Card 2 */}
          <FlashlightCard className="gsap-fade-up bg-forest-800 relative group transition-colors" style={{ animationDelay: '0.1s' }}>
            <div className="p-10 md:p-12 h-full flex flex-col">
              <div className="w-8 h-[2px] bg-copper mb-8"></div>
              <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">The numbers</div>
              <h3 className="font-display font-normal text-[26px] leading-[1.15] text-paper mb-6 group-hover:text-copper transition-colors">
                Your margin knows what you're avoiding.
              </h3>
              <p className="font-sans text-[14px] font-light text-text-secondary leading-[1.75] mt-auto">
                Rising revenue with weaker cash. Gross margin that keeps sliding. Debtor days quietly creeping. The numbers aren't lying — they're showing you exactly where the hard conversations aren't happening.
              </p>
            </div>
          </FlashlightCard>

          {/* Card 3 */}
          <FlashlightCard className="gsap-fade-up bg-forest-800 relative group transition-colors" style={{ animationDelay: '0.2s' }}>
            <div className="p-10 md:p-12 h-full flex flex-col">
              <div className="w-8 h-[2px] bg-copper mb-8"></div>
              <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">The cost</div>
              <h3 className="font-display font-normal text-[26px] leading-[1.15] text-paper mb-6 group-hover:text-copper transition-colors">
                The cost isn't just financial. It's momentum.
              </h3>
              <p className="font-sans text-[14px] font-light text-text-secondary leading-[1.75] mt-auto">
                A delayed pricing decision teaches the business to tolerate undercharging. A poor hire creates drag across the team. An overloaded founder slows every decision below them. Small patterns, compounding quietly.
              </p>
            </div>
          </FlashlightCard>
        </div>
      </div>
    </section>
  )
}
