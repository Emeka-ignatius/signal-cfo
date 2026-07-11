'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'
import MagneticButton from './MagneticButton'
import FlashlightCard from './FlashlightCard'
import { HOW_IT_WORKS_STEPS } from '@/lib/narrativeData'

const SIGNALS_LIST = [
  "Pricing",
  "Margin",
  "Cash",
  "Client quality",
  "Team strain",
  "Capacity",
  "Founder bottlenecks",
  "Slow decisions",
  "Avoided conversations",
  "Habits that used to help, but now get in the way",
]

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="overflow-hidden">
      
      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-32 px-6 md:px-12 bg-forest-900 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col  justify-between gap-6 mb-20">
            <div>
              <p className="gsap-fade-up text-copper uppercase font-sans font-semibold text-sm md:text-lg tracking-[0.28em] mb-3">
                How It Works
              </p>
              <h2 className="gsap-fade-up font-display font-bold text-[clamp(40px,5.5vw,72px)] leading-[1.05] text-paper">
                3 STEPS. <span className="text-copper">NO FAFF.</span>
              </h2>
            </div>
            <div className="gsap-fade-up">
              <MagneticButton 
                href="https://tidycal.com/jaysmaniar/30-minute-meeting"
                className="inline-block bg-copper hover:bg-copper-light transition-colors text-forest-900 font-sans font-bold text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px]"
              >
                Apply for the Critical Mirror
              </MagneticButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <FlashlightCard
                key={item.step}
                className="gsap-fade-up bg-forest-800 border border-white/10 p-10 flex flex-col justify-between min-h-[320px]"
                style={{ animationDelay: item.delay }}
              >
                <div>
                  <span className="text-sm md:text-lg font-mono font-bold tracking-[0.25em] text-copper uppercase block mb-6">
                    {item.step}
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-paper mb-6">
                    {item.title}
                  </h3>
                  <p className="font-sans text-text-secondary text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="pt-8 border-t border-white/10 mt-8">
                  <span
                    className={`text-xs uppercase font-mono tracking-widest ${
                      item.highlightFooter ? 'text-copper' : 'text-text-muted'
                    }`}
                  >
                    {item.footer}
                  </span>
                </div>
              </FlashlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* THE SIGNALS */}
      <section className="py-32 px-6 md:px-12 bg-forest-800 relative border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="gsap-fade-up text-copper uppercase font-sans font-semibold text-sm md:text-lg tracking-[0.28em] mb-4">
                The Signals
              </p>
              <h2 className="gsap-fade-up font-display font-bold text-[clamp(36px,4.5vw,56px)] leading-[1.08] text-paper">
                Look at all the signals.<br />
                <span className="text-copper">Not just the financial ones.</span>
              </h2>
            </div>

            <p className="gsap-fade-up font-sans text-lg text-text-secondary leading-relaxed font-light">
              Your numbers tell part of the story. But the full picture sits across the business.
            </p>

            <div className="gsap-fade-up pt-4 border-t border-white/10">
              <p className="font-sans text-paper text-base font-medium leading-relaxed">
                Signals CFO connects the financial signals with the founder patterns behind them.
              </p>
              <p className="font-sans text-copper font-semibold text-base mt-2">
                That’s where the useful strategy comes from.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SIGNALS_LIST.map((sig, idx) => (
                <div 
                  key={idx}
                  className={`gsap-fade-up p-5 border transition-all ${
                    idx === SIGNALS_LIST.length - 1
                      ? 'sm:col-span-2 bg-copper/10 border-copper/40 text-paper font-medium'
                      : 'bg-forest-900/60 border-white/10 text-text-secondary hover:border-copper/30 hover:text-paper'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-copper font-mono text-xs">{(idx + 1).toString().padStart(2, '0')}</span>
                    <span className="font-sans text-sm md:text-base">{sig}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
