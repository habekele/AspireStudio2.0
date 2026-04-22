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
  return (
    <section id="services" className="bg-linen py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-blush" />
          <span className="font-sans text-[0.62rem] font-light tracking-[0.28em] uppercase text-muted">What We Offer</span>
        </div>
        <h2 className="font-serif font-light text-display text-text mb-12">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SERVICES.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="group bg-surface rounded-2xl p-7 border border-border flex flex-col gap-5 transition-all duration-250 hover:-translate-y-1 hover:shadow-m hover:border-blush"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-mist flex items-center justify-center text-rose shrink-0">
                {icon}
              </div>
              <div>
                <h3 className="font-serif font-medium text-[1.05rem] text-text mb-2 tracking-[-0.01em]">{title}</h3>
                <p className="font-sans text-sm font-light text-muted leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <div className="h-px w-8 bg-blush" />
          <a
            href="https://aspirestudio.square.site/"
            target="_blank"
            rel="noopener"
            className="font-sans text-sm font-light text-stone hover:text-rose transition-colors duration-150 tracking-wide"
          >
            View all services
          </a>
        </div>

      </div>
    </section>
  )
}
