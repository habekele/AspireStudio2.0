export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center bg-ink px-8 py-32 overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,149,106,0.08), transparent 70%)' }}
      />

      <div className="relative flex flex-col items-center gap-8 max-w-3xl w-full">
        <p className="font-sans text-[0.65rem] font-bold tracking-[0.32em] uppercase text-gold/80">
          Sioux Falls, South Dakota
        </p>

        <h1 className="font-serif font-bold text-hero flex flex-col">
          <span className="text-white/92 tracking-[-0.01em]">Aspire</span>
          <em className="text-gold font-normal italic" style={{ fontSize: '0.85em' }}>Studios</em>
        </h1>

        <p className="font-sans text-[0.72rem] font-medium tracking-[0.26em] uppercase text-white/60">
          Hair &nbsp;·&nbsp; Lashes &nbsp;·&nbsp; Waxing &amp; Threading
        </p>

        <a
          href="https://aspirestudio.square.site/"
          target="_blank"
          rel="noopener"
          className="mt-2 inline-block px-9 py-[0.85rem] rounded-full font-sans text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white border border-white/55 transition-all duration-200 hover:bg-gold hover:border-gold hover:shadow-gold hover:-translate-y-0.5"
        >
          Book an Appointment
        </a>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16"
        style={{ background: 'linear-gradient(to bottom, rgba(196,149,106,0.5), transparent)' }}
      />
    </section>
  )
}
