'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

const faqs = [
  {
    q: "What actually happens on the free call?",
    a: "We diagnose the core constraint.\n\nBring the issue you keep circling. We’ll look at what’s actually driving it, and decide together whether the Critical Mirror is the right next step.\n\nNo pitch. No slides. Just a straight conversation about what’s happening in your numbers and your decisions."
  },
  {
    q: "What’s the difference between the free call and the Critical Mirror?",
    a: "The free call is 30 minutes to look at the constraint and decide if the Mirror makes sense.\n\nThe Critical Mirror is the full diagnostic. We go deep into your numbers, your commercial model, and your decision patterns, and hand you the 5 moves that matter next."
  },
  {
    q: "What’s an archetype, and why does it matter?",
    a: "Your archetype is the default way you make commercial decisions when you’re under pressure.\n\nSome founders hoard cash. Some chase growth at the expense of margin. Some avoid pricing conversations. Some over-hire to avoid operational friction.\n\nYour numbers always show your archetype. Once you see it, you can stop repeating the pattern."
  },
  {
    q: "How do you work out my archetype?",
    a: "By looking at the gap between what your numbers say and what you actually do.\n\nEvery founder leaves a trail in their accounts: where cash sits, where margin leaks, what gets delayed, what gets approved too quickly.\n\nWe combine that with how you talk about your decisions to identify the pattern running the business."
  },
  {
    q: "How long until I see the 5 moves?",
    a: "Within 24 hours of our Critical Mirror session.\n\nYou walk out of the session with the clarity. You get the written document outlining your 5 moves the next day."
  },
  {
    q: "What if I don’t agree with the diagnosis, or it doesn’t land?",
    a: "Then we talk about it.\n\nThe Mirror isn’t me handing down commandments from a mountain. It’s a mirror. If something feels off, that usually tells us even more about what’s really going on.\n\nThat said: in 25 years and 120+ founders, the reflection is rarely wrong."
  },
  {
    q: "Is this therapy, coaching, or a strategy session?",
    a: "None of the above.\n\nTherapy looks at how you feel. Coaching asks open-ended questions. Traditional strategy gives you a 60-page deck.\n\nSignals CFO is a diagnostic. We look at the numbers, name the pattern, and tell you what to do next."
  },
  {
    q: "Why is the first call free? What’s the catch?",
    a: "No catch.\n\nI only work with founders where I know I can make a serious commercial difference. The 30-minute call is how we both find out if this is the right fit.\n\nIf it’s not, I’ll tell you straight away and point you in a better direction."
  }
]

export default function FaqSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section id="faq" ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-900 relative border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="gsap-fade-up text-sm md:text-lg font-mono font-semibold tracking-[0.28em] uppercase text-copper mb-4">
            CLARITY
          </p>
          <h2 className="gsap-fade-up font-display font-bold text-[clamp(36px,5vw,56px)] leading-[1.05] text-paper">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="gsap-fade-up border-t border-white/10 divide-y divide-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left flex justify-between items-start gap-6 group py-2 focus:outline-none"
                >
                  <span className={`font-display text-lg md:text-xl font-medium transition-colors ${
                    isOpen ? 'text-copper' : 'text-paper group-hover:text-copper'
                  }`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-copper font-mono text-lg transition-transform duration-300 ${
                    isOpen ? 'rotate-45 border-copper bg-copper/10' : ''
                  }`}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="font-sans text-[15px] text-text-secondary leading-relaxed whitespace-pre-line pr-8">
                    {faq.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
