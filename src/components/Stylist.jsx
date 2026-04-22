export default function Stylist() {
  return (
    <section id="stylist" className="bg-bg py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-l aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={`${import.meta.env.BASE_URL}assets/aspirestudiopic.jpg`}
                alt="Trualem Johnson, Master Stylist"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-surface/95 backdrop-blur-sm rounded-2xl px-5 py-3.5 shadow-m border border-border">
              <p className="font-sans text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-clay">Master Stylist</p>
              <p className="font-serif text-base font-semibold text-charcoal mt-0.5">Trualem Johnson</p>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-sans text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-clay mb-3">
                Meet Your Stylist
              </p>
              <h2 className="font-serif text-display text-charcoal">
                Trualem Johnson
              </h2>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-[0.95rem] text-muted leading-[1.8]">
                Born in Ethiopia and raised with a deep appreciation for beauty, culture, and craft, Trualem brings her passion and artistry to every client she touches.
              </p>
              <p className="font-sans text-[0.95rem] text-muted leading-[1.8]">
                Since making Sioux Falls her home, she has built a reputation for transformative styles, flawless lash work, and an experience that always makes clients feel seen and celebrated.
              </p>
            </div>

            {/* Credentials row */}
            <div className="flex gap-6 py-5 border-y border-border">
              {[['Hair', 'Colors & Cuts'], ['Lashes', 'Extensions'], ['Waxing', '& Threading']].map(([label, sub]) => (
                <div key={label}>
                  <p className="font-sans text-xs font-semibold text-charcoal">{label}</p>
                  <p className="font-sans text-xs text-muted">{sub}</p>
                </div>
              ))}
            </div>

            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-clay text-white font-sans text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-clay-dark hover:shadow-m hover:-translate-y-px"
            >
              Book with Tru
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
