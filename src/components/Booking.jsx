import { useInView } from '../hooks/useInView'

export default function Booking() {
  const headRef = useInView()
  const frameRef = useInView(0.05)

  return (
    <section id="book" className="bg-bg py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">

        <div ref={headRef} className="fade-up mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-[0.62rem] font-light tracking-[0.28em] uppercase text-muted">Book</span>
          </div>
          <h2 className="font-serif font-light text-display text-text">Book an Appointment</h2>
          <p className="font-sans text-sm font-light text-muted mt-3">
            Pick a service and time below.{' '}
            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="text-gold hover:text-gold-dark underline underline-offset-2"
            >
              Trouble loading? Open booking in a new tab →
            </a>
          </p>
        </div>

        <div ref={frameRef} className="fade-up rounded-3xl overflow-hidden border border-border shadow-s bg-surface">
          <iframe
            src="https://aspirestudio.square.site/"
            title="Book an appointment with Aspire Studio"
            className="w-full border-0"
            style={{ minHeight: '900px' }}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  )
}
