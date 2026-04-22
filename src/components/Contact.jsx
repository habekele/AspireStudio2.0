import { useInView } from '../hooks/useInView'

const HOURS = [
  ['Monday',    '10:00 am – 5:30 pm'],
  ['Tuesday',   '10:00 am – 5:30 pm'],
  ['Wednesday', 'Closed'],
  ['Thursday',  '10:00 am – 5:30 pm'],
  ['Friday',    '10:00 am – 3:00 pm'],
  ['Saturday',  'Closed'],
  ['Sunday',    'Closed'],
]

export default function Contact() {
  const headRef = useInView()
  const cardRef = useInView(0.08)
  const mapRef  = useInView(0.08)

  return (
    <section id="contact" className="bg-warm py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">

        <div ref={headRef} className="fade-up mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-[0.62rem] font-light tracking-[0.28em] uppercase text-muted">Find Us</span>
          </div>
          <h2 className="font-serif font-light text-display text-text">Visit the Studio</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Info card */}
          <div ref={cardRef} className="fade-up bg-surface rounded-3xl p-8 md:p-10 border border-border shadow-xs flex flex-col gap-8">

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-[0.6rem] font-medium tracking-[0.22em] uppercase text-gold mb-2">Address</p>
                <p className="font-sans text-sm font-light text-stone leading-relaxed">
                  3500 W 51st Street<br />Suite #16<br />Sioux Falls, SD 57106
                </p>
              </div>
              <div>
                <p className="font-sans text-[0.6rem] font-medium tracking-[0.22em] uppercase text-gold mb-2">Contact</p>
                <div className="space-y-1.5">
                  <a href="tel:+16052151475" className="block font-sans text-sm font-light text-stone hover:text-gold transition-colors">(605) 215-1475</a>
                  <a href="mailto:aspirestudio605@gmail.com" className="block font-sans text-sm font-light text-stone hover:text-gold transition-colors break-all">aspirestudio605@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div>
              <p className="font-sans text-[0.6rem] font-medium tracking-[0.22em] uppercase text-gold mb-4">Hours</p>
              <div className="space-y-2">
                {HOURS.map(([day, time]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-sans text-sm font-light text-stone">{day}</span>
                    <span className={`font-sans text-sm font-light ${time === 'Closed' ? 'text-muted/70' : 'text-text'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-brown text-bg font-sans text-sm font-medium tracking-wide transition-all duration-200 hover:bg-brown-dark hover:shadow-gold"
            >
              Book Online
            </a>
          </div>

          {/* Map */}
          <div ref={mapRef} className="fade-up delay-1 rounded-3xl overflow-hidden border border-border shadow-s min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878!2d-96.7717!3d43.4935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3500%20W%2051st%20St%20Suite%2016%2C%20Sioux%20Falls%2C%20SD%2057106!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aspire Studios location"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
