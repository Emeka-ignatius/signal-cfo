'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!trackRef.current) return
    const track = trackRef.current

    // GSAP infinite horizontal scroll
    gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 50, // Increased duration to slow down the scroll
      repeat: -1,
    })
  }, { scope: containerRef })

  const text = "TWO FOUNDERS. SAME REVENUE. SAME MARGIN. ONE'S GROWING. ONE'S STUCK. \u00A0 \u2022 \u00A0 "

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-copper text-forest-900 py-6 border-y border-copper-light shadow-[0_0_40px_rgba(184,115,51,0.15)] flex items-center transform -rotate-2 scale-105 my-24">
      <div 
        ref={trackRef} 
        className="flex whitespace-nowrap font-display font-bold text-4xl md:text-6xl tracking-widest uppercase"
        style={{ width: 'fit-content' }}
      >
        <span className="px-4">{text}{text}{text}{text}</span>
        <span className="px-4">{text}{text}{text}{text}</span>
      </div>
    </div>
  )
}
