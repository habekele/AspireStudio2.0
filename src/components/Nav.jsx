import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const LINKS = [
  ['#stylist',  'Meet Tru'],
  ['#contact',  'Contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const onClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onClick)
    }
  }, [open])

  // HashRouter owns the URL hash, so plain `#section` anchors don't scroll.
  // Scroll programmatically instead.
  const scrollTo = (href) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goTo = (e, href) => {
    e.preventDefault()
    setOpen(false)
    // Sections only exist on the home route; navigate there first if needed.
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(href), 50)
    } else {
      scrollTo(href)
    }
  }

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 bg-bg/96 backdrop-blur-sm transition-all duration-300 ${
      scrolled ? 'border-b border-border shadow-xs' : ''
    }`}>
      <nav className="max-w-site mx-auto px-6 md:px-8 h-[68px] flex items-center justify-between">

        <a href="#top" onClick={(e) => goTo(e, '#top')} className="flex flex-col">
          <span className="font-serif text-[1.2rem] font-medium tracking-[0.01em] text-text leading-none">
            Aspire Studio
          </span>
          <span className="font-sans text-[0.5rem] font-light tracking-[0.25em] uppercase text-muted mt-[3px]">
            Sioux Falls, SD
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          <li>
            <Link
              to="/services"
              className="font-sans text-[0.8rem] font-light text-stone hover:text-text transition-colors duration-150 tracking-wide"
            >
              Services
            </Link>
          </li>
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={(e) => goTo(e, href)} className="font-sans text-[0.8rem] font-light text-stone hover:text-text transition-colors duration-150 tracking-wide">
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/picks"
              className="font-sans text-[0.8rem] font-light text-stone hover:text-text transition-colors duration-150 tracking-wide"
            >
              Tru's Picks
            </Link>
          </li>
          <li>
            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="font-sans text-[0.78rem] font-medium text-gold hover:text-gold-dark transition-colors duration-150"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] bg-transparent border-0 cursor-pointer"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`block h-px bg-text transition-all duration-200 ${open ? 'w-5 translate-y-[6px] rotate-45' : 'w-5'}`} />
          <span className={`block h-px bg-text transition-all duration-200 ${open ? 'opacity-0 w-5' : 'w-4'}`} />
          <span className={`block h-px bg-text transition-all duration-200 ${open ? 'w-5 -translate-y-[6px] -rotate-45' : 'w-5'}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-border shadow-s">
          <ul className="max-w-site mx-auto px-6 py-1 flex flex-col">
            <li className="border-b border-border/60">
              <Link to="/services" onClick={() => setOpen(false)} className="block py-3.5 font-sans text-sm font-light text-stone">
                Services
              </Link>
            </li>
            {LINKS.map(([href, label]) => (
              <li key={href} className="border-b border-border/60 last:border-0">
                <a href={href} onClick={(e) => goTo(e, href)} className="block py-3.5 font-sans text-sm font-light text-stone">
                  {label}
                </a>
              </li>
            ))}
            <li className="border-b border-border/60">
              <Link to="/picks" onClick={() => setOpen(false)} className="block py-3.5 font-sans text-sm font-light text-stone">
                Tru's Picks
              </Link>
            </li>
            <li className="py-3.5">
              <a href="https://aspirestudio.square.site/" target="_blank" rel="noopener" onClick={() => setOpen(false)} className="font-sans text-sm font-medium text-gold">
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
