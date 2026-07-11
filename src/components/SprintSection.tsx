'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'
import MagneticButton from './MagneticButton'
import FlashlightCard from './FlashlightCard'
import { SPRINT_PILLARS } from '@/lib/narrativeData'

export default function SprintSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section id="the-sprint" ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <p className="gsap-fade-up text-copper uppercase font-sans font-semibold text-sm md:text-lg tracking-[0.28em] mb-4">
            THE SPRINT
          </p>
          <h2 className="gsap-fade-up font-display font-bold text-[clamp(36px,5vw,64px)] leading-[1.05] text-paper mb-8">
            The Mirror finds the first 5 moves.<br />
            <span className="text-copper">The Sprint keeps them moving.</span>
          </h2>
          <div className="gsap-fade-up font-sans text-lg md:text-xl text-text-secondary font-light leading-relaxed space-y-4 max-w-3xl">
            <p>
              Every week, Signals CFO turns your latest numbers into 5 ranked commercial moves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-display font-medium text-paper text-base pt-2">
              <div className="bg-forest-800 p-4 border border-white/10">&bull; Not another report.</div>
              <div className="bg-forest-800 p-4 border border-white/10">&bull; Not another dashboard.</div>
              <div className="bg-forest-800 p-4 border border-white/10">&bull; Not generic recommendations.</div>
            </div>
            <p className="pt-2 text-paper font-medium">
              5 moves: What to fix. What to stop. What to chase. What to change. What to measure next.
            </p>
            <p className="text-copper">
              Then we hold you to them. That accountability matters. Without it, strategy becomes another nice conversation that slowly drowns in your todo list.
            </p>
          </div>
        </div>

        {/* 2 Core Pillars: Pressure-Testing & Benchmarking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SPRINT_PILLARS.map((pillar) => (
            <FlashlightCard
              key={pillar.pillar}
              className="gsap-fade-up bg-forest-800 border border-white/10 p-10 flex flex-col justify-between"
              style={{ animationDelay: pillar.delay }}
            >
              <div>
                <span className="text-sm md:text-lg font-mono font-bold tracking-[0.25em] uppercase text-copper block mb-4">
                  {pillar.pillar}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-paper mb-6">
                  {pillar.title}
                </h3>
                <p className="font-sans font-medium text-paper text-base mb-4">
                  {pillar.subtitle}
                </p>
                <div className="space-y-4 font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
                  <p>{pillar.intro}</p>
                  <ul className="space-y-2 text-paper font-medium pl-4 border-l border-copper/40">
                    {pillar.bullets.map((bullet, idx) => (
                      <li key={idx}>&bull; {bullet}</li>
                    ))}
                  </ul>
                  {pillar.outro && <p>{pillar.outro}</p>}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs font-mono uppercase tracking-wider text-copper">
                {pillar.footer}
              </div>
            </FlashlightCard>
          ))}
        </div>

        {/* Value Proposition & Fractional CFO Comparison + Price block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-forest-800/90 border border-white/10 p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="w-10 h-1 bg-copper mb-6"></div>
              <h4 className="font-display font-bold text-2xl md:text-3xl text-paper mb-6">
                60 strategic moves. 12 accountability calls.<br />
                <span className="text-copper">Tailored to your business every quarter.</span>
              </h4>
              <div className="space-y-4 font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                <p>
                  That’s what the Sprint delivers across 3 months. <strong className="text-paper">For the equivalent of 9 days of fractional CFO time.</strong>
                </p>
                <p>
                  9 days that, in most engagements, get absorbed by management accounts, board packs and operational housekeeping that always feels urgent and rarely moves the business forward.
                </p>
                <p className="text-paper font-medium">
                  The Sprint doesn’t do housekeeping.
                </p>
                <p>
                  It does the 5 moves that matter next, every week, benchmarked against 5,500+ financials so you know exactly where you stand.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-forest-800 border-2 border-copper/50 p-10 md:p-12 flex flex-col justify-between">
            <div>
              <span className="text-sm md:text-lg font-mono uppercase tracking-widest text-copper block mb-3">Quarterly Execution Partner</span>
              <h4 className="font-display font-bold text-3xl md:text-4xl text-paper mb-4">
                From <span className="text-copper">£5,000</span> / month
              </h4>
              <p className="font-sans text-sm text-text-muted mb-8 leading-relaxed">
                Minimum 3-month engagement. Full Mirror cost credited against month 1.
              </p>
            </div>

            <div>
              <MagneticButton 
                href="https://tidycal.com/jaysmaniar/30-minute-meeting"
                className="w-full inline-block bg-copper hover:bg-copper-light transition-colors text-forest-900 font-sans font-bold text-[12px] tracking-[0.2em] uppercase py-[18px] px-[36px] text-center"
              >
                Talk to us about the Sprint
              </MagneticButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
