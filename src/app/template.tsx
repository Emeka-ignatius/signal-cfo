'use client'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const curtain = document.getElementById('transition-curtain')
    const logo = document.getElementById('transition-logo')

    if (curtain) {
      // The curtain is currently covering the screen from the exit animation (yPercent: 0).
      // Now we slide it up to reveal the new page (yPercent: -100).
      
      if (logo) {
        gsap.to(logo, { opacity: 0, duration: 0.2 })
      }

      gsap.to(curtain, {
        top: '-100%',
        duration: 0.7,
        ease: 'power4.inOut',
        delay: 0.1,
        onComplete: () => {
          // Reset it to the bottom for the next transition
          gsap.set(curtain, { top: '100%' })
        }
      })
    }
  }, [])

  return <div>{children}</div>
}
