export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-bg min-h-screen flex items-center pt-16 pb-24 px-6 md:px-8 overflow-hidden"
    >
      <div className="max-w-site mx-auto w-full">

        {/* Two-column layout on large screens */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-16">

          {/* Left — headline */}
          <div className="flex-1">
            <p className="font-sans text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-clay mb-6">
              Sioux Falls, South Dakota
            </p>
            <h1 className="font-serif text-hero text-charcoal">
              Aspire<br />
              <em className="text-clay not-italic">Studios</em>
            </h1>
          </div>

          {/* Right — details + CTA */}
          <div className="lg:pb-3 flex flex-col gap-8 lg:max-w-xs">
            <div className="space-y-2">
              <p className="font-sans text-sm font-medium text-stone leading-relaxed">
                Hair · Lash Extensions<br />Waxing &amp; Threading
              </p>
              <p className="font-sans text-sm text-muted">
                Premium services by Trualem Johnson, Sioux Falls.
              </p>
            </div>

            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-clay text-white font-sans text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-clay-dark hover:shadow-m hover:-translate-y-px"
            >
              Book an Appointment
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Thin rule */}
        <div className="mt-16 lg:mt-24 h-px bg-border" />

        {/* Bottom stats row */}
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
          {[
            ['Hair', 'Colors, cuts & transformations'],
            ['Lashes', 'Classic, hybrid & volume'],
            ['Waxing & Threading', 'Brows & face'],
          ].map(([svc, desc]) => (
            <div key={svc} className="flex flex-col gap-0.5">
              <span className="font-sans text-xs font-semibold text-charcoal">{svc}</span>
              <span className="font-sans text-xs text-muted">{desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
