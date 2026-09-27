import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/insights', 'Insights']]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 16)
  const toggleRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setIsOpen(false)
    }
    const media = window.matchMedia('(min-width: 900px)')
    const onResize = () => { if (media.matches) setIsOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    media.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      media.removeEventListener('change', onResize)
    }
  }, [isOpen])

  return (
    <header ref={headerRef} className={`site-header${isScrolled ? ' is-scrolled' : ''}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}>
      <div className="container navbar">
        <Link className="brand" to="/" aria-label="Aurevia Advisory home" onClick={() => setIsOpen(false)}>
          <span className="monogram" aria-hidden="true">A<span>·</span></span>
          <span className="brand-wordmark">Aurevia<span>Advisory</span></span>
        </Link>
        <button ref={toggleRef} className={`menu-toggle${isOpen ? ' is-open' : ''}`} type="button"
          aria-expanded={isOpen} aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        <nav id="primary-navigation" className={`primary-navigation${isOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              onClick={() => setIsOpen(false)}>{label}</NavLink>
          ))}
          <NavLink to="/contact" className={({ isActive }) => `button button-primary${isActive ? ' is-active' : ''}`}
            onClick={() => setIsOpen(false)}>Request a Consultation <span aria-hidden="true">↗</span></NavLink>
        </nav>
      </div>
    </header>
  )
}
