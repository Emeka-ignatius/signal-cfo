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
    <section id="the-mirror" ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 max-w-4xl">
          <p className="gsap-fade-up text-copper uppercase font-sans font-semibold text-sm md:text-lg tracking-[0.28em] mb-4">
            THE CRITICAL MIRROR
          </p>
          <h2 className="gsap-fade-up font-display font-bold text-[clamp(36px,5vw,68px)] leading-[1.05] text-paper mb-8">
            Your first 5 moves,<br />
            <span className="text-copper">built from the numbers.</span>
          </h2>
          <p className="gsap-fade-up font-sans text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-3xl">
            The Critical Mirror is a focused diagnostic for founder-led businesses with clean accounts but no clear strategy coming out of them.
          </p>
        </div>

        {/* Diagnostic Framework Strip */}
        <div className="gsap-fade-up mb-12 bg-forest-800/60 border border-white/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="font-display font-bold text-lg text-paper shrink-0 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-copper"></span>
              We work through your business properly:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div className="bg-forest-900/80 border border-white/10 px-4 py-3 text-center">
                <span className="block text-[10px] font-mono text-copper tracking-widest uppercase mb-1">Step 01</span>
                <span className="font-sans text-sm font-medium text-paper">Your numbers</span>
              </div>
              <div className="bg-forest-900/80 border border-white/10 px-4 py-3 text-center">
                <span className="block text-[10px] font-mono text-copper tracking-widest uppercase mb-1">Step 02</span>
                <span className="font-sans text-sm font-medium text-paper">Pressure points</span>
              </div>
              <div className="bg-forest-900/80 border border-white/10 px-4 py-3 text-center">
                <span className="block text-[10px] font-mono text-copper tracking-widest uppercase mb-1">Step 03</span>
                <span className="font-sans text-sm font-medium text-paper">Founder habits</span>
              </div>
              <div className="bg-forest-900/80 border border-white/10 px-4 py-3 text-center">
                <span className="block text-[10px] font-mono text-copper tracking-widest uppercase mb-1">Step 04</span>
                <span className="font-sans text-sm font-medium text-paper">Next 5 moves</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables Grid (3 Cards - Compact & Visually Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FlashlightCard className="bg-forest-800 border border-white/10 p-8 flex flex-col justify-between group hover:border-copper/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-copper font-mono text-sm md:text-lg uppercase tracking-widest font-semibold">You leave with 01</span>
                <span className="w-8 h-[1px] bg-copper/40"></span>
              </div>
              <h4 className="font-display font-bold text-2xl md:text-3xl text-paper mb-4 group-hover:text-copper transition-colors">
                What’s leaking
              </h4>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                Profit, cash, time, focus, margin or capacity.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-text-muted">
              <span>LEAKAGE &amp; MARGIN AUDIT</span>
              <span className="text-copper">01 / 03</span>
            </div>
          </FlashlightCard>

          <FlashlightCard className="bg-forest-800 border border-white/10 p-8 flex flex-col justify-between group hover:border-copper/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-copper font-mono text-sm md:text-lg uppercase tracking-widest font-semibold">You leave with 02</span>
                <span className="w-8 h-[1px] bg-copper/40"></span>
              </div>
              <h4 className="font-display font-bold text-2xl md:text-3xl text-paper mb-4 group-hover:text-copper transition-colors">
                What’s causing it
              </h4>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                The business pattern or founder habit getting in the way.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-text-muted">
              <span>ROOT CAUSE ANALYSIS</span>
              <span className="text-copper">02 / 03</span>
            </div>
          </FlashlightCard>

          <FlashlightCard className="bg-forest-800 border border-white/10 p-8 flex flex-col justify-between group hover:border-copper/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-copper font-mono text-sm md:text-lg uppercase tracking-widest font-semibold">You leave with 03</span>
                <span className="w-8 h-[1px] bg-copper/40"></span>
              </div>
              <h4 className="font-display font-bold text-2xl md:text-3xl text-paper mb-4 group-hover:text-copper transition-colors">
                What to do next
              </h4>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                5 moves, ranked in order.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-text-muted">
              <span>PRIORITIZED 5-MOVE PLAN</span>
              <span className="text-copper">03 / 03</span>
            </div>
          </FlashlightCard>
        </div>

        {/* Full-Width Zero Fluff Strip */}
        <div className="mb-16 bg-forest-800/90 border border-white/10 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3.5">
              <span className="w-6 h-6 rounded-full bg-forest-900 border border-white/10 flex items-center justify-center text-text-muted font-mono text-xs shrink-0">✕</span>
              <span className="font-display text-base md:text-lg text-paper font-medium">No 40-page report to file and forget.</span>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-6 h-6 rounded-full bg-forest-900 border border-white/10 flex items-center justify-center text-text-muted font-mono text-xs shrink-0">✕</span>
              <span className="font-display text-base md:text-lg text-paper font-medium">No dashboard to decode.</span>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-6 h-6 rounded-full bg-forest-900 border border-white/10 flex items-center justify-center text-text-muted font-mono text-xs shrink-0">✕</span>
              <span className="font-display text-base md:text-lg text-paper font-medium">No jargon-filled advisory.</span>
            </div>
            <div className="flex items-center gap-3.5 bg-copper/15 border border-copper/40 px-5 py-4">
              <span className="w-6 h-6 rounded-full bg-copper text-forest-900 flex items-center justify-center font-mono font-bold text-xs shrink-0">✓</span>
              <span className="font-display text-base md:text-lg text-copper font-bold">Just the 5 moves that matter most.</span>
            </div>
          </div>
        </div>

        {/* Pricing Box & Clarity Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pricing Box */}
          <div className="lg:col-span-7 bg-forest-800 border-2 border-copper/40 p-10 md:p-12 relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-copper text-forest-900 font-mono font-bold text-sm md:text-lg uppercase px-4 py-1.5">
              Limited Intake
            </div>
            <div>
              <p className="text-copper font-mono text-sm md:text-lg tracking-widest uppercase mb-2">Focused Diagnostic</p>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-paper mb-6">
                Critical Mirror: <span className="text-copper">£2,495</span>
              </h3>
              <p className="font-sans text-base text-paper font-medium mb-4">
                This is not a quick advisory call.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-6">
                We work through the business until the pattern, the cost and the 5 moves are clear. We don’t move on until they are.
              </p>
              <div className="space-y-4 font-sans text-sm md:text-base text-text-secondary border-t border-white/10 pt-6">
                <p>
                  <strong className="text-paper">I only run 10 Critical Mirror sessions each month.</strong> Each one requires several hours of financial analysis before we meet. That’s what makes the session precise and effective.
                </p>
                <p>
                  The Mirror doesn’t just save you money. It saves the hours founders lose between:
                </p>
                <div className="grid grid-cols-2 gap-4 bg-forest-900/80 p-4 border border-white/10 text-center font-display text-paper">
                  <div>&ldquo;I’ve got the data.&rdquo;</div>
                  <div className="text-copper">&ldquo;I know what to do.&rdquo;</div>
                </div>
                <p className="text-text-muted italic pt-2">
                  If your business doesn’t have enough going on for the Mirror to be worth it, I’ll tell you before you pay.
                </p>
              </div>
            </div>
          </div>

          {/* Clarity Commitment Box */}
          <div className="lg:col-span-5 bg-forest-800/60 border border-white/10 p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="w-10 h-1 bg-copper mb-6"></div>
              <h4 className="font-display font-bold text-2xl md:text-3xl text-paper mb-4">
                Clarity Commitment
              </h4>
              <p className="font-sans text-base text-copper font-medium mb-6">
                You don’t pay for a conversation. You pay to leave with decisions.
              </p>
              <div className="space-y-4 font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                <p>
                  If we finish the Mirror and the 5 moves aren’t clear, ranked and usable, I’ll keep working with you until they are.
                </p>
                <p>
                  If you continue into the Sprint, <strong className="text-paper">every pound you paid for the Mirror is credited against the engagement.</strong>
                </p>
                <p className="text-paper font-medium">
                  You don’t pay for discovery twice.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <MagneticButton 
                href="https://tidycal.com/jaysmaniar/30-minute-meeting"
                className="w-full inline-block bg-copper hover:bg-copper-light transition-colors text-forest-900 font-sans font-bold text-[12px] tracking-[0.2em] uppercase py-[16px] px-[32px] text-center"
              >
                Apply for the Critical Mirror
              </MagneticButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
