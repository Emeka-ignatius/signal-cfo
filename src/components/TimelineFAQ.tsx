'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { setupScrollAnimations } from '@/utils/animations'

const faqs = [
  { q: "What actually happens on the free call?", a: "We diagnose the core constraint... Bring the issue you keep circling. We'll look at what's actually driving it, and decide together whether the Critical Mirror is the right next step." },
  { q: "What's the difference between the free call and the Critical Mirror?", a: "The free call is 30 minutes to assess fit. The Mirror is a deep diagnostic resulting in the five moves." },
  { q: "What's an archetype, and why does it matter?", a: "An archetype is a behavioural pattern most likely influencing how decisions are being made inside the business." },
  { q: "How do you work out my archetype?", a: "Through the Critical Mirror, we map your business model, financial performance, and commercial decisions to find where performance is leaking and where the numbers stop matching the story." },
  { q: "How long until I see the five moves?", a: "Within 24 hours of the Critical Mirror session." },
  { q: "What's your background? Are you a psychologist or behavioural specialist?", a: "I am a financial and behavioural diagnostician for founder-led businesses, focusing on the intersection of financials and decision-making." },
  { q: "What if I don't agree with the diagnosis, or it doesn't land?", a: "The diagnostic is based on objective data and observed patterns. It's meant to provide a new perspective; disagreement often highlights the core tension we need to explore." },
  { q: "Is this therapy, coaching, or a strategy session?", a: "It is none of those. It is a precise financial and behavioural diagnostic designed to find the specific moves your business needs to make." },
  { q: "Why is the first call free? What's the catch?", a: "It's to ensure the Critical Mirror is the right step. Not every business needs one, and this call is how we find out. No pitch." },
  { q: "Do I need to prepare anything for the Mirror?", a: "Just the issue you keep circling and an openness to look underneath your numbers." },
  { q: "What happens after the Mirror? Am I locked into a Sprint?", a: "Some founders leave the Mirror with enough clarity to act themselves. If you need implementation discipline, we offer the Sprint. There is no lock-in." }
]

export default function TimelineFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    setupScrollAnimations(containerRef.current)

    // Scroll-driven timeline line
    gsap.to('.timeline-progress', {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-progress',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1,
        onUpdate: (self) => {
          // Highlight nodes based on progress
          const nodes = gsap.utils.toArray('.timeline-node') as HTMLElement[]
          const progress = self.progress
          nodes.forEach((node, i) => {
            const threshold = i / (nodes.length - 1)
            if (progress >= threshold - 0.1) {
              node.style.opacity = '1'
              node.querySelector('div')!.style.backgroundColor = '#B87333'
            } else {
              node.style.opacity = '0.5'
              node.querySelector('div')!.style.backgroundColor = '#0d2a1c'
            }
          })
        }
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      {/* Target Audience */}
      <section className="py-24 px-6 md:px-12 bg-forest-800">
        <div className="max-w-[680px] mx-auto">
          <p className="gsap-fade-up text-copper uppercase font-medium text-[11px] tracking-[3px] mb-6">WHO THIS IS FOR</p>
          <h2 className="gsap-fade-up font-display font-bold text-4xl md:text-5xl text-paper mb-6">Founder-led businesses<br/>between £1m and £20m.</h2>
          <p className="gsap-fade-up text-[17px] text-paper-muted mb-6">Built for founders who've reached the point where putting in more effort isn't producing better results.</p>
          <p className="gsap-fade-up text-[17px] text-paper-muted mb-6">You've probably already got accountants, advisers, marketers, dashboards, and management reports. You still can't clearly see which decision will change the business fastest.</p>
          <p className="gsap-fade-up font-serif italic text-xl text-paper mt-8">That's the gap the Critical Mirror closes.</p>
        </div>
      </section>

      {/* The Sprint / Timeline */}
      <section className="py-32 px-6 md:px-12 bg-forest-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="gsap-fade-up text-copper uppercase font-medium text-[11px] tracking-[3px] mb-6">AFTER THE MIRROR</p>
            <h2 className="gsap-fade-up font-display font-bold text-4xl md:text-5xl text-paper mb-6">The Sprint</h2>
            <p className="gsap-fade-up text-[16px] text-paper-muted mb-6">The Mirror identifies the real constraint.<br/>The Sprint helps fix it.</p>
            <p className="gsap-fade-up text-[16px] text-paper-muted mb-6">Every week: what moved, what stalled, what leaked, and which decision matters next. Faster pricing decisions. Cleaner client decisions. Better hiring decisions. Less drift. Less avoidance.</p>
            <p className="gsap-fade-up text-[14px] font-serif italic text-paper-muted mt-8">Some founders leave the Mirror with enough clarity to act themselves. We'll determine which applies through the Mirror.</p>
          </div>
          <div className="mt-6 relative">
            <div className="absolute left-0 top-1.5 bottom-0 w-[2px] bg-white/10"></div>
            <div className="timeline-progress absolute left-0 top-1.5 bottom-0 w-[2px] bg-copper origin-top scale-y-0"></div>
            
            <div className="pl-8">
              {['Weekly numbers review', 'Decision pattern tracking', 'Commercial drag identification', 'Implementation discipline'].map((node, i) => (
                <div key={i} className="timeline-node relative pb-12 text-[16px] text-paper opacity-50 transition-opacity duration-300">
                  <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 bg-forest-900 border-2 border-copper rounded-full z-10"></div>
                  {node}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-6 md:px-12 bg-forest-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="gsap-fade-up font-display font-bold text-4xl text-paper mb-12">FAQ</h2>
          <div className="gsap-fade-up border-t border-glass-border">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-glass-border">
                <button 
                  className={`w-full text-left py-6 flex justify-between items-center text-[15px] font-medium transition-colors ${openIndex === i ? 'text-copper pl-4 border-l-2 border-copper' : 'text-paper'}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {faq.q}
                  <span className={`text-copper text-xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-6 pl-4' : 'max-h-0'}`}>
                  <p className="text-paper-muted text-[15px]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
