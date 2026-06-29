import Footer from '@/components/Footer'
import TransitionLink from '@/components/TransitionLink'

export default function SprintPage() {
  return (
    <main className="relative bg-forest-900 min-h-screen pt-32 pb-12">
      <div className="marble-texture"></div>

      {/* Hero */}
      <section className="px-6 md:px-12 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
            The Signals CFO Sprint
          </p>
          <h1 className="font-display font-light text-[clamp(42px,6vw,72px)] leading-[1.05] text-paper mb-10 max-w-4xl">
            The Mirror shows the pattern.<br />
            <span className="text-copper">The Sprint turns it into movement.</span>
          </h1>
        </div>
      </section>

      {/* Sprint Details */}
      <section className="px-6 md:px-12 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest-800/80 border-l-[2px] border-copper p-10 md:p-14">
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] max-w-3xl mb-6">
              The Sprint is a 3-month implementation engagement for founders who want hands-on support after the diagnostic. We work through the five moves identified in the Critical Mirror and turn them into practical changes across finance, pricing, cash, operations, client mix, hiring and decision structure.
            </p>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] max-w-3xl mb-12">
              Three months gives enough time to turn the five moves into action, test what shifts, and stop the business sliding back into the same drag. This is not open-ended advisory theatre. It is focused, commercial and built around the moves that matter.
            </p>

            <div className="grid md:grid-cols-3 gap-10 md:gap-12 pt-10 border-t border-copper/20">
              {[
                { label: "Finance & cash", text: "Commercial finance review, cash flow and working capital improvement, KPI and management reporting" },
                { label: "Pricing & clients", text: "Pricing and margin decisions, client and service profitability analysis, business model stress-testing" },
                { label: "Decisions & structure", text: "Founder bottleneck reduction, decision rhythm and accountability, support with difficult commercial decisions" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-copper-muted mb-4">{item.label}</div>
                  <div className="font-sans text-[13px] font-light text-text-secondary leading-[1.6]">{item.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-copper/20">
              <div className="font-display font-light text-[36px] text-copper mb-2">From £5,000 / month</div>
              <div className="font-sans text-[11px] font-normal tracking-[0.06em] text-text-muted">Minimum 3-month engagement. Critical Mirror cost credited against month one.</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-12 py-24 relative z-10 border-t border-white/5 bg-forest-800/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-start">
          <div className="md:col-span-1">
            <h2 className="font-display font-light text-[42px] leading-[1.0] text-paper mb-4">
              Jay<br />
              Maniar
            </h2>
            <p className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-copper-muted mb-8">
              Founder, Signals CFO
            </p>
            
            <div className="flex flex-col gap-3">
              {[
                "KPMG trained · CIMA qualified",
                "MIT Sloan Postgraduate Diploma in Digital Transformation",
                "25+ years across finance, operations, strategy and founder advisory",
                "120+ founders advised",
                "UK Government Help to Grow programme",
                "2026 National Mentoring Matters finalist — Excellence in Mentoring & Personal Impact"
              ].map((cred, i) => (
                <div key={i} className="font-sans text-[12px] font-normal text-text-muted pl-4 border-l border-copper-muted tracking-[0.04em] leading-[1.5]">
                  {cred}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display font-light text-[clamp(22px,2.5vw,32px)] leading-[1.2] text-paper mb-8 max-w-2xl">
              After working with 120+ founders, the same pattern keeps appearing.
            </h3>
            <div className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] space-y-5 max-w-2xl">
              <p>The numbers show the symptoms. The founder explains the pattern. The business pays the cost.</p>
              <p>Signals CFO was built to connect those three things — because better information is useful, but better decisions change the business.</p>
              <p>Financial clarity. Founder pattern recognition. Commercial action. One diagnostic system, built from direct work with founders across 25 years — not theory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 py-32 relative z-10 border-t border-white/5 text-center overflow-hidden">
        <div className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[400px] h-[300px] bg-copper/10 blur-[60px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display font-light text-[clamp(42px,6vw,72px)] leading-[1.05] text-paper mb-6">
            Look at all the signals.<br />
            <span className="text-copper">Not just the financial ones.</span>
          </h2>
          
          <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.7] mb-12 max-w-lg mx-auto">
            A free fit check. Short call. Straight answer on whether this is the right fit. If it is, the Critical Mirror is next. If it isn't, you'll be told directly.
          </p>

          <div className="mb-6">
            <TransitionLink href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="group overflow-hidden bg-transparent border border-copper hover:bg-copper transition-colors text-paper hover:text-forest-900 font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px] text-center inline-block">
              Book a free fit check
            </TransitionLink>
          </div>

          <p className="font-sans text-[11px] font-normal tracking-[0.06em] text-text-muted mt-5">
            No bloated proposal. No vague advisory package. No polite nonsense.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
