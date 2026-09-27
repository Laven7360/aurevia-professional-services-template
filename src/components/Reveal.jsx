import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        element.classList.remove('reveal-pending')
        observer.disconnect()
      }
    }, { threshold: 0.08 })
    element.classList.add('reveal-pending')
    observer.observe(element)
    const onMotionChange = () => {
      if (media.matches) {
        element.classList.remove('reveal-pending')
        observer.disconnect()
      }
    }
    media.addEventListener('change', onMotionChange)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', onMotionChange)
      element.classList.remove('reveal-pending')
    }
  }, [])
  return <div ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${Math.max(0, delay)}ms` }}>{children}</div>
}
