'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

export default function WhoItsForSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          
          <div className="gsap-fade-up">
            <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
              Who this is for
            </p>
            <h2 className="font-display font-light text-[clamp(36px,5vw,58px)] leading-[1.05] text-paper mb-10">
              Growth that feels <span className="text-copper">harder than it should.</span>
            </h2>
            <ul className="flex flex-col gap-5">
              {[
                "£1m–£20m revenue, team of at least 5",
                "Still involved in too many decisions",
                "Data exists — clarity doesn't",
                "Growth is creating complexity, not control",
                "Ready to look at the pattern honestly"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start font-sans text-[14px] font-light text-text-secondary pb-4 border-b border-copper/10">
                  <span className="text-copper shrink-0">—</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="gsap-fade-up">
            <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
              Not right for you if
            </p>
            <h2 className="font-display font-light text-[clamp(24px,3vw,38px)] leading-[1.2] text-paper mb-10">
              You want someone to tell you <span className="text-copper">you're already doing it right.</span>
            </h2>
            <ul className="flex flex-col gap-5">
              {[
                "Pre-revenue or no financial history",
                "Looking for bookkeeping or compliance",
                "Unwilling to share financials",
                "Want advice without changing decisions"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start font-sans text-[14px] font-light text-text-secondary pb-4 border-b border-copper/10">
                  <span className="text-copper shrink-0">—</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
