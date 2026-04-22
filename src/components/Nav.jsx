import { useState, useEffect } from 'react'

const LINKS = [
  ['#services', 'Services'],
  ['#stylist',  'Meet Tru'],
  ['#contact',  'Contact'],
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-bg transition-all duration-300 ${
      scrolled ? 'shadow-xs border-b border-border' : ''
    }`}>
      <nav className="max-w-site mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#top" className="flex flex-col shrink-0">
          <span className="font-serif text-[1.15rem] font-semibold leading-tight text-charcoal tracking-[-0.01em]">
            Aspire Studios
          </span>
          <span className="font-sans text-[0.52rem] font-medium tracking-[0.2em] uppercase text-muted">
            Sioux Falls, SD
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="font-sans text-[0.8rem] font-medium text-stone hover:text-charcoal transition-colors duration-150">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="font-sans text-[0.78rem] font-semibold text-clay hover:text-clay-dark transition-colors duration-150"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-1 w-8 h-8 bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-px bg-charcoal rounded-full transition-all duration-200 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-charcoal rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-charcoal rounded-full transition-all duration-200 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-bg border-t border-border shadow-m">
          <ul className="max-w-site mx-auto px-6 py-2 flex flex-col">
            {LINKS.map(([href, label]) => (
              <li key={href} className="border-b border-border last:border-0">
                <a
                  href={href}
                  onClick={close}
                  className="block py-3.5 font-sans text-sm font-medium text-stone"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="py-3.5">
              <a
                href="https://aspirestudio.square.site/"
                target="_blank"
                rel="noopener"
                onClick={close}
                className="font-sans text-sm font-semibold text-clay"
              >
                Book Now →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
