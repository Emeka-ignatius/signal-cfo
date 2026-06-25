'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06, // Lower is slower/smoother
      wheelMultiplier: 1,
    })

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Add Lenis's requestAnimationFrame to GSAP's ticker
    function raf(time: number) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
