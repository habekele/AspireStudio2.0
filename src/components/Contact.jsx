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
    <section id="contact" className="bg-ink py-24">
      <div className="max-w-site mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Info */}
          <div>
            <span className="block font-sans text-[0.65rem] font-bold tracking-[0.28em] uppercase text-gold mb-2">
              Find Us
            </span>
            <h2 className="font-serif text-display font-semibold text-white/90 mb-10">
              Visit the Studio
            </h2>

            <div className="flex flex-col gap-7 mb-10">

              <div>
                <span className="block font-sans text-[0.6rem] font-bold tracking-[0.24em] uppercase text-gold/90 mb-1">Address</span>
                <span className="font-sans text-[0.92rem] text-white/85 leading-relaxed">
                  3500 W 51st Street, Suite #16<br />Sioux Falls, SD 57106
                </span>
              </div>

              <div>
                <span className="block font-sans text-[0.6rem] font-bold tracking-[0.24em] uppercase text-gold/90 mb-1">Phone</span>
                <a href="tel:+16052151475" className="font-sans text-[0.92rem] text-white/85 hover:text-gold transition-colors duration-200">
                  (605) 215-1475
                </a>
              </div>

              <div>
                <span className="block font-sans text-[0.6rem] font-bold tracking-[0.24em] uppercase text-gold/90 mb-1">Email</span>
                <a href="mailto:aspirestudio605@gmail.com" className="font-sans text-[0.92rem] text-white/85 hover:text-gold transition-colors duration-200">
                  aspirestudio605@gmail.com
                </a>
              </div>

              <div>
                <span className="block font-sans text-[0.6rem] font-bold tracking-[0.24em] uppercase text-gold/90 mb-2">Hours</span>
                <table className="font-sans text-sm">
                  <tbody>
                    {HOURS.map(([day, time]) => (
                      <tr key={day}>
                        <td className="pr-6 py-[3px] font-medium text-white/80 w-28">{day}</td>
                        <td className="py-[3px] text-white/75">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="inline-block px-9 py-[0.85rem] rounded-full font-sans text-[0.8rem] font-semibold tracking-[0.09em] uppercase bg-gold text-white transition-all duration-200 hover:bg-[#d9a87c] hover:shadow-gold hover:-translate-y-0.5"
            >
              Book Online
            </a>
          </div>

          {/* Map */}
          <div className="self-stretch min-h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878!2d-96.7717!3d43.4935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3500%20W%2051st%20St%20Suite%2016%2C%20Sioux%20Falls%2C%20SD%2057106!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] border-0 rounded-2xl shadow-l"
              style={{ filter: 'grayscale(15%) contrast(1.05)' }}
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
