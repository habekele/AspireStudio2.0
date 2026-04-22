export default function Footer() {
  return (
    <footer className="bg-ink px-6 md:px-8 py-14">
      <div className="max-w-site mx-auto">

        <div className="flex flex-wrap justify-between gap-10 pb-10 border-b border-white/10">
          <div className="max-w-[200px]">
            <p className="font-serif font-light text-xl text-white tracking-[0.01em]">Aspire Studios</p>
            <p className="font-sans text-xs font-light text-white/45 mt-2 leading-relaxed">
              Premium salon services in Sioux Falls, South Dakota.
            </p>
          </div>

          <div className="flex gap-12 flex-wrap">
            <div className="flex flex-col gap-3">
              <p className="font-sans text-[0.58rem] font-medium tracking-[0.2em] uppercase text-white/30 mb-1">Studio</p>
              {[['#services','Services'],['#stylist','Meet Tru'],['#contact','Contact']].map(([href, label]) => (
                <a key={href} href={href} className="font-sans text-sm font-light text-white/55 hover:text-white/90 transition-colors duration-150">{label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-sans text-[0.58rem] font-medium tracking-[0.2em] uppercase text-white/30 mb-1">Connect</p>
              <a href="https://www.instagram.com/_aspirestudio?igsh=MXd1cjY0c3RmMmk0Yw==" target="_blank" rel="noopener" className="font-sans text-sm font-light text-white/55 hover:text-white/90 transition-colors duration-150">Instagram</a>
              <a href="https://www.facebook.com/share/1CJSzh9nTj/?mibextid=wwXIfr" target="_blank" rel="noopener" className="font-sans text-sm font-light text-white/55 hover:text-white/90 transition-colors duration-150">Facebook</a>
              <a href="https://aspirestudio.square.site/" target="_blank" rel="noopener" className="font-sans text-sm font-light text-gold-light hover:text-white transition-colors duration-150">Book Online</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-sans text-xs font-light text-white/30">© 2026 Aspire Studios. All rights reserved.</p>
          <p className="font-sans text-xs font-light text-white/20">3500 W 51st St, Suite #16 · Sioux Falls, SD</p>
        </div>

      </div>
    </footer>
  )
}
