import { useState, useEffect } from 'react'

const links = [
  ['#services', 'Services'],
  ['#stylist',  'Meet Tru'],
  ['#contact',  'Contact'],
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  const headerCls = scrolled
    ? 'bg-cream/[0.97] backdrop-blur-md shadow-s py-3'
    : 'py-5'

  const textCls    = scrolled ? 'text-ink-2 hover:text-gold' : 'text-white/80 hover:text-gold'
  const logoCls    = scrolled ? 'text-ink-2'  : 'text-white/92'
  const cityCls    = scrolled ? 'text-smoke'  : 'text-white/40'
  const barCls     = scrolled ? 'bg-ink-2'    : 'bg-white/85'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerCls}`}>
      <nav className="max-w-site mx-auto px-8 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#top" className="flex flex-col gap-0.5 shrink-0">
          <span className={`font-serif text-xl font-bold leading-none transition-colors duration-300 ${logoCls}`}>
            Aspire Studios
          </span>
          <span className={`font-sans text-[0.54rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${cityCls}`}>
            Sioux Falls, SD
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className={`font-sans text-xs font-medium tracking-wide transition-colors duration-200 ${textCls}`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="font-sans text-xs font-semibold tracking-wide text-gold hover:text-bronze transition-colors duration-200"
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
          <span className={`block w-[22px] h-px rounded-sm transition-all duration-[260ms] ${barCls} ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-px rounded-sm transition-all duration-[260ms] ${barCls} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-px rounded-sm transition-all duration-[260ms] ${barCls} ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className={`md:hidden flex flex-col px-8 pb-6 pt-2 backdrop-blur-xl shadow-l ${
          scrolled ? 'bg-cream/[0.98]' : 'bg-ink/[0.97]'
        }`}>
          {links.map(([href, label]) => (
            <li key={href} className={`border-b ${scrolled ? 'border-warm' : 'border-white/10'}`}>
              <a
                href={href}
                onClick={close}
                className={`block py-3.5 font-sans text-sm font-medium ${scrolled ? 'text-ink-2' : 'text-white/80'}`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              onClick={close}
              className="font-sans text-sm font-semibold text-gold"
            >
              Book Now
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
