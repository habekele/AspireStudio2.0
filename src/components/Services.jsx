import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    title: 'Hair Services',
    desc:  'Cuts and color tailored to your hair type — from fresh trims to full transformations.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Lash Extensions',
    desc:  'Classic, hybrid, and volume sets applied with precision for a flawless, lasting look.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Waxing & Threading',
    desc:  'Precise waxing and threading for brows and face — smooth, clean results every time.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
        <line x1="16" y1="8" x2="2" y2="22"/>
        <line x1="17.5" y1="15" x2="9" y2="15"/>
      </svg>
    ),
  },
]

export default function Services() {
  const headRef  = useInView()
  const card1Ref = useInView()
  const card2Ref = useInView()
  const card3Ref = useInView()
  const ctaRef   = useInView()

  const cardRefs  = [card1Ref, card2Ref, card3Ref]
  const delays    = ['', 'delay-1', 'delay-2']

  return (
    <section id="services" className="bg-warm py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">

        <div ref={headRef} className="fade-up mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-[0.62rem] font-light tracking-[0.28em] uppercase text-muted">What We Offer</span>
          </div>
          <h2 className="font-serif font-light text-display text-text">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {SERVICES.map(({ title, desc, icon }, i) => (
            <div
              key={title}
              ref={cardRefs[i]}
              className={`fade-up ${delays[i]} bg-surface rounded-2xl p-7 border-t-2 border-gold flex flex-col gap-5 shadow-xs transition-all duration-250 hover:-translate-y-1.5 hover:shadow-gold hover:border-gold-dark`}
            >
              <div className="w-9 h-9 rounded-xl bg-gold-mist flex items-center justify-center text-gold shrink-0">
                {icon}
              </div>
              <div>
                <h3 className="font-serif font-medium text-[1.05rem] text-text mb-2">{title}</h3>
                <p className="font-sans text-sm font-light text-muted leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="fade-up flex items-center gap-3">
          <div className="h-px w-8 bg-gold/40" />
          <a
            href="https://aspirestudio.square.site/"
            target="_blank"
            rel="noopener"
            className="font-sans text-sm font-light text-stone hover:text-gold transition-colors duration-150 tracking-wide"
          >
            View all services
          </a>
        </div>

      </div>
    </section>
  )
}
