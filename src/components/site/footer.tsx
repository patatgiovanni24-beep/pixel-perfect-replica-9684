import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden">
              <img
                src={logo}
                alt=""
                className="h-full w-full origin-top scale-[1.6] object-contain brightness-0 invert"
              />
            </div>
            <div className="font-display text-xl lowercase">alpi.in</div>
          </div>
          <p className="mt-4 text-sm text-forest-foreground/70">
            La tua base per le Alpi Carniche. Arta Terme, Friuli Venezia Giulia.
          </p>
        </div>
        <div>
          <div className="eyebrow text-cta">Indirizzo</div>
          <a
            href="https://maps.app.goo.gl/UrmPyctK41ErK63V7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm text-forest-foreground/80 transition hover:text-cta"
          >
            Via Fontana 21
            <br />
            33022 Arta Terme (UD)
            <br />
            Italia
          </a>
        </div>
        <div>
          <div className="eyebrow text-cta">Contatti</div>
          <div className="mt-3 text-sm text-forest-foreground/80">
            <a href="mailto:info@alpi.in" className="transition hover:text-cta">
              info@alpi.in
            </a>
            <br />
            <a href="tel:+393773749820" className="transition hover:text-cta">
              +39 377 374 9820
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-wider text-forest-foreground/50">
        © 2026 Hotel alpi.in
      </div>
    </footer>
  );
}
