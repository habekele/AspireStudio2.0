import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    number: '01',
    title: 'Hair Services',
    subtitle: 'Colors & Cuts',
    desc: 'Cuts and color tailored to your hair type — from fresh trims to full colour transformations.',
    tags: ['Haircuts', 'Colour', 'Highlights', 'Treatments'],
  },
  {
    number: '02',
    title: 'Lash Extensions',
    subtitle: 'Volume & Precision',
    desc: 'Classic, hybrid, and volume sets applied with precision for a flawless, long-lasting look.',
    tags: ['Classic', 'Hybrid', 'Volume', 'Mega Volume'],
  },
  {
    number: '03',
    title: 'Waxing & Threading',
    subtitle: 'Brows & Face',
    desc: 'Precise waxing and threading for brows and face — clean, smooth results every time.',
    tags: ['Brow Wax', 'Upper Lip', 'Threading', 'Brow Shape'],
  },
]

function ServiceRow({ number, title, subtitle, desc, tags, rowRef, delay }) {
  return (
    <div
      ref={rowRef}
      className={`fade-up ${delay} group relative`}
    >
      <div className="border-t border-border/70 py-8 md:py-10 grid grid-cols-[48px_1fr] md:grid-cols-[72px_1fr_1.1fr_32px] gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-0 items-start md:items-center transition-all duration-300 rounded-xl hover:bg-gold-mist/50 hover:px-5 hover:-mx-5 hover:py-10">

        {/* Number */}
        <span className="font-serif font-light italic text-[2rem] md:text-[2.6rem] leading-none text-gold/40 group-hover:text-gold transition-colors duration-300 pt-1">
          {number}
        </span>

        {/* Title block */}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-serif font-light text-[1.5rem] md:text-[2rem] leading-none text-text group-hover:text-brown transition-colors duration-200">
            {title}
          </h3>
          <p className="font-sans text-[0.62rem] font-medium tracking-[0.2em] uppercase text-muted">
            {subtitle}
          </p>
          {/* Tags — mobile only */}
          <div className="flex flex-wrap gap-1.5 mt-1 md:hidden">
            {tags.map(t => (
              <span key={t} className="font-sans text-[0.6rem] font-light text-stone border border-border rounded-full px-2.5 py-0.5">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description + tags — desktop */}
        <div className="hidden md:flex flex-col gap-3">
          <p className="font-sans text-sm font-light text-muted leading-relaxed">{desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map(t => (
              <span key={t} className="font-sans text-[0.6rem] font-light text-stone border border-border rounded-full px-2.5 py-0.5 group-hover:border-gold/50 group-hover:text-brown transition-colors duration-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow — desktop */}
        <a
          href="https://aspirestudio.square.site/"
          target="_blank"
          rel="noopener"
          aria-label={`Book ${title}`}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full text-muted/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </a>

      </div>
    </div>
  )
}

export default function Services() {
  const headRef = useInView()
  const row1Ref = useInView(0.1)
  const row2Ref = useInView(0.1)
  const row3Ref = useInView(0.1)
  const ctaRef  = useInView()

  const rowRefs = [row1Ref, row2Ref, row3Ref]
  const delays  = ['', 'delay-1', 'delay-2']

  return (
    <section id="services" className="bg-warm py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div ref={headRef} className="fade-up flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="font-sans text-[0.62rem] font-light tracking-[0.28em] uppercase text-muted">What We Offer</span>
            </div>
            <h2 className="font-serif font-light text-display text-text">Our Services</h2>
          </div>
          <p className="font-sans text-xs font-light text-muted max-w-[220px] leading-relaxed pb-1 hidden sm:block">
            Every service performed by Trualem Johnson, Sioux Falls.
          </p>
        </div>

        {/* Service rows */}
        <div className="mb-6">
          {SERVICES.map((svc, i) => (
            <ServiceRow
              key={svc.number}
              {...svc}
              rowRef={rowRefs[i]}
              delay={delays[i]}
            />
          ))}
          {/* Closing rule */}
          <div className="border-t border-border/70" />
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="fade-up flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gold/40" />
            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="font-sans text-sm font-light text-stone hover:text-gold transition-colors duration-150 tracking-wide"
            >
              View full menu &amp; pricing
            </a>
          </div>
          <a
            href="https://aspirestudio.square.site/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brown text-bg font-sans text-sm font-medium tracking-wide transition-all duration-200 hover:bg-brown-dark hover:shadow-gold hover:-translate-y-px"
          >
            Book Now
          </a>
        </div>

      </div>
    </section>
  )
}
