export default function Hero() {
  return (
    <section id="hero" className="bg-bg min-h-screen flex flex-col justify-center pt-[68px] px-6 md:px-8">
      <div className="max-w-site mx-auto w-full py-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-blush" />
          <span className="font-sans text-[0.62rem] font-light tracking-[0.3em] uppercase text-muted">
            Sioux Falls, South Dakota
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif font-light text-hero text-text mb-10">
          Where beauty<br />
          meets <em className="text-rose italic">artistry.</em>
        </h1>

        {/* Sub row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-12">
          <p className="font-sans text-sm font-light text-muted tracking-wide">
            Hair · Lash Extensions · Waxing &amp; Threading
          </p>
          <div className="hidden sm:block h-3 w-px bg-border" />
          <p className="font-sans text-sm font-light text-muted">By Trualem Johnson</p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-5">
          <a
            href="https://aspirestudio.square.site/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-text text-bg font-sans text-sm font-medium tracking-wide transition-all duration-200 hover:bg-stone hover:-translate-y-px hover:shadow-m"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="font-sans text-sm font-light text-stone hover:text-text transition-colors duration-150 flex items-center gap-1.5"
          >
            View services
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-20 h-px bg-gradient-to-r from-blush via-border to-transparent" />
      </div>
    </section>
  )
}
