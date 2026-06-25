'use client'
import { useRef, MouseEvent, ReactNode } from 'react'

interface FlashlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function FlashlightCard({ children, className = '' }: FlashlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group ${className}`}
    >
      {/* Flashlight background glow */}
      <div 
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[inherit]"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(184, 115, 51, 0.15), transparent 40%)`
        }}
      />
      
      {/* Flashlight glowing border */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[inherit]"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(184, 115, 51, 0.6), transparent 40%)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: `xor`,
          maskComposite: `exclude`,
          padding: `1px`,
        }}
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}
