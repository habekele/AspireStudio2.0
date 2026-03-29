export default function Stylist() {
  return (
    <section id="stylist" className="bg-warm py-24">
      <div className="max-w-site mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Photo */}
          <div className="rounded-3xl overflow-hidden shadow-l w-full max-w-sm mx-auto lg:max-w-none lg:h-[580px]">
            <img
              src="/assets/tru.jpeg"
              alt="Trualem Johnson, Master Stylist"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Bio */}
          <div>
            <span className="block font-sans text-[0.65rem] font-bold tracking-[0.28em] uppercase text-gold mb-2">
              Meet Your Stylist
            </span>
            <h2 className="font-serif text-display font-semibold text-ink-2 mb-1">
              Trualem Johnson
            </h2>
            <span className="block font-sans text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold mb-7">
              Master Stylist &amp; Founder
            </span>
            <p className="font-sans text-[0.95rem] text-smoke leading-[1.78] mb-4 max-w-[50ch]">
              Born in Ethiopia and raised with a deep appreciation for beauty, culture, and craft, Trualem brings her passion and artistry to every client she touches.
            </p>
            <p className="font-sans text-[0.95rem] text-smoke leading-[1.78] mb-8 max-w-[50ch]">
              Since making Sioux Falls her home, she has built a reputation for transformative styles, flawless lash work, and an experience that always makes clients feel seen and celebrated.
            </p>
            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="inline-block px-9 py-[0.85rem] rounded-full font-sans text-[0.8rem] font-semibold tracking-[0.09em] uppercase bg-bronze text-white transition-all duration-200 hover:bg-gold hover:shadow-m hover:-translate-y-0.5"
            >
              Book with Tru
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
