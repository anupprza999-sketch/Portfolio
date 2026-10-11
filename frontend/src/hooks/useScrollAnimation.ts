import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsap'

export function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Reveal sections on scroll with subtle staggered translation
      const sections = gsap.utils.toArray<HTMLElement>('section:not(#hero)')

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              end: 'top 40%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Hero text entrance animation
      gsap.fromTo(
        '#hero-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.1
        }
      )
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return { containerRef }
}
