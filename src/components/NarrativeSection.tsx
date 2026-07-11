'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'
import FlashlightCard from './FlashlightCard'
import { NARRATIVE_CARDS } from '@/lib/narrativeData'

export default function NarrativeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="overflow-hidden">
      
      {/* Section 1: The world doesn't need another damn dashboard */}
      <section className="py-28 px-6 md:px-12 bg-forest-800 relative overflow-hidden border-b border-white/10">
        <div className="marble-texture"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="gsap-fade-up text-copper uppercase font-sans font-semibold  text-sm md:text-lg  tracking-[0.28em] mb-4">
              Beyond Reporting
            </p>
            <h2 className="gsap-fade-up font-display font-bold text-[clamp(36px,5vw,64px)] leading-[1.08] text-paper mb-10">
              The world doesn’t need another damn <span className="text-transparent bg-clip-text bg-linear-to-r from-copper to-copper-light">dashboard.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <p className="gsap-fade-up font-sans text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                AI can build faster reports and prettier charts. Fine.
              </p>
              <p className="gsap-fade-up font-sans text-lg md:text-xl text-paper leading-relaxed font-medium">
                But someone still has to work out what the numbers mean.
              </p>
              <ul className="gsap-fade-up space-y-3 font-display text-xl md:text-2xl text-paper pt-2 border-l-2 border-copper pl-6">
                <li>What matters most?</li>
                <li>What’s costing you?</li>
                <li>What should change first?</li>
                <li>What are you avoiding?</li>
                <li>What move actually fits how you operate?</li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-forest-900/90 border border-white/10 p-8 md:p-10 relative">
              <div className="w-8 h-[2px] bg-copper mb-6"></div>
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-paper mb-6 leading-snug">
                You don’t need another dashboard.<br />
                <span className="text-copper">You need the decision hiding inside the data.</span>
              </h3>
              <p className="font-sans text-text-secondary text-xl leading-relaxed mb-6">
                Stop spending Fridays trying to work out what the numbers mean. Leave knowing exactly what happens on Monday.
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-sans font-semibold text-paper text-sm tracking-wide uppercase">
                  Signals CFO does the part dashboards don’t.
                </p>
                <p className="font-sans text-copper text-[16px] mt-1 font-medium">
                  It turns the numbers into strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: THE PAIN, THE RELIEF, THE TRUTH */}
      <section className="py-32 px-6 md:px-12 bg-forest-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <p className="gsap-fade-up text-copper uppercase text-sm md:text-lg font-sans font-semibold  tracking-[0.28em] mb-4">
              The Reality
            </p>
            <h2 className="gsap-fade-up font-display font-bold text-[clamp(36px,4.5vw,56px)] leading-[1.1] text-paper">
              From staring at reports to moving with <span className="text-copper">certainty.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {NARRATIVE_CARDS.map((card, idx) => {
              const isExpanded = !!expandedCards[idx]
              return (
                <FlashlightCard
                  key={card.badge}
                  className="gsap-fade-up bg-forest-800 border border-white/10 flex flex-col justify-between h-full transition-all duration-300"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm md:text-lg font-mono font-bold tracking-[0.25em] uppercase text-copper">
                        {card.badge}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-copper/60"></div>
                    </div>

                    <div className="min-h-[4.5rem] md:min-h-[5.5rem] flex items-start mb-4">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-paper leading-tight">
                        {card.title}
                      </h3>
                    </div>

                    <p className="font-sans text-base md:text-lg text-paper font-medium leading-relaxed mb-6">
                      {card.lead}
                    </p>

                    {/* Expandable Content Area */}
                    {isExpanded && (
                      <div className="space-y-5 pt-6 border-t border-white/10 font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light animate-in fade-in duration-300">
                        {card.intro && (
                          <p className="text-text-secondary">{card.intro}</p>
                        )}

                        {card.bullets && (
                          <ul className="text-paper font-medium space-y-2 pl-4 border-l border-copper/40">
                            {card.bullets.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}

                        {card.gridItems && (
                          <div className="grid grid-cols-2 gap-2 text-sm md:text-lg font-mono uppercase tracking-wider text-copper bg-forest-900/80 p-4 border border-white/10">
                            {card.gridItems.map((item, gIdx) => (
                              <div key={gIdx}>&bull; {item}</div>
                            ))}
                          </div>
                        )}

                        {card.paragraphs &&
                          card.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}

                        {card.highlight && (
                          <div className="p-4 bg-copper/10 border border-copper/30 rounded-xs">
                            <p className="text-paper font-medium text-sm md:text-base">
                              {card.highlight}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Interactive Footer & Expand Trigger */}
                  <div className="border-t border-white/10 mt-auto">
                    {isExpanded && (
                      <div className="px-8 md:px-10 py-5 bg-forest-900/40 border-b border-white/5">
                        <p className="font-serif italic text-copper text-sm md:text-base">
                          {card.footer}
                        </p>
                      </div>
                    )}

                    <button
                      onClick={() => toggleCard(idx)}
                      className="w-full px-8 md:px-10 py-5 flex items-center justify-between text-sm md:text-lg font-mono uppercase tracking-widest text-copper hover:text-paper hover:bg-forest-900/60 transition-colors cursor-pointer text-left"
                    >
                      <span>
                        {isExpanded ? 'Collapse Analysis' : 'Explore Analysis'}
                      </span>
                      <span className="text-base leading-none">
                        {isExpanded ? '↑' : '↓'}
                      </span>
                    </button>
                  </div>
                </FlashlightCard>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
