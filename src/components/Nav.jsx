import { useState, useEffect } from 'react'

const LINKS = [
  ['#services', 'Services'],
  ['#stylist',  'Meet Tru'],
  ['#contact',  'Contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-bg/96 backdrop-blur-sm transition-all duration-300 ${
      scrolled ? 'border-b border-border shadow-xs' : ''
    }`}>
      <nav className="max-w-site mx-auto px-6 md:px-8 h-[68px] flex items-center justify-between">

        <a href="#top" className="flex flex-col">
          <span className="font-serif text-[1.2rem] font-medium tracking-[0.01em] text-text leading-none">
            Aspire Studios
          </span>
          <span className="font-sans text-[0.5rem] font-light tracking-[0.25em] uppercase text-muted mt-[3px]">
            Sioux Falls, SD
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="font-sans text-[0.8rem] font-light text-stone hover:text-text transition-colors duration-150 tracking-wide">
                {label}
              </a>
            </li>
          ))}
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
        >
          <span className={`block h-px bg-text transition-all duration-200 ${open ? 'w-5 translate-y-[6px] rotate-45' : 'w-5'}`} />
          <span className={`block h-px bg-text transition-all duration-200 ${open ? 'opacity-0 w-5' : 'w-4'}`} />
          <span className={`block h-px bg-text transition-all duration-200 ${open ? 'w-5 -translate-y-[6px] -rotate-45' : 'w-5'}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-border shadow-s">
          <ul className="max-w-site mx-auto px-6 py-1 flex flex-col">
            {LINKS.map(([href, label]) => (
              <li key={href} className="border-b border-border/60 last:border-0">
                <a href={href} onClick={() => setOpen(false)} className="block py-3.5 font-sans text-sm font-light text-stone">
                  {label}
                </a>
              </li>
            ))}
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
