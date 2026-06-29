'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'
import MagneticButton from './MagneticButton'

import FlashlightCard from './FlashlightCard'

export default function CriticalMirror() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section id="mirror" ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          
          <div className="gsap-fade-up">
            <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
              The Critical Mirror Session
            </p>
            <h2 className="font-display font-light text-[clamp(36px,5vw,58px)] leading-[1.05] text-paper mb-8">
              One session.<br />
              <span className="text-copper">Five moves.</span><br />
              No report.
            </h2>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.8] max-w-md">
              We read the financial signals, commercial patterns and founder decision habits together. Within 24 hours, you have what you need to act.
            </p>
          </div>

          <div className="gsap-fade-up">
            <div className="w-10 h-[1px] bg-copper mb-8"></div>
            <p className="font-display font-light text-[22px] leading-[1.4] text-paper mb-8">
              Not 40 recommendations.<br />
              Your five moves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-copper/10">
              {[
                { label: "The leak", desc: "Exactly where profit is disappearing" },
                { label: "The pattern", desc: "The decision habit making it worse" },
                { label: "The cost", desc: "What staying stuck is actually worth" },
                { label: "The archetype", desc: "How your business is wired right now" },
              ].map((item) => (
                <FlashlightCard key={item.label} className="bg-forest-800 transition-colors">
                  <div className="p-8 flex flex-col gap-2 h-full">
                    <div className="font-display font-normal text-[20px] text-copper leading-[1.2]">{item.label}</div>
                    <div className="font-sans text-[14px] font-light text-text-secondary leading-[1.6]">{item.desc}</div>
                  </div>
                </FlashlightCard>
              ))}
              <FlashlightCard className="bg-forest-800 md:col-span-2 transition-colors">
                <div className="p-8 flex flex-col gap-2 h-full">
                  <div className="font-display font-normal text-[20px] text-copper leading-[1.2]">Five moves</div>
                  <div className="font-sans text-[14px] font-light text-text-secondary leading-[1.6]">Ranked, sequenced, built around how you actually operate</div>
                </div>
              </FlashlightCard>
            </div>
          </div>
        </div>

        {/* Pricing Block */}
        <div className="mt-20 border border-copper/25 border-t-[2px] border-t-copper p-12 flex flex-col md:flex-row justify-between items-center gap-10 gsap-fade-up bg-forest-800/50">
          <div>
            <div className="font-display font-light text-[52px] text-paper leading-none">£2,495</div>
            <div className="font-sans text-[12px] font-light text-text-muted mt-2">Up to 3 hours. Delivered within 24 hours.</div>
          </div>
          <div className="flex-1 md:border-l border-copper/20 md:pl-10">
            <p className="font-sans text-[14px] font-light text-text-secondary leading-[1.7] mb-6">
              Full cost credited against the Sprint if you continue. Start with a free fit check to confirm it's the right move.
            </p>
            <MagneticButton href="#fit-check" className="group overflow-hidden bg-transparent border border-copper hover:bg-copper transition-colors text-paper hover:text-forest-900 font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px] text-center inline-block">
              Book a free fit check
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  )
}
