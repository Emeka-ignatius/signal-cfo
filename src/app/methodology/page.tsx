import Footer from '@/components/Footer'
import TransitionLink from '@/components/TransitionLink'

export default function MethodologyPage() {
  return (
    <main className="relative bg-forest-900 min-h-screen pt-32 pb-12">
      <div className="marble-texture"></div>

      {/* Hero */}
      <section className="px-6 md:px-12 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
            Methodology
          </p>
          <h1 className="font-display font-light text-[clamp(42px,6vw,72px)] leading-[1.05] text-paper mb-10 max-w-4xl">
            Clean accounts don't <span className="text-copper">automatically create better decisions.</span>
          </h1>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="px-6 md:px-12 py-20 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
              The real problem
            </p>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] mb-6">
              Most founders have dashboards, reports, advisers and AI tools. That is not the gap. The gap is knowing which decision matters now — and having the clarity to make it without spending three days pulling numbers together first.
            </p>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] mb-12">
              That delay has a cost. Pricing decisions get postponed. Cash stays tighter than it should. Hiring mistakes drag on. Margin leaks stay hidden. The founder ends up carrying too much in their own head.
            </p>

            <h3 className="font-display font-light text-[clamp(24px,3vw,34px)] leading-[1.2] text-paper mb-6">
              Founder performance is limited by <span className="text-copper">decision friction.</span>
            </h3>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] mb-8">
              The business has data, reports, dashboards and advice. But the founder still carries too much unresolved thinking. And that thinking slows everything below it.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "Revenue is up, but cash still feels tight",
                "Margins are thinner than the effort warrants",
                "Pricing decisions keep getting delayed",
                "The wrong clients take too much energy",
                "The team still needs the founder too much",
                "Growth creates more pressure instead of more control"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start font-sans text-[15px] font-light text-text-secondary pb-4 border-b border-copper/10">
                  <span className="text-copper shrink-0">—</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] mt-8">
              These are not separate problems. They are signals.
            </p>
          </div>

          <div className="sticky top-32 border-l-2 border-copper pl-8 py-2">
            <h2 className="font-display font-light text-[clamp(28px,3.5vw,42px)] leading-[1.15] text-paper">
              "The next move is usually not hidden by a lack of information. It is buried under thirty unresolved decisions all fighting for your attention."
            </h2>
          </div>
        </div>
      </section>

      {/* Why other advice hasn't fixed it */}
      <section className="px-6 md:px-12 py-24 relative z-10 bg-forest-800/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
            Why other advice hasn't fixed it
          </p>
          <h2 className="font-display font-light text-[clamp(24px,3vw,34px)] leading-[1.2] text-paper mb-6 max-w-3xl">
            Partial advice creates more noise <span className="text-copper">when you already have too many competing priorities.</span>
          </h2>
          <p className="font-sans text-[15px] font-light text-text-secondary leading-[1.85] mb-12 max-w-2xl">
            Most business advice solves the visible problem. That is why the same issues keep coming back.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-copper/20">
            {[
              { who: "The accountant", what: "Tells you margin is down. Doesn't show you why the same conversation keeps getting avoided." },
              { who: "The coach", what: "Tells you to delegate. Doesn't connect that to what it's costing in the P&L." },
              { who: "The consultant", what: "Tells you to build systems. Doesn't identify which decisions are blocking the systems from working." },
              { who: "The marketer", what: "Tells you to increase leads. Doesn't ask whether the current delivery model can handle them profitably." }
            ].map((item, i) => (
              <div key={i} className="bg-forest-800 p-8 md:p-10">
                <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-copper-muted mb-4">{item.who}</div>
                <p className="font-sans text-[14px] font-light text-text-secondary leading-[1.6]">{item.what}</p>
              </div>
            ))}
            <div className="bg-forest-800 p-8 md:p-10 md:col-span-2 border-t-2 border-copper">
              <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-copper mb-4">Signals CFO</div>
              <p className="font-sans text-[15px] font-light text-paper leading-[1.6]">Looks at the whole pattern — financial performance, founder behaviour, business model pressure, decision quality, commercial cost. The aim is not more things to think about. It is what matters now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed 3 Lanes */}
      <section className="px-6 md:px-12 py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">
            Three things founders recognise too late
          </p>
          <h2 className="font-display font-light text-[clamp(36px,5vw,58px)] leading-[1.05] text-paper mb-16 max-w-4xl">
            Not because they are stupid.<br />
            <span className="text-copper">Because patterns look like "just how things work."</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-copper/20">
            {/* Lane 1 */}
            <div className="bg-forest-800 p-10 md:p-12">
              <div className="w-8 h-[2px] bg-copper mb-8"></div>
              <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">The decision pattern</div>
              <h3 className="font-display font-normal text-[22px] leading-[1.2] text-paper pb-6 mb-6 border-b border-copper/15">
                You're not stuck. You're carrying decisions that haven't landed yet.
              </h3>
              <div className="font-sans text-[13px] font-light text-text-secondary leading-[1.8] space-y-4">
                <p>Some founders are not short of options. They are stuck because every option is still open.</p>
                <p>They delay pricing because they are "waiting for the right time." They avoid replacing a weak team member because "things might improve." They keep serving low-margin clients because "they've been loyal." They keep approving everything because "it's quicker if I just do it."</p>
                <p>From the outside, these look like normal business pressures. They are not. They are decision patterns.</p>
                <p><em className="text-copper-light not">The Overloaded Operator</em> carries every unresolved choice in their own head. <em className="text-copper-light not">The Avoider</em> keeps calling hard decisions "timing issues." <em className="text-copper-light not">The People-Pleaser</em> protects client relationships even when those clients are draining margin. <em className="text-copper-light not">The Controller</em> says they want the team to step up, then quietly pulls everything back to themselves.</p>
                <p>You do not spot these patterns by asking how busy the founder is. You spot them by looking at where decisions keep circling without landing.</p>
              </div>
            </div>

            {/* Lane 2 */}
            <div className="bg-forest-800 p-10 md:p-12">
              <div className="w-8 h-[2px] bg-copper mb-8"></div>
              <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">The financial fingerprints</div>
              <h3 className="font-display font-normal text-[22px] leading-[1.2] text-paper pb-6 mb-6 border-b border-copper/15">
                Your margin knows what you're avoiding.
              </h3>
              <div className="font-sans text-[13px] font-light text-text-secondary leading-[1.8] space-y-4">
                <p>The numbers usually show the pattern before the founder admits it.</p>
                <p>Rising revenue with weaker cash often means growth is being accepted without enough control. Gross margin erosion often points to weak pricing, poor scope discipline, or avoided client conversations. Client profitability shows where people-pleasing becomes expensive. Debtor days show whether the founder is commercially firm or quietly scared of looking difficult.</p>
                <p>These are not just finance issues. They are behavioural clues.</p>
                <p><em className="text-copper-light not">The Avoider</em> leaves hard conversations inside the gross margin. <em className="text-copper-light not">The People-Pleaser</em> leaves them inside client profitability. <em className="text-copper-light not">The Controller</em> leaves them inside staff productivity. <em className="text-copper-light not">The Overloaded Operator</em> leaves them everywhere.</p>
              </div>
            </div>

            {/* Lane 3 */}
            <div className="bg-forest-800 p-10 md:p-12">
              <div className="w-8 h-[2px] bg-copper mb-8"></div>
              <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-copper-muted mb-6">The performance cost</div>
              <h3 className="font-display font-normal text-[22px] leading-[1.2] text-paper pb-6 mb-6 border-b border-copper/15">
                The cost isn't just financial. It's momentum.
              </h3>
              <div className="font-sans text-[13px] font-light text-text-secondary leading-[1.8] space-y-4">
                <p>This is where most founders underestimate the damage.</p>
                <p>A delayed pricing decision does not just cost margin — it teaches the business to tolerate undercharging. A weak client does not just drain profit — it absorbs attention that should be going into better clients. A poor hire does not just cost salary — it creates drag, rework, frustration and quieter standards across the team.</p>
                <p>An overloaded founder does not just get tired. They slow the business down because too many decisions still need to pass through them.</p>
                <p>Most founders do not need another 40-page report. They need to know which pattern is currently costing them the most — then the five decisions that will change the next quarter.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <TransitionLink href="/advisory" className="group overflow-hidden bg-transparent border border-copper hover:bg-copper transition-colors text-paper hover:text-forest-900 font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-[16px] px-[36px] inline-block">
              See the Advisory approach &rarr;
            </TransitionLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
