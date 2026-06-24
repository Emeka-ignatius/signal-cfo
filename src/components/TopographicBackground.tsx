'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function TopographicBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.to(".contour-layer path", {
      x: 30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(".ellipse-layer", {
      scale: 1.015,
      transformOrigin: "center center",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(".focal-dot", {
      opacity: 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    // Add mouse-tracking parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      // Normalize mouse position between -1 and 1
      const xPos = (e.clientX / innerWidth - 0.5) * 2
      const yPos = (e.clientY / innerHeight - 0.5) * 2

      // Move contour layer slightly
      gsap.to(".contour-layer", {
        x: xPos * -20,
        y: yPos * -20,
        duration: 1,
        ease: "power2.out"
      })

      // Move ellipse layer more (creates depth)
      gsap.to(".ellipse-layer", {
        x: xPos * -40,
        y: yPos * -40,
        duration: 1,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      // Reset back to center when mouse leaves the window
      gsap.to([".contour-layer", ".ellipse-layer"], {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <g className="contour-layer" stroke="#a8703c" strokeWidth="0.6" opacity="0.7" fill="none">
          <path d="M-100,100 Q200,150 400,100 T1100,200"></path>
          <path d="M-100,200 Q250,250 500,150 T1100,300"></path>
          <path d="M-100,300 Q300,350 600,200 T1100,400"></path>
          <path d="M-100,400 Q350,450 700,250 T1100,500"></path>
        </g>
        {/* We use a wrapper group for the base transform so GSAP parallax doesn't override it */}
        <g transform="translate(700, 300)">
          <g className="ellipse-layer" stroke="#c98a4d" fill="none">
            <ellipse rx="50" ry="30" opacity="0.95"></ellipse>
            <ellipse rx="100" ry="60" opacity="0.7"></ellipse>
            <ellipse rx="150" ry="90" opacity="0.4"></ellipse>
            <ellipse rx="200" ry="120" opacity="0.15"></ellipse>
          </g>
          <circle className="focal-dot" cx="0" cy="0" r="3" fill="#d9a25c"></circle>
        </g>
      </svg>
      {/* Radial fade overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,transparent_0%,var(--color-forest-900)_80%)] pointer-events-none"></div>
    </div>
  )
}
