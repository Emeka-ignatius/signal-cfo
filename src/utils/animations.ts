import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const setupScrollAnimations = (container: HTMLElement) => {
  gsap.registerPlugin(ScrollTrigger)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    gsap.set('.gsap-fade-up', { opacity: 1, y: 0 })
    return
  }

  const elements = container.querySelectorAll('.gsap-fade-up')
  elements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )
  })
}
