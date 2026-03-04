import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed')
          observer.unobserve(element)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
