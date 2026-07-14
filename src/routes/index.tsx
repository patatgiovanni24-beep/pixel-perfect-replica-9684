import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroMountain from "@/assets/hero-mountain.jpg";
import zoncolan from "@/assets/zoncolan.jpg";
import hotelInterior from "@/assets/hotel-interior.jpg";
import village from "@/assets/village.jpg";
import room from "@/assets/room.jpg";
import breakfast from "@/assets/breakfast.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type TabId = "home" | "camere" | "territorio" | "extra";

const TABS: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "camere", label: "Le Camere" },
  { id: "territorio", label: "Il Territorio" },
  { id: "extra", label: "Servizi Extra & Retreat" },
];

function Index() {
  const [tab, setTab] = useState<TabId>("home");
  const formRef = useRef<HTMLDivElement>(null);

  const goTo = (t: TabId, scrollToForm = false) => {
    setTab(t);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (scrollToForm) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav tab={tab} setTab={setTab} />
      <main>
        {tab === "home" && <Home goTo={goTo} />}
        {tab === "camere" && <Camere formRef={formRef} />}
        {tab === "territorio" && <Territorio goTo={goTo} />}
        {tab === "extra" && <Extra goTo={goTo} />}
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------- NAV ---------------------------- */

function Nav({ tab, setTab }: { tab: TabId; setTab: (t: TabId) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-forest text-forest-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => setTab("home")}
          className="flex items-center gap-3 text-left"
          aria-label="Hotel Alpi-In home"
        >
          <Logo />
          <div className="leading-tight">
            <div className="font-display text-lg lowercase tracking-tight">alpi-in</div>
            <div className="eyebrow text-[10px] opacity-80">Arta Terme · Carnia</div>
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`eyebrow relative py-2 transition ${
                tab === t.id ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-cta" />
              )}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 md:hidden">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTab(t.id);
                setOpen(false);
              }}
              className={`eyebrow block w-full px-6 py-4 text-left ${
                tab === t.id ? "bg-white/5 text-cta" : ""
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path
        d="M6 24 L14 12 L18 18 L22 13 L30 24 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="10" r="1.5" fill="#C68B59" />
    </svg>
  );
}

/* ---------------------------- ICONS ---------------------------- */

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "ski":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M4 20 L20 6" />
          <path d="M6 22 L22 8" />
          <circle cx="14" cy="6" r="2" />
          <path d="M14 8 L11 14 L13 17" />
        </svg>
      );
    case "bike":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <circle cx="6" cy="17" r="4" />
          <circle cx="18" cy="17" r="4" />
          <path d="M6 17 L10 9 L14 17 M14 9 H17 M10 9 L14 9" />
        </svg>
      );
    case "trek":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M3 20 L9 10 L13 15 L16 11 L21 20 Z" />
          <circle cx="15" cy="6" r="1.5" />
        </svg>
      );
    case "bed":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M3 18 V10 H21 V18 M3 14 H21 M7 10 V7 H13 V10" />
        </svg>
      );
    case "bath":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M3 12 H21 V16 C21 18 19 19 17 19 H7 C5 19 3 18 3 16 Z M6 12 V6 A2 2 0 0 1 10 6" />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M2 9 C7 4 17 4 22 9 M5 12 C9 8 15 8 19 12 M8 15 C10 13 14 13 16 15" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M4 10 H18 V16 A4 4 0 0 1 14 20 H8 A4 4 0 0 1 4 16 Z M18 12 H21 A2 2 0 0 1 21 16 H18 M8 6 C8 4 10 4 10 6 M12 6 C12 4 14 4 14 6" />
        </svg>
      );
    case "parking":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M10 17 V7 H13 A3 3 0 0 1 13 13 H10" />
        </svg>
      );
    case "storage":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M4 10 L12 4 L20 10 V20 H4 Z M9 20 V14 H15 V20" />
        </svg>
      );
    case "meeting":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <circle cx="9" cy="9" r="3" />
          <circle cx="17" cy="10" r="2" />
          <path d="M3 20 C3 16 6 14 9 14 C12 14 15 16 15 20 M15 20 C15 17 17 15.5 19 15.5 C20.5 15.5 21 16 21 17" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M12 22 C7 16 4 12 4 9 A8 8 0 0 1 20 9 C20 12 17 16 12 22 Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    default:
      return null;
  }
}

/* ---------------------------- HOME ---------------------------- */

function Home({ goTo }: { goTo: (t: TabId, s?: boolean) => void }) {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroMountain}
          alt="Le Alpi Carniche"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="mb-6 text-white/90">
            <svg width="72" height="72" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
              <path d="M6 24 L14 12 L18 18 L22 13 L30 24 Z" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
              <circle cx="24" cy="10" r="1.5" fill="#C68B59" />
            </svg>
          </div>
          <h1 className="font-display text-6xl lowercase tracking-tight md:text-8xl">
            hotel alpi-in
          </h1>
          <p className="eyebrow mt-4 text-white/85">Arta Terme · Carnia · Friuli Venezia Giulia</p>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/95 md:text-xl">
            La montagna attiva, con lo Zoncolan alle spalle e i boschi davanti alla porta.
          </p>
          <button className="btn-cta mt-10" onClick={() => goTo("camere", true)}>
            Prenota
          </button>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-muted-foreground">Benvenuti</p>
          <h2 className="mt-4 font-display text-4xl lowercase md:text-5xl">
            la tua base per le alpi carniche
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-cta" />
          <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
            Ad Arta Terme, tra le pieghe più autentiche della Carnia, l'Hotel Alpi-In è il
            punto di partenza ideale per chi cerca la montagna vera. I boschi iniziano a
            pochi passi dall'ingresso, il Monte Zoncolan si staglia all'orizzonte e la sala
            deposito attrezzata custodisce sci e biciclette in totale sicurezza.
          </p>
          <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
            Un rifugio contemporaneo, con tariffe oneste e un'accoglienza che sa di casa.
          </p>
        </div>
      </Section>

      {/* L'HOTEL */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow text-cta">L'Hotel</p>
              <h2 className="mt-3 font-display text-4xl lowercase leading-tight md:text-5xl">
                spazi caldi,<br />sapori sinceri
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>Camere singole, doppie e triple per chi viaggia in coppia o da solo.</p>
                <p>Quadruple e dormitori fino a otto letti per famiglie, squadre e gruppi.</p>
                <p>Legno di larice, lino naturale e vedute che aprono sulle vette.</p>
                <p>Una colazione locale con pane appena sfornato, formaggi di malga e miele di montagna.</p>
                <p>Ogni dettaglio pensato per chi scende dai sentieri o dalle piste.</p>
              </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-6 gap-3 aspect-square">
              <img src={hotelInterior} alt="Interni hotel" width={1280} height={1280} loading="lazy" className="col-span-4 row-span-4 h-full w-full object-cover" />
              <img src={room} alt="Camera" width={1280} height={1280} loading="lazy" className="col-span-2 row-span-3 h-full w-full object-cover" />
              <img src={breakfast} alt="Colazione" width={1280} height={1280} loading="lazy" className="col-span-2 row-span-3 h-full w-full object-cover" />
              <img src={village} alt="Arta Terme" width={1280} height={1280} loading="lazy" className="col-span-3 row-span-2 h-full w-full object-cover" />
              <img src={zoncolan} alt="Zoncolan" width={1920} height={1080} loading="lazy" className="col-span-3 row-span-2 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* IL TERRITORIO INTRO */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-muted-foreground">Il Territorio</p>
            <h2 className="mt-4 font-display text-4xl lowercase md:text-5xl">
              un unico centro,<br />mille avventure
            </h2>
            <p className="mt-6 text-muted-foreground">
              Sport all'aria aperta, terme, cucina di montagna. Da Alpi-In raggiungi in poche
              curve tutto ciò che la Carnia ha da offrire.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Sci", icon: "ski", text: "Piste dello Zoncolan e Ravascletto a 20 minuti." },
              { name: "Bici", icon: "bike", text: "Salite mitiche e ciclabili panoramiche." },
              { name: "Trekking", icon: "trek", text: "Sentieri che partono dal bosco dell'hotel." },
            ].map((c) => (
              <div key={c.name} className="group flex flex-col items-center border border-border bg-card px-8 py-12 text-center transition hover:border-cta">
                <div className="text-forest transition group-hover:text-cta">
                  <Icon name={c.icon} className="h-12 w-12" />
                </div>
                <h3 className="eyebrow mt-6 text-forest">{c.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-outline-forest" onClick={() => goTo("territorio")}>
              Scopri la Carnia
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ---------------------------- CAMERE ---------------------------- */

const ROOMS = [
  { name: "Singola", beds: 1, price: 55, text: "Compatta, luminosa, perfetta per il viaggiatore solitario o di lavoro." },
  { name: "Doppia", beds: 2, price: 75, text: "Letto matrimoniale o due singoli, vista sui boschi." },
  { name: "Tripla", beds: 3, price: 95, text: "Spaziosa e versatile, ideale per amici in trasferta sportiva." },
  { name: "Quadrupla", beds: 4, price: 120, text: "Pensata per famiglie: comfort, ordine e tante finestre." },
  { name: "Dormitorio 7 letti", beds: 7, price: 32, text: "Per gruppi sportivi e team: letti robusti, armadietti privati." },
  { name: "Dormitorio 8 letti", beds: 8, price: 30, text: "La soluzione più conveniente per grandi gruppi ed escursioni." },
];

function Camere({ formRef }: { formRef: React.RefObject<HTMLDivElement | null> }) {
  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow text-cta">Le Camere</p>
              <h2 className="mt-3 font-display text-4xl lowercase leading-tight md:text-5xl">
                riposo su misura,<br />per ogni viaggio
              </h2>
              <p className="mt-6 text-muted-foreground">
                Dalle singole intime ai dormitori da otto letti: sei tipologie di camera per
                accogliere coppie, famiglie, squadre e viaggiatori individuali. Bagno privato
                in ogni stanza, Wi-Fi gratuito e materassi pensati per chi in montagna cammina
                davvero.
              </p>
              <button className="btn-cta mt-8" onClick={scrollToForm}>
                Richiedi informazioni
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <img src={room} alt="" width={1280} height={1280} loading="lazy" className="col-span-2 row-span-2 aspect-square h-full w-full object-cover" />
              <img src={hotelInterior} alt="" width={1280} height={1280} loading="lazy" className="aspect-square h-full w-full object-cover" />
              <img src={breakfast} alt="" width={1280} height={1280} loading="lazy" className="aspect-square h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* ROOMS GRID */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-muted-foreground">Tipologie</p>
            <h2 className="mt-4 font-display text-4xl lowercase md:text-5xl">
              sei modi di dormire in montagna
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((r) => (
              <div key={r.name} className="flex aspect-square flex-col justify-between border border-border bg-card p-7 transition hover:border-cta hover:shadow-lg">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge icon="bed" label={`${r.beds} ${r.beds === 1 ? "letto" : "letti"}`} />
                    <Badge icon="bath" label="Bagno" />
                    <Badge icon="wifi" label="Wi-Fi" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl lowercase text-forest">{r.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="eyebrow text-muted-foreground text-[10px]">A partire da</div>
                  <div className="mt-1 font-display text-2xl text-cta">€{r.price}<span className="text-sm text-muted-foreground"> / notte</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PERKS */}
      <Section>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: "coffee", label: "Colazione inclusa" },
              { icon: "parking", label: "Parcheggio gratuito" },
              { icon: "storage", label: "Sala deposito attrezzata" },
              { icon: "meeting", label: "Sala riunioni aziendali" },
            ].map((p) => (
              <div key={p.label} className="flex flex-col items-center text-center">
                <div className="text-cta"><Icon name={p.icon} className="h-9 w-9" /></div>
                <div className="eyebrow mt-4 text-forest">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <div ref={formRef}>
        <Section className="bg-forest text-forest-foreground">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <p className="eyebrow text-cta">Prenota</p>
              <h2 className="mt-3 font-display text-4xl lowercase md:text-5xl">
                scrivici, ti rispondiamo presto
              </h2>
              <p className="mt-4 text-forest-foreground/80">
                Dicci quando vorresti venire e cosa cerchi: costruiamo insieme il tuo soggiorno.
              </p>
            </div>
            <form
              className="mt-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Richiesta inviata! Ti risponderemo entro 24 ore.");
              }}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Nome" name="nome" />
                <Field label="Cognome" name="cognome" />
                <Field label="Email" name="email" type="email" />
                <Field label="Numero di telefono" name="tel" type="tel" />
              </div>
              <Field label="Messaggio / Richiesta" name="msg" textarea />
              <div className="pt-2 text-center">
                <button type="submit" className="btn-cta">Invia richiesta</button>
              </div>
            </form>
          </div>
        </Section>
      </div>
    </>
  );
}

function Badge({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-border bg-background/50 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
      <Icon name={icon} className="h-3.5 w-3.5" /> {label}
    </span>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full border-0 border-b border-forest-foreground/30 bg-transparent px-0 py-3 text-forest-foreground placeholder:text-forest-foreground/50 focus:border-cta focus:outline-none transition";
  return (
    <label className="block">
      <span className="eyebrow text-forest-foreground/70">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls + " mt-1 resize-none"} required />
      ) : (
        <input name={name} type={type} className={cls + " mt-1"} required />
      )}
    </label>
  );
}

/* ---------------------------- TERRITORIO ---------------------------- */

function Territorio({ goTo }: { goTo: (t: TabId, s?: boolean) => void }) {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img src={zoncolan} alt="Monte Zoncolan" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="eyebrow text-white/90 text-sm">Il Territorio</h1>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-wider md:text-7xl">
            LA CARNIA<br />A PORTATA DI MANO
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-light text-white/90">
            Dalla quiete dei boschi alle sfide dello Zoncolan: vivi la montagna attiva
            partendo dalla nostra base strategica.
          </p>
        </div>
      </section>

      {/* ARTA TERME */}
      <Section>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-cta">Arta Terme</p>
            <h2 className="mt-3 font-display text-4xl lowercase md:text-5xl">
              un borgo che si visita<br />a piedi
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Le terme di Arta, celebri fin dall'Ottocento, sono a cinque minuti a piedi.
                L'acqua sulfurea salsobromoiodica ti aspetta dopo una giornata sui sentieri.
              </p>
              <p>
                Nelle vie del centro trovi trattorie storiche e osterie dove si mangia con
                pochi euro cucina friulana autentica: frico, cjarsons, gubana.
              </p>
              <p>
                Parcheggia una volta all'hotel e lascia l'auto lì: tutto il paese è
                raggiungibile in una passeggiata.
              </p>
            </div>
          </div>
          <img src={village} alt="Arta Terme" width={1280} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </div>
      </Section>

      {/* ACTIVITY SPLITS */}
      <Section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <ActivityBox
            icon="ski"
            title="Sulle piste dello Zoncolan"
            text="Venti minuti d'auto e sei ai piedi degli impianti di Ravascletto-Zoncolan. Piste per ogni livello, panorami che tolgono il fiato e scuola sci convenzionata a tariffe dedicate agli ospiti dell'hotel."
            callout="Scarponi e sci caldi e asciutti nella nostra ski room, pronti per il giorno dopo."
          />
          <ActivityBox
            icon="bike"
            title="In bici sullo Zoncolan"
            text="Una delle salite più iconiche del ciclismo mondiale parte a pochi chilometri. Percorsi da gran fondo, sentieri MTB tecnici e ciclabili panoramiche per chi pedala per piacere."
            callout="Al rientro, la tua bici è al sicuro nel nostro deposito gratuito."
          />
        </div>
      </Section>

      {/* HUB GRID */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-muted-foreground">Cosa fare</p>
            <h2 className="mt-4 font-display text-4xl lowercase md:text-5xl">
              la tua base strategica<br />per un territorio unico
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "trek",
                title: "Trekking & Famiglie",
                text: "Sentieri facili che partono direttamente dai boschi dell'hotel. Passeggiate per bambini, cascate raggiungibili in mezz'ora e picnic tra i larici.",
              },
              {
                icon: "ski",
                title: "Grandi Vette & Escursioni",
                text: "Per chi cerca la vera scalata: Coglians, Monte Cimone, ferrate storiche della Grande Guerra. Guide alpine disponibili su richiesta.",
              },
              {
                icon: "coffee",
                title: "Storia & Sapori",
                text: "Malghe di alta quota, cjarsons di pasta ripiena, formaggi stagionati nel latte e leggende raccontate da chi la montagna la vive da sempre.",
              },
            ].map((c) => (
              <div key={c.title} className="border border-border bg-card p-8 transition hover:border-cta">
                <div className="text-cta"><Icon name={c.icon} className="h-10 w-10" /></div>
                <h3 className="mt-5 font-display text-xl lowercase text-forest">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="btn-cta" onClick={() => goTo("camere", true)}>
              Prenota la tua prossima avventura
            </button>
          </div>
        </div>
      </Section>

      {/* MAP */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div>
              <p className="eyebrow text-cta">Dove siamo</p>
              <h2 className="mt-3 font-display text-3xl lowercase">
                via fontana 21,<br />arta terme
              </h2>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-cta" /> 33022 Arta Terme (UD)</div>
                <div className="flex items-center gap-2"><Icon name="ski" className="h-4 w-4 text-cta" /> 20 min dallo Zoncolan</div>
                <div className="flex items-center gap-2"><Icon name="parking" className="h-4 w-4 text-cta" /> 15 min dall'autostrada A23</div>
              </div>
            </div>
            <MockMap />
          </div>
        </div>
      </Section>
    </>
  );
}

function ActivityBox({ icon, title, text, callout }: { icon: string; title: string; text: string; callout: string }) {
  return (
    <div className="flex flex-col border border-border bg-card p-8 md:p-10">
      <div className="text-cta"><Icon name={icon} className="h-12 w-12" /></div>
      <h3 className="mt-6 font-display text-2xl lowercase text-forest">{title}</h3>
      <p className="mt-4 text-muted-foreground">{text}</p>
      <div className="mt-6 border-l-2 border-cta bg-cta/5 px-5 py-4 text-sm italic text-forest">
        {callout}
      </div>
    </div>
  );
}

function MockMap() {
  return (
    <div className="relative col-span-2 aspect-[16/10] w-full overflow-hidden border border-border bg-[oklch(0.95_0.01_150)]">
      <svg viewBox="0 0 800 500" className="h-full w-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.88 0.01 150)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="500" fill="url(#grid)" />
        {/* Rivers */}
        <path d="M0 300 Q 200 260 400 300 T 800 320" fill="none" stroke="oklch(0.75 0.05 220)" strokeWidth="4" opacity="0.6" />
        {/* Mountain shapes */}
        <path d="M100 400 L200 200 L280 320 L350 180 L450 380 Z" fill="oklch(0.85 0.02 150)" opacity="0.6" />
        <path d="M500 400 L600 220 L680 340 L750 240 L800 400 Z" fill="oklch(0.85 0.02 150)" opacity="0.6" />
        {/* Roads */}
        <path d="M0 380 Q 200 350 400 380 T 800 400" fill="none" stroke="oklch(0.7 0.02 60)" strokeWidth="2" strokeDasharray="6 4" />
        {/* Pin */}
        <g transform="translate(400 260)">
          <circle r="30" fill="oklch(0.66 0.11 55 / 0.2)" />
          <circle r="15" fill="oklch(0.66 0.11 55 / 0.3)" />
          <circle r="7" fill="oklch(0.66 0.11 55)" />
          <text y="-25" textAnchor="middle" fill="oklch(0.32 0.05 155)" fontSize="14" fontFamily="Montserrat" fontWeight="600" letterSpacing="1.5">
            HOTEL ALPI-IN
          </text>
        </g>
        {/* Labels */}
        <text x="620" y="200" fill="oklch(0.45 0.02 150)" fontSize="11" fontFamily="Montserrat" letterSpacing="1.5">ZONCOLAN</text>
        <text x="180" y="180" fill="oklch(0.45 0.02 150)" fontSize="11" fontFamily="Montserrat" letterSpacing="1.5">CARNIA</text>
        <text x="20" y="420" fill="oklch(0.55 0.02 60)" fontSize="10" fontFamily="Montserrat" letterSpacing="1.5">A23 ← UDINE</text>
      </svg>
      <div className="absolute bottom-3 right-3 bg-background/90 px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
        Via Fontana 21 · Arta Terme
      </div>
    </div>
  );
}

/* ---------------------------- EXTRA ---------------------------- */

function Extra({ goTo }: { goTo: (t: TabId, s?: boolean) => void }) {
  const partners = [
    {
      name: "AL CARATEL",
      subtitle: "Per colazioni lunghe, pranzi veloci, aperitivi o per concludere la serata",
      distance: "10 minuti",
      highlights: ["Panini gourmet", "Brunch di montagna", "Vini regionali", "Signature cocktails"],
    },
    {
      name: "RISTORANTE PRIVILEGIO",
      subtitle: "La cucina carnica per le tue cene",
      distance: "20 minuti",
      highlights: ["Ricette locali autentiche", "Sala calda e accogliente", "Ottima tappa post-escursione", "Cantina friulana selezionata"],
    },
    {
      name: "RIFUGIO LAUGIANE",
      subtitle: "Il tuo punto di riferimento sullo Zoncolan",
      distance: "Sulle piste",
      highlights: ["Ristorante panoramico", "Terrazza sulle vette", "SPA alpina invernale privata", "Sole tutto il giorno"],
    },
  ];

  return (
    <>
      {/* INTRO */}
      <Section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-cta">Servizi Extra & Retreat</p>
          <h2 className="mt-4 font-display text-4xl lowercase md:text-6xl">
            un unico ecosistema<br />di ospitalità alpina
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-cta" />
          <p className="mt-8 text-lg font-light leading-relaxed text-forest-foreground/85">
            Come ospite di Hotel Alpi-In accedi a una rete di strutture selezionate del
            gruppo: ristoranti, rifugi e SPA. Sconto esclusivo del <span className="text-cta font-medium">10%</span> in
            tutti i locali partner, riservato agli ospiti dell'hotel.
          </p>
        </div>
      </Section>

      {/* PARTNERS */}
      <Section>
        <div className="mx-auto max-w-6xl space-y-8">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`grid gap-8 border border-border bg-card p-8 md:grid-cols-3 md:p-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-1">
                <div className="eyebrow text-cta">Partner {i + 1}</div>
                <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="pin" className="h-4 w-4 text-cta" /> {p.distance}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg font-light italic text-forest">{p.subtitle}</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-cta" /> {h}
                    </div>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center border border-cta/40 bg-cta/5 px-3 py-1 text-xs uppercase tracking-wider text-cta">
                  -10% per gli ospiti Alpi-In
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CORPORATE RETREAT */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <img src={hotelInterior} alt="Sala meeting" width={1280} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <div>
              <p className="eyebrow text-cta">Corporate Retreat</p>
              <h2 className="mt-3 font-display text-4xl lowercase leading-tight md:text-5xl">
                il tuo retreat aziendale<br />nel cuore della carnia
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Quindici minuti dall'uscita autostradale, sala riunioni attrezzata con
                  proiettore, lavagna e connessione fibra dedicata.
                </p>
                <p>
                  Configurazioni flessibili delle camere per accogliere team fino a 40 persone,
                  in singole, doppie o dormitori a seconda del budget.
                </p>
                <p>
                  Team building alpini coordinati con guide di montagna esperte: escursioni,
                  arrampicata sportiva, canyoning e cene in malga.
                </p>
                <p>
                  Chiusura di giornata alle terme di Arta, a cinque minuti a piedi: sauna,
                  vapore e piscine termali per rigenerarsi prima del ritorno.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest">A23 · 15 min</div>
                <div className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest">Fino a 40 pax</div>
                <div className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest">Sala meeting</div>
                <div className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest">Team building</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FUNNEL FOOTER */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl lowercase md:text-5xl">
            pronto a scendere<br />dalle piste con noi?
          </h2>
          <p className="mt-6 text-muted-foreground">
            Scrivici le tue date e cosa cerchi. Costruiamo il soggiorno intorno a te — che sia
            una fuga individuale, una vacanza in famiglia o un retreat aziendale.
          </p>
          <button className="btn-cta mt-8" onClick={() => goTo("camere", true)}>
            Prenota
          </button>
        </div>
      </Section>
    </>
  );
}

/* ---------------------------- SHARED ---------------------------- */

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-6 py-20 md:py-28 ${className}`}>{children}</section>;
}

function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div className="font-display text-xl lowercase">alpi-in</div>
          </div>
          <p className="mt-4 text-sm text-forest-foreground/70">
            La tua base per le Alpi Carniche. Arta Terme, Friuli Venezia Giulia.
          </p>
        </div>
        <div>
          <div className="eyebrow text-cta">Indirizzo</div>
          <div className="mt-3 text-sm text-forest-foreground/80">
            Via Fontana 21<br />33022 Arta Terme (UD)<br />Italia
          </div>
        </div>
        <div>
          <div className="eyebrow text-cta">Contatti</div>
          <div className="mt-3 text-sm text-forest-foreground/80">
            info@alpi-in.it<br />+39 0433 000 000
          </div>
        </div>
        <div>
          <div className="eyebrow text-cta">Segui</div>
          <div className="mt-3 text-sm text-forest-foreground/80">
            Instagram<br />Facebook
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-wider text-forest-foreground/50">
        © 2026 Hotel Alpi-In · Prototipo di design
      </div>
    </footer>
  );
}

// Ensure useEffect is imported (unused otherwise); keep bundle happy
void useEffect;
