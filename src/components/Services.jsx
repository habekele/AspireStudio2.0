const SERVICES = [
  {
    title: 'Hair Services',
    desc:  'Cuts and color tailored to your hair type — from fresh trims to full transformations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Waxing & Threading',
    desc:  'Precise waxing and threading for brows and face — smooth, clean results every time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
        <line x1="16" y1="8" x2="2" y2="22"/>
        <line x1="17.5" y1="15" x2="9" y2="15"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-site mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="block font-sans text-[0.65rem] font-bold tracking-[0.28em] uppercase text-gold mb-2">
            What We Offer
          </span>
          <h2 className="font-serif text-display font-semibold text-ink-2">
            Our Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {SERVICES.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-card rounded-2xl px-8 py-10 flex flex-col items-center text-center shadow-s border-t-2 border-gold transition-all duration-200 hover:-translate-y-1.5 hover:shadow-m"
            >
              <div className="w-[60px] h-[60px] bg-warm rounded-full flex items-center justify-center mb-6 text-bronze shrink-0">
                {icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink-2 mb-2">{title}</h3>
              <p className="font-sans text-sm text-smoke leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://aspirestudio.square.site/"
            target="_blank"
            rel="noopener"
            className="inline-block px-9 py-[0.85rem] rounded-full font-sans text-[0.8rem] font-semibold tracking-[0.09em] uppercase text-bronze border border-bronze/80 transition-all duration-200 hover:bg-bronze hover:text-white hover:shadow-m hover:-translate-y-0.5"
          >
            View All Services
          </a>
        </div>

      </div>
    </section>
  )
}
