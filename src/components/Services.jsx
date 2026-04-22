const SERVICES = [
  {
    title: 'Hair Services',
    desc:  'Cuts and color tailored to your hair type — from fresh trims to full transformations.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Waxing & Threading',
    desc:  'Precise waxing and threading for brows and face — smooth, clean results every time.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
        <line x1="16" y1="8" x2="2" y2="22"/>
        <line x1="17.5" y1="15" x2="9" y2="15"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-clay mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-display text-charcoal">
            Our Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {SERVICES.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-surface rounded-2xl p-8 flex flex-col gap-5 border border-border shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-m"
            >
              <div className="w-10 h-10 rounded-xl bg-clay-mist flex items-center justify-center text-clay shrink-0">
                {icon}
              </div>
              <div>
                <h3 className="font-serif text-[1.05rem] font-semibold text-charcoal mb-1.5">{title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://aspirestudio.square.site/"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-clay hover:text-clay-dark transition-colors duration-150"
        >
          View all services
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </a>

      </div>
    </section>
  )
}
