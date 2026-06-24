'use client'
import TopographicBackground from './TopographicBackground'

import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      <TopographicBackground />
      
      <div className="relative z-10 max-w-3xl mt-12 md:mt-0">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-copper shadow-[0_0_10px_#B87333] animate-pulse"></div>
          <p className="text-copper uppercase font-medium text-[11px] tracking-[4px]">
            SIGNALS CFO
          </p>
        </div>
        <h1 className="font-display font-extrabold text-[clamp(48px,7vw,84px)] leading-[1.05] text-paper mb-8 drop-shadow-xl">
          Find the five moves<br />
          your business is already<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-glow">asking you to make.</span>
        </h1>
        <p className="font-serif italic text-[24px] md:text-[28px] text-paper-muted leading-relaxed mb-12 max-w-xl">
          Built on patterns from 120+ founders<br />
          and 5,500+ financials.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <MagneticButton href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="group overflow-hidden bg-verdigris text-paper font-semibold text-sm tracking-[2px] py-5 px-10 rounded-sm text-center inline-block">
            BOOK THE FREE SESSION &rarr;
          </MagneticButton>
          <a href="#the-pattern" className="glass-panel hover:bg-white/5 transition-all text-paper font-semibold text-sm tracking-[2px] py-5 px-10 rounded-sm text-center inline-block">
            LEARN HOW IT WORKS &darr;
          </a>
        </div>
      </div>
    </section>
  )
}
