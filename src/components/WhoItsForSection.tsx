'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'
import FlashlightCard from './FlashlightCard'

export default function WhoItsForSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* THIS IS FOR YOU IF */}
          <FlashlightCard className="gsap-fade-up bg-forest-800 border border-white/10 p-10 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-sm md:text-lg font-mono font-bold tracking-[0.28em] uppercase text-copper mb-6">
                FIT CHECK &bull; 01
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight text-paper mb-8">
                THIS IS FOR YOU <span className="text-copper">IF:</span>
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "You have clean accounts, but turning them into strategy feels too slow.",
                  "You keep circling the same problems: pricing, cash, margin, hiring, clients, capacity or delegation.",
                  "You want someone to tell you what the numbers are really saying.",
                  "You want 5 clear moves, not another woolly strategy session.",
                  "You are preparing for growth, funding, lending, hiring, restructuring or serious commercial decisions.",
                  "You want to stop second-guessing the business and move with more certainty.",
                  "You are prepared to act."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start font-sans text-[15px] font-light text-text-secondary pb-4 border-b border-white/10 last:border-0">
                    <span className="text-copper font-mono font-bold shrink-0">&bull;</span>
                    <span className="text-paper">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FlashlightCard>

          {/* NOT FOR YOU IF */}
          <FlashlightCard className="gsap-fade-up bg-forest-800/80 border border-white/10 p-10 md:p-12 flex flex-col justify-between" style={{ animationDelay: '0.15s' }}>
            <div>
              <p className="text-sm md:text-lg font-mono font-bold tracking-[0.28em] uppercase text-text-muted mb-6">
                FIT CHECK &bull; 02
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight text-paper mb-8">
                NOT FOR YOU <span className="text-copper-muted">IF:</span>
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "You need bookkeeping or compliance support.",
                  "You are pre-revenue.",
                  "You won’t share the numbers.",
                  "You want reassurance more than truth.",
                  "You want strategy, but not the discomfort of changing how decisions get made."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start font-sans text-[15px] font-light text-text-secondary pb-4 border-b border-white/10 last:border-0">
                    <span className="text-copper-muted font-mono shrink-0">&mdash;</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FlashlightCard>

        </div>
      </div>
    </section>
  )
}
