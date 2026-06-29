'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

export default function NarrativeSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="overflow-hidden">
      
      {/* Section 1: The Insight */}
      <section id="the-pattern" className="py-24 px-6 md:px-12 bg-forest-800 relative overflow-hidden">
        <div className="marble-texture"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-copper/0 via-copper/50 to-copper/0 hidden md:block"></div>
        <div className="max-w-[720px] mx-auto text-center relative z-10 pt-12">
          <p className="gsap-fade-up text-[19px] md:text-[22px] text-paper-muted mb-8 leading-relaxed font-serif">
            The difference was never in the numbers. It was in the decision they made next, and the one before that, and the one before that. A pattern, repeating, invisible to the person inside it.
          </p>
          
          <div className="gsap-fade-up flex items-center justify-center gap-4 my-16">
            <div className="h-px w-12 bg-copper/40"></div>
            <div className="w-2 h-2 rounded-full bg-copper shadow-[0_0_10px_#B87333]"></div>
            <div className="h-px w-12 bg-copper/40"></div>
          </div>
          
          <p className="gsap-fade-up text-[17px] text-paper-muted mb-12 leading-relaxed max-w-[600px] mx-auto">
            Most founders aren't short of advice. They've got reports, dashboards, opinions, AI tools promising faster insight. None of it answers the only question that matters:
          </p>
          
          <blockquote className="gsap-fade-up font-serif text-4xl md:text-5xl text-paper max-w-[640px] mx-auto my-16 leading-tight drop-shadow-lg shadow-black">
            "Which decision actually matters now?"
          </blockquote>
          
          <p className="gsap-fade-up text-[17px] text-paper-muted leading-relaxed max-w-[600px] mx-auto pb-12">
            Signals CFO exists because data was never the bottleneck. Decisions are. And decisions are shaped by patterns the founder usually can't see — because they're standing inside them.
          </p>
        </div>
      </section>

      {/* Section 2: The Constraint */}
      <section className="py-32 px-6 md:px-12 bg-forest-900 relative">
        {/* Subtle glow orb in background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-verdigris/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-8 gsap-fade-up">
              <span className="w-8 h-px bg-copper"></span>
              <p className="text-copper uppercase font-medium text-[11px] tracking-[3px]">THE CONSTRAINT</p>
            </div>
            <h2 className="gsap-fade-up font-display font-bold text-5xl md:text-6xl text-paper leading-[1.1] drop-shadow-md">
              The same issues<br/>keep coming <span className="text-transparent bg-clip-text bg-linear-to-r from-copper to-copper-light">back.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 glass-panel p-10 md:p-14 relative overflow-hidden group">
            {/* Hover sheen effect on glass panel */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>
            
            <p className="gsap-fade-up text-[18px] text-paper mb-8 leading-relaxed font-medium">
              Margins stay under pressure. Cash feels weaker than revenue suggests. Pricing gets avoided. The team still needs the founder too much.
            </p>
            <p className="gsap-fade-up text-[16px] text-paper-muted mb-8 leading-relaxed">
              That's not a data problem. More reporting won't fix it.
            </p>
            <p className="gsap-fade-up text-[16px] text-paper-muted leading-relaxed">
              The visible issue is only the surface. The real constraint sits underneath the numbers — inside the way the business makes decisions, and inside the habits the founder doesn't realise they're repeating.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
