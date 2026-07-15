import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { majorServices, menu, BOOK_URL } from '../data/services'
import { useInView } from '../hooks/useInView'

function FeatureRow({ service, flip }) {
  const photoRef = useInView(0.1)
  const textRef = useInView(0.1)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Photo */}
      <div ref={photoRef} className={`fade-up relative ${flip ? 'lg:order-2' : ''}`}>
        <div className="absolute -inset-4 rounded-[36px] bg-gold-mist/60 -z-10" />
        <div className="rounded-[28px] overflow-hidden aspect-[4/5] bg-gold-mist">
          <img
            src={service.image}
            alt={service.imageAlt}
            width={service.imageWidth}
            height={service.imageHeight}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Text */}
      <div ref={textRef} className={`fade-up delay-1 flex flex-col gap-6 ${flip ? 'lg:order-1' : ''}`}>
        <div>
          <span className="font-serif font-light italic text-[2.6rem] leading-none text-gold/40 block mb-4">
            {service.number}
          </span>
          <p className="font-sans text-[0.62rem] font-medium tracking-[0.28em] uppercase text-gold mb-2">
            {service.subtitle}
          </p>
          <h2 className="font-serif font-light text-[2rem] md:text-[2.6rem] leading-tight text-text">
            {service.title}
          </h2>
        </div>

        <p className="font-sans text-sm font-light text-stone leading-[1.85]">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {service.tags.map(t => (
            <span key={t} className="font-sans text-[0.6rem] font-light text-stone border border-border rounded-full px-2.5 py-0.5">
              {t}
            </span>
          ))}
        </div>

        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener"
          className="self-start inline-flex items-center gap-2 font-sans text-sm font-light text-brown hover:text-gold transition-colors duration-150 tracking-wide group"
        >
          Book this service
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>

    </div>
  )
}

function MenuCategory({ category, items }) {
  const ref = useInView(0.1)

  return (
    <div ref={ref} className="fade-up break-inside-avoid mb-12">
      <div className="flex items-center gap-3 mb-5">
        <h3 className="font-serif font-light text-[1.35rem] text-text">{category}</h3>
        <div className="h-px flex-1 bg-gold/30" />
      </div>
      <ul className="flex flex-col">
        {items.map(item => (
          <li key={item.name}>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener"
              className="group flex items-baseline gap-3 py-2.5"
            >
              <span className="font-sans text-sm font-light text-stone group-hover:text-brown transition-colors duration-150">
                {item.name}
                {item.note && (
                  <span className="text-muted/80 text-xs font-light"> · {item.note}</span>
                )}
              </span>
              <span className="flex-1 border-b border-dotted border-border/90 translate-y-[-3px] group-hover:border-gold/50 transition-colors duration-150" />
              <span aria-hidden="true" className="font-sans text-xs text-muted/50 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-150">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesPage() {
  const heroRef = useInView()
  const menuHeadRef = useInView()
  const ctaRef = useInView()

  // Reset scroll when arriving from a scrolled position on another route.
  useEffect(() => { window.scrollTo(0, 0) }, [])

  // HashRouter serves every route from the same index.html, so swap the
  // document title and meta description here and restore them on leave.
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    const prevTitle = document.title
    const prevDesc = meta?.getAttribute('content')
    document.title = 'Services | Aspire Studio | Sioux Falls, SD'
    meta?.setAttribute('content', 'Explore the full Aspire Studio service menu — hair color and cuts, classic to volume lash extensions, and waxing & threading by Trualem Johnson in Sioux Falls, SD.')
    return () => {
      document.title = prevTitle
      if (prevDesc) meta?.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="bg-bg min-h-screen pt-[68px] outline-none">

        {/* Hero */}
        <section className="py-16 md:py-24 text-center px-6 border-b border-border">
          <div ref={heroRef} className="fade-up max-w-site mx-auto">
            <p className="font-sans text-[0.65rem] font-medium tracking-[0.3em] uppercase text-gold mb-4">
              Service Menu
            </p>
            <h1 className="font-serif text-display font-light text-text mb-4">
              Our Services
            </h1>
            <p className="font-sans text-sm font-light text-muted max-w-md mx-auto leading-relaxed">
              Hair, lashes, and brows — every service performed personally by Trualem Johnson. Explore what each one includes, then book in seconds.
            </p>
          </div>
        </section>

        {/* Signature services */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-site mx-auto flex flex-col gap-24 md:gap-32">
            {majorServices.map((service, i) => (
              <FeatureRow key={service.id} service={service} flip={i % 2 === 1} />
            ))}
          </div>
        </section>

        {/* Full menu */}
        <section className="bg-warm py-20 md:py-24 px-6 md:px-8">
          <div className="max-w-site mx-auto">
            <div ref={menuHeadRef} className="fade-up mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/50" />
                <span className="font-sans text-[0.62rem] font-light tracking-[0.28em] uppercase text-muted">The Full Menu</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h2 className="font-serif font-light text-display text-text">Everything We Offer</h2>
                <p className="font-sans text-xs font-light text-muted max-w-[240px] leading-relaxed pb-1">
                  Tap any service to book — current pricing is always on our booking site.
                </p>
              </div>
            </div>

            <div className="md:columns-2 md:gap-x-16">
              {menu.map(group => (
                <MenuCategory key={group.category} category={group.category} items={group.items} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 px-6 text-center">
          <div ref={ctaRef} className="fade-up max-w-site mx-auto flex flex-col items-center gap-6">
            <div className="h-px w-8 bg-gold/50" />
            <h2 className="font-serif font-light text-display text-text">Ready when you are</h2>
            <p className="font-sans text-sm font-light text-muted max-w-sm leading-relaxed">
              Appointments are booked online through Square — pick a time that works and Tru will take care of the rest.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brown text-bg font-sans text-sm font-medium tracking-wide transition-all duration-200 hover:bg-brown-dark hover:shadow-gold hover:-translate-y-px"
            >
              Book Now
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
