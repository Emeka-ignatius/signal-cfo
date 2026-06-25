'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'
import MagneticButton from './MagneticButton'
import PricingCard from './PricingCard'
import FlashlightCard from './FlashlightCard'

export default function CriticalMirror() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative">
      {/* Background glow for the bento grid */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-copper/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 gsap-fade-up">
            <p className="text-copper uppercase font-medium text-[11px] tracking-[4px]">THE DIAGNOSTIC</p>
          </div>
          <h2 className="gsap-fade-up font-display font-bold text-5xl md:text-7xl text-paper mb-8 drop-shadow-lg">The Critical Mirror</h2>
          <p className="gsap-fade-up font-serif italic text-2xl text-paper-muted max-w-3xl mx-auto leading-relaxed">
            Every serious Signals CFO engagement starts here. It exists for one reason: to make sure we solve the right problem.
          </p>
        </div>
        
        {/* Bento Top Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {['MAP', 'FIND', 'DELIVER'].map((verb, i) => (
            <FlashlightCard key={verb} className="gsap-fade-up bg-forest-800/40 backdrop-blur-sm border border-white/5 p-10 rounded-md shadow-2xl">
              <p className="text-copper uppercase font-bold text-[12px] tracking-[3px] mb-6 flex items-center gap-4">
                <span className="w-6 h-[1px] bg-copper"></span>
                WE {verb}
              </p>
              <p className="text-[16px] text-paper leading-relaxed font-medium">
                {i === 0 && "The business model, financial performance, and commercial decisions reviewed in one place."}
                {i === 1 && "Where performance is leaking. Where you hesitate. Where the numbers stop matching the story."}
                {i === 2 && "The pattern. The cost. The archetype. The five moves. Within 24 hours of the session."}
              </p>
            </FlashlightCard>
          ))}
        </div>
        
        {/* Bento Grid Bottom */}
        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-12 flex items-center gap-6 my-8 gsap-fade-up">
            <h3 className="font-serif text-3xl text-paper shrink-0">What you receive</h3>
            <div className="h-[1px] w-full bg-gradient-to-r from-copper/40 to-transparent"></div>
          </div>

          {[
            { label: "THE PATTERN", desc: "The repeated decision loop shaping current performance.", span: "md:col-span-5" },
            { label: "THE COST", desc: "The likely commercial impact across margin, cash, pricing, delivery, capacity, and founder time.", span: "md:col-span-7" },
            { label: "THE ARCHETYPE", desc: "The behavioural pattern most likely influencing how decisions are being made inside the business.", span: "md:col-span-6" },
            { label: "THE FIVE MOVES", desc: "Ranked by likely commercial impact, speed, risk, resistance, and ease of implementation. Not generic. The five moves your business is already asking you to make.", span: "md:col-span-6" }
          ].map((item) => (
            <FlashlightCard key={item.label} className={`gsap-fade-up ${item.span} bg-forest-800/40 backdrop-blur-sm border border-white/5 p-10 rounded-md shadow-2xl`}>
              <div className="absolute -top-10 -left-10 w-1 h-0 bg-copper group-hover:h-[calc(100%+5rem)] transition-all duration-500 ease-out"></div>
              <p className="font-display font-bold text-[14px] tracking-[2px] text-paper mb-4">{item.label}</p>
              <p className="text-[16px] text-paper-muted leading-relaxed">{item.desc}</p>
            </FlashlightCard>
          ))}
        </div>
        
        {/* CTA */}
        <div className="gsap-fade-up text-center mt-12 relative z-20">
          <PricingCard />
          <MagneticButton href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="group overflow-hidden bg-verdigris text-paper font-semibold text-sm tracking-[2px] py-5 px-12 rounded-sm text-center inline-block shadow-[0_0_30px_rgba(64,130,109,0.3)]">
            BOOK THE FREE SESSION &rarr;
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
