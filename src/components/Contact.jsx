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
  return (
    <section id="contact" className="bg-sand py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-clay mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-display text-charcoal">
            Visit the Studio
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Info */}
          <div className="bg-surface rounded-3xl p-8 md:p-10 border border-border shadow-xs flex flex-col gap-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-clay mb-1.5">Address</p>
                <p className="font-sans text-sm text-stone leading-relaxed">
                  3500 W 51st Street, Suite #16<br />Sioux Falls, SD 57106
                </p>
              </div>
              <div>
                <p className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-clay mb-1.5">Contact</p>
                <div className="space-y-1">
                  <a href="tel:+16052151475" className="block font-sans text-sm text-stone hover:text-clay transition-colors">(605) 215-1475</a>
                  <a href="mailto:aspirestudio605@gmail.com" className="block font-sans text-sm text-stone hover:text-clay transition-colors break-all">aspirestudio605@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div>
              <p className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-clay mb-4">Hours</p>
              <div className="space-y-1.5">
                {HOURS.map(([day, time]) => (
                  <div key={day} className="flex justify-between items-baseline">
                    <span className="font-sans text-sm font-medium text-stone">{day}</span>
                    <span className={`font-sans text-sm ${time === 'Closed' ? 'text-muted' : 'text-charcoal'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-clay text-white font-sans text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-clay-dark hover:shadow-m"
            >
              Book Online
            </a>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-m border border-border min-h-[420px]">
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
