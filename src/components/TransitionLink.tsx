'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import gsap from 'gsap'
import React from 'react'

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
}

export default function TransitionLink({ href, children, className, ...props }: TransitionLinkProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser handle external links
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#')) {
      return
    }

    e.preventDefault()
    
    // Don't transition if we're already on this page
    if (pathname === href) return

    const curtain = document.getElementById('transition-curtain')
    const logo = document.getElementById('transition-logo')
    
    if (curtain) {
      // Swipe up to cover screen
      gsap.to(curtain, { 
        top: '0%', 
        duration: 0.6, 
        ease: 'power4.inOut',
        onComplete: () => {
          router.push(href)
        }
      })
      
      if (logo) {
        gsap.to(logo, { opacity: 1, duration: 0.3, delay: 0.3 })
      }
    } else {
      router.push(href)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
