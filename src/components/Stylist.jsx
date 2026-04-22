export default function Stylist() {
  return (
    <section id="stylist" className="bg-bg py-24 px-6 md:px-8">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Photo */}
          <div className="relative">
            {/* Soft blush background shape */}
            <div className="absolute -inset-4 rounded-[36px] bg-petal/50 -z-10" />
            <div className="rounded-[28px] overflow-hidden aspect-[4/5]">
              <img
                src={`${import.meta.env.BASE_URL}assets/aspirestudiopic.jpg`}
                alt="Trualem Johnson, Master Stylist"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-7">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-blush" />
                <span className="font-sans text-[0.62rem] font-light tracking-[0.28em] uppercase text-muted">Meet Your Stylist</span>
              </div>
              <h2 className="font-serif font-light text-display text-text">Trualem Johnson</h2>
              <p className="font-sans text-xs font-light tracking-[0.18em] uppercase text-rose mt-2">Master Stylist &amp; Founder</p>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-sm font-light text-stone leading-[1.85]">
                Born in Ethiopia and raised with a deep appreciation for beauty, culture, and craft, Trualem brings her passion and artistry to every client she touches.
              </p>
              <p className="font-sans text-sm font-light text-stone leading-[1.85]">
                Since making Sioux Falls her home, she has built a reputation for transformative styles, flawless lash work, and an experience that always makes clients feel seen and celebrated.
              </p>
            </div>

            <div className="flex gap-8 py-6 border-y border-border">
              {[['Hair', 'Colors & Cuts'], ['Lashes', 'Extensions'], ['Waxing', '& Threading']].map(([s, d]) => (
                <div key={s}>
                  <p className="font-serif font-medium text-sm text-text">{s}</p>
                  <p className="font-sans text-xs font-light text-muted mt-0.5">{d}</p>
                </div>
              ))}
            </div>

            <a
              href="https://aspirestudio.square.site/"
              target="_blank"
              rel="noopener"
              className="self-start inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-text text-bg font-sans text-sm font-medium tracking-wide transition-all duration-200 hover:bg-stone hover:-translate-y-px hover:shadow-m"
            >
              Book with Tru
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
