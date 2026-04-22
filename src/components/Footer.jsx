export default function Footer() {
  return (
    <footer className="bg-ink px-6 md:px-8 py-12">
      <div className="max-w-site mx-auto">

        <div className="flex flex-wrap items-start justify-between gap-8 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-semibold text-white">Aspire Studios</p>
            <p className="font-sans text-xs text-white/50 mt-0.5 tracking-wide">Sioux Falls, SD</p>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-2.5">
              <p className="font-sans text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-white/35 mb-1">Studio</p>
              {[['#services','Services'],['#stylist','Meet Tru'],['#contact','Contact']].map(([href, label]) => (
                <a key={href} href={href} className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-150">{label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="font-sans text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-white/35 mb-1">Connect</p>
              <a
                href="https://www.instagram.com/_aspirestudio?igsh=MXd1cjY0c3RmMmk0Yw=="
                target="_blank"
                rel="noopener"
                className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1CJSzh9nTj/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener"
                className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                Facebook
              </a>
              <a
                href="https://aspirestudio.square.site/"
                target="_blank"
                rel="noopener"
                className="font-sans text-sm text-clay hover:text-white transition-colors duration-150 font-semibold"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/35">© 2026 Aspire Studios. All rights reserved.</p>
          <p className="font-sans text-xs text-white/25">3500 W 51st St, Suite #16 · Sioux Falls, SD</p>
        </div>

      </div>
    </footer>
  )
}
