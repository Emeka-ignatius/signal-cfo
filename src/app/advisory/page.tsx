import Footer from '@/components/Footer'
import FlashlightCard from '@/components/FlashlightCard'
import TransitionLink from '@/components/TransitionLink'
import Link from 'next/link'

export default function AdvisoryPage() {
  return (
    <main className="relative bg-forest-900 min-h-screen pt-32 pb-12">
      <div className="marble-texture"></div>

      {/* Hero */}
      <section className="px-6 md:px-12 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
            The Critical Mirror Session
          </p>
          <h1 className="font-display font-light text-[clamp(42px,6vw,72px)] leading-[1.05] text-paper mb-10 max-w-4xl">
            One session. The pattern, the cost, the archetype. <span className="text-copper">The five moves.</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-12 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] mb-6">
              A focused diagnostic for founder-led businesses that need clarity fast. We read the financial signals, commercial patterns and founder decision habits together — and show you what they mean. Within 24 hours, you receive everything you need to act.
            </p>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85]">
              This is not a report. It is not a dashboard. It is not 40 pages of ratios you will skim once and ignore. It is a commercial mirror. Clear. Direct. Useful.
            </p>
          </div>
          <div className="border-l-[1px] border-copper/20 pl-8 md:pl-12">
            <h2 className="font-display font-light text-[clamp(24px,3vw,32px)] leading-[1.2] text-paper mb-6">
              Not 40 recommendations.<br />
              <span className="text-copper">Your five moves.</span>
            </h2>
            <p className="font-sans text-[13px] font-light text-text-secondary leading-[1.8]">
              We identify your founder archetype, read the commercial signals in the numbers, and build the next five moves around how you actually operate. The result is a strategy designed to move you into action, not just sit neatly in a report.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-6 md:px-12 py-20 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-[2px] bg-copper/20">
            {[
              {
                label: "The leak",
                sub: "Deliverable 1",
                head: "Exactly where value is being lost",
                body: "Pricing, delivery, margin, cash conversion, hiring, client mix, capacity, working capital or founder dependency. The financial leak comes first. The behaviour explains why it keeps happening."
              },
              {
                label: "The pattern",
                sub: "Deliverable 2",
                head: "The decision habit making it worse",
                body: "Every founder has patterns. Left alone, they become expensive. The Critical Mirror names them clearly — not as personality labels, but as commercial forces with measurable consequences."
              },
              {
                label: "The cost",
                sub: "Deliverable 3",
                head: "What staying stuck is actually worth",
                body: "Not vague growth blockers. Actual business consequences — lost margin, weak cash conversion, delayed hiring, poor client profitability, decision drag. If the issue is not named clearly, it will keep charging you quietly."
              },
              {
                label: "The archetype",
                sub: "Deliverable 4",
                head: "How your business is wired right now",
                body: "The diagnostic lens that connects the financial signals to the founder behaviour. Not a personality test. A commercial map of how decisions are currently being made — and where that is costing the business."
              },
              {
                label: "Five moves",
                sub: "Deliverable 5",
                head: "Ranked, sequenced, built around you",
                body: "Most founders do not need another list of 30 ideas. They need the five moves that matter next — ranked by commercial impact, urgency and founder capacity. You leave with a sharper view of the business and a practical sequence of action."
              }
            ].map((del, i) => (
              <FlashlightCard key={i} className="bg-forest-800 transition-colors">
                <div className="grid md:grid-cols-[250px_1fr] h-full">
                  <div className="p-8 md:p-10 md:border-r border-copper/15">
                    <div className="font-display text-[22px] text-copper mb-2">{del.label}</div>
                    <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-text-muted">{del.sub}</div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="font-sans font-medium text-[16px] text-paper mb-3">{del.head}</div>
                    <div className="font-sans font-light text-[15px] text-text-secondary leading-[1.8] max-w-3xl">{del.body}</div>
                  </div>
                </div>
              </FlashlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 md:px-12 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="border border-copper/25 border-t-[2px] border-t-copper p-12 flex flex-col md:flex-row justify-between items-center gap-10 bg-forest-800/50">
            <div>
              <div className="font-display font-light text-[52px] text-paper leading-none">£2,495</div>
              <div className="font-sans text-[12px] font-light text-text-muted mt-2">Up to 3 hours. Delivered within 24 hours.</div>
            </div>
            <div className="flex-1 md:border-l border-copper/20 md:pl-10">
              <p className="font-sans text-[14px] font-light text-text-secondary leading-[1.7] mb-6">
                Full cost credited against the Sprint if you continue. Start with a free fit check to confirm it's the right move before committing.
              </p>
              <TransitionLink href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="group overflow-hidden bg-transparent border border-copper hover:bg-copper transition-colors text-paper hover:text-forest-900 font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px] text-center inline-block">
                Book a free fit check
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-6 md:px-12 py-24 relative z-10 border-t border-white/5 bg-forest-800/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
            Who this is for
          </p>
          <h2 className="font-display font-light text-[clamp(32px,4vw,48px)] leading-[1.15] text-paper mb-16 max-w-4xl">
            Founder-led businesses where growth has created more complexity <span className="text-copper">than control.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="font-sans text-[15px] font-medium text-paper mb-6">Usually a fit if:</p>
              <ul className="flex flex-col gap-4">
                {[
                  "£1m–£20m revenue with a team of at least 5",
                  "Still involved in too many decisions",
                  "The business has grown but feels heavier than it should",
                  "You suspect the numbers are showing a deeper pattern",
                  "Willing to look honestly at how decisions affect performance",
                  "Ready to share financials and engage seriously"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start font-sans text-[14px] font-light text-text-secondary pb-4 border-b border-copper/10">
                    <span className="text-copper shrink-0">—</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-[15px] font-medium text-paper mb-6">Not usually a fit if:</p>
              <ul className="flex flex-col gap-4">
                {[
                  "Pre-revenue or no meaningful financial history",
                  "Looking for bookkeeping or compliance support",
                  "Want someone to validate existing assumptions",
                  "Unwilling to share financials",
                  "Want advice without changing how decisions are made"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start font-sans text-[14px] font-light text-text-secondary pb-4 border-b border-copper/10">
                    <span className="text-copper shrink-0">—</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <TransitionLink href="/sprint" className="group overflow-hidden bg-transparent border border-copper hover:bg-copper transition-colors text-paper hover:text-forest-900 font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px] inline-block">
              See the Sprint &rarr;
            </TransitionLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
