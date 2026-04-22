export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-bg min-h-screen flex flex-col justify-center pt-[68px] px-6 md:px-8"
      style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F5EBD8 100%)' }}
    >
      <div className="max-w-site mx-auto w-full py-20">

        {/* Eyebrow */}
        <div className="hero-animate flex items-center gap-3 mb-7">
          <div className="h-px w-10 bg-gold/50" />
          <span className="font-sans text-[0.62rem] font-light tracking-[0.32em] uppercase text-muted">
            Sioux Falls, South Dakota
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-animate-delay font-serif font-light text-hero text-text mb-9">
          Aspire<br />
          <em className="text-gold not-italic">Studios.</em>
        </h1>

        {/* Tagline + services */}
        <div className="hero-animate-delay-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mb-11">
          <p className="font-sans text-sm font-light text-stone tracking-wide">
            Hair · Lash Extensions · Waxing &amp; Threading
          </p>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <p className="font-sans text-sm font-light text-muted italic font-serif">
            By Trualem Johnson
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-animate-delay-2 flex flex-wrap items-center gap-4">
          <a
            href="https://aspirestudio.square.site/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brown text-bg font-sans text-sm font-medium tracking-wide transition-all duration-200 hover:bg-brown-dark hover:shadow-gold hover:-translate-y-px"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-light text-stone hover:text-text transition-colors duration-150"
          >
            View services
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-gold/30 via-border to-transparent" />

        {/* Stats strip */}
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
          {[
            ['Hair', 'Colors, cuts & transformations'],
            ['Lashes', 'Classic, hybrid & volume'],
            ['Waxing & Threading', 'Brows & face'],
          ].map(([s, d]) => (
            <div key={s} className="flex flex-col gap-0.5">
              <span className="font-sans text-xs font-medium text-text">{s}</span>
              <span className="font-sans text-xs font-light text-muted">{d}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
