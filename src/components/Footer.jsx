export default function Footer() {
  return (
    <footer className="bg-footer border-t border-gold/10 py-12">
      <div className="max-w-site mx-auto px-8">

        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-serif text-xl font-bold text-white/88">Aspire Studios</span>
            <span className="font-sans text-[0.54rem] font-semibold tracking-[0.22em] uppercase text-white/55">
              Sioux Falls, SD &nbsp;·&nbsp; (605) 215-1475
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/_aspirestudio?igsh=MXd1cjY0c3RmMmk0Yw=="
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="text-white/55 hover:text-gold transition-colors duration-200"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1CJSzh9nTj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="text-white/55 hover:text-gold transition-colors duration-200"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center font-sans text-[0.7rem] text-white/45 tracking-wide">
          © 2026 Aspire Studios. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
