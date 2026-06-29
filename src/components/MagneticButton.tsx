'use client'
import { useRef, ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TransitionLink from './TransitionLink'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
}

export default function MagneticButton({ children, className = '', href }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const button = buttonRef.current
    const text = textRef.current
    if (!button || !text) return

    const handleMouseMove = (e: any) => {
      const rect = button.getBoundingClientRect()
      const h = rect.width / 2
      const w = rect.height / 2
      const x = e.clientX - rect.left - h
      const y = e.clientY - rect.top - w

      // Magnetic pull for the button container
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: "power2.out"
      })

      // Inner text moves slightly more for a parallax effect
      gsap.to(text, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      // Snap back into place
      gsap.to([button, text], {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)"
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const commonProps = {
    ref: buttonRef as any,
    className: `inline-block relative ${className}`
  }

  const innerContent = (
    <>
      <span ref={textRef} className="relative z-10 block pointer-events-none">{children}</span>
      {/* Background sweep effect from previous implementation */}
      <div className="absolute inset-0 bg-copper transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 pointer-events-none"></div>
    </>
  )

  if (href) {
    return (
      <TransitionLink href={href} {...commonProps}>
        {innerContent}
      </TransitionLink>
    )
  }

  return (
    <button {...commonProps}>
      {innerContent}
    </button>
  )
}
