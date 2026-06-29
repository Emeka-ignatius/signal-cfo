'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

gsap.registerPlugin(ScrollTrigger)

export default function StatsStrip() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Base fade-up animations
    setupScrollAnimations(containerRef.current)

    // Number counting animation
    const numbers = containerRef.current.querySelectorAll('.stat-number')
    
    numbers.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target') || '0')
      const suffix = el.getAttribute('data-suffix') || ''
      
      // We animate a proxy object and update the HTML so we can safely format it with commas
      const proxy = { val: 0 }
      
      gsap.to(proxy, {
        val: target,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        onUpdate: () => {
          el.innerHTML = Math.floor(proxy.val).toLocaleString() + suffix
        }
      })
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 border-y border-white/5 relative bg-forest-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          
          <div className="gsap-fade-up md:border-r md:border-white/5 md:pr-12 text-center md:text-left">
            <div className="font-display font-light text-[56px] text-copper leading-none mb-4 stat-number" data-target="120" data-suffix="+">0+</div>
            <div className="font-sans text-[13px] font-medium tracking-[0.1em] text-text-muted uppercase">Founders advised</div>
          </div>
          
          <div className="gsap-fade-up md:border-r md:border-white/5 md:px-12 text-center md:text-left" style={{ animationDelay: '0.1s' }}>
            <div className="font-display font-light text-[56px] text-copper leading-none mb-4 stat-number" data-target="5500" data-suffix="+">0+</div>
            <div className="font-sans text-[13px] font-medium tracking-[0.1em] text-text-muted uppercase">Financial records analysed</div>
          </div>
          
          <div className="gsap-fade-up md:pl-12 text-center md:text-left" style={{ animationDelay: '0.2s' }}>
            <div className="font-display font-light text-[56px] text-copper leading-none mb-4 stat-number" data-target="25" data-suffix="">0</div>
            <div className="font-sans text-[13px] font-medium tracking-[0.1em] text-text-muted uppercase">Years across finance, operations and strategy</div>
          </div>

        </div>
      </div>
    </section>
  )
}
