import { createFileRoute, Link } from "@tanstack/react-router";
import zoncolan from "@/assets/zoncolan.jpg";
import village from "@/assets/village.jpg";
import activitySki from "@/assets/activity-ski.jpg";
import activityBike from "@/assets/activity-bike.jpg";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_URL } from "@/lib/hotel-schema";

export const Route = createFileRoute("/it/territorio")({
  head: () => ({
    meta: [
      { title: "Il Territorio — Hotel alpi.in" },
      {
        name: "description",
        content:
          "Scopri la Carnia da Arta Terme: piste dello Zoncolan, sentieri di trekking, percorsi in bici e le Terme di Arta a due passi dall'Hotel alpi.in.",
      },
      { property: "og:title", content: "Il Territorio — Hotel alpi.in" },
      {
        property: "og:description",
        content:
          "Dalla quiete dei boschi alle sfide dello Zoncolan: vivi la montagna attiva partendo dalla nostra base strategica.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/it/territorio` }],
  }),
  component: Territorio,
});

const TERRITORIO_FAQS = [
  {
    question:
      "Quanto dista l'hotel dalle Terme di Arta e quali servizi offre la struttura termale?",
    answer: (
      <p>
        L'hotel dista solo 2 minuti in auto e 10 minuti a piedi dallo stabilimento delle Terme di
        Arta, famoso per le sue acque solfato-calcio-magnesiache. È la destinazione perfetta per una
        giornata di relax tra piscina coperta, idromassaggio, sauna e trattamenti benessere. Chiedi
        in reception per informazioni su orari e convenzioni.
      </p>
    ),
  },
  {
    question:
      "Come si raggiunge l'hotel? Avete indicazioni per chi viaggia in auto o con i mezzi pubblici?",
    answer: (
      <p>
        Siamo facilmente raggiungibili in auto tramite Autostrada A23 uscita Tolmezzo. Per chi
        viaggia in treno, la stazione ferroviaria più vicina è quella di Stazione Carnia, collegata
        all'hotel tramite autobus di linea o servizio taxi.
      </p>
    ),
  },
  {
    question: "Avete un deposito sicuro per attrezzatura sportiva?",
    answer: (
      <p>
        Sì, mettiamo a disposizione dei nostri ospiti un deposito sicuro e coperto per sci e
        scarponi durante l'inverno, e un bike storage protetto per biciclette e e-bike durante la
        bella stagione.
      </p>
    ),
  },
  {
    question:
      "Quali sono i principali percorsi di trekking, piste da sci o itinerari ciclabili nei dintorni?",
    answer: (
      <div className="space-y-3">
        <p>
          Arta Terme è il punto di partenza ideale per esplorare la natura della Carnia, combinando
          sport ed energia con il relax delle nostre terme:
        </p>
        <p>
          <span className="font-medium text-forest">In bicicletta:</span> dai grandi miti del
          ciclismo su strada come la leggendaria scalata del Monte Zoncolan e gli anelli panoramici
          della Val Pesarina, fino ai percorsi rilassanti in e-bike lungo la Ciclovia del
          Tagliamento.
        </p>
        <p>
          <span className="font-medium text-forest">Trekking ed escursioni:</span> un'ampia rete di
          sentieri per tutti i livelli, dalle passeggiate per famiglie tra le malghe di Ravascletto
          fino ai trekking sulle creste dello Zoncolan e ai piedi delle Dolomiti Pesarine.
        </p>
        <p>
          <span className="font-medium text-forest">Sci e sport invernali:</span> a soli 15 minuti
          di auto si trova il polo sciistico Ravascletto-Zoncolan con oltre 28 km di piste da
          discesa, affiancato dai suggestivi anelli per lo sci di fondo della Val Pesarina.
        </p>
        <p>
          Chiedi in reception per mappe dettagliate, noleggio e-bike o suggerimenti personalizzati
          per la tua giornata outdoor!
        </p>
      </div>
    ),
  },
  {
    question: "Quanto distano i principali punti di interesse e i borghi della zona?",
    answer: (
      <div className="space-y-3">
        <p>Dall'hotel puoi raggiungere in breve tempo:</p>
        <ul className="space-y-1.5">
          {[
            { name: "Terme di Arta", time: "2 minuti" },
            { name: "Impianti di risalita / Piste da sci Zoncolan", time: "20 minuti" },
            { name: "Tolmezzo", time: "10 minuti" },
            { name: "Lago di Cavazzo", time: "15 minuti" },
          ].map((d) => (
            <li
              key={d.name}
              className="flex items-center justify-between gap-4 border-b border-border/60 pb-1.5"
            >
              <span>{d.name}</span>
              <span className="whitespace-nowrap font-medium text-forest">{d.time}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

const ACTIVITIES = [
  {
    name: "Piste da sci",
    title: "Sulle piste dello Zoncolan",
    image: activitySki,
    text: "Venti minuti d'auto e sei ai piedi degli impianti dello Zoncolan. Piste per ogni livello, panorami che tolgono il fiato e scuola sci convenzionata a tariffe dedicate agli ospiti dell'hotel. Scarponi e sci caldi e asciutti nella nostra ski room, pronti per il giorno dopo.",
  },
  {
    name: "In bici",
    title: "In bici sullo Zoncolan",
    image: activityBike,
    text: "Una delle salite più iconiche del ciclismo mondiale parte a pochi chilometri. Percorsi da gran fondo, sentieri MTB tecnici e ciclabili panoramiche per chi pedala per piacere. Al rientro, la tua bici è al sicuro nel nostro deposito gratuito.",
  },
];

function Territorio() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={zoncolan}
          alt="Monte Zoncolan"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="eyebrow text-white/90 text-sm">Il Territorio</h1>
          <h2 className="mt-4 font-display text-5xl tracking-wider md:text-7xl">
            La Carnia
            <br />a portata di mano
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-light text-white/90">
            Dalla quiete dei boschi alle sfide dello Zoncolan: vivi la montagna attiva partendo
            dalla nostra base strategica.
          </p>
        </div>
      </section>

      {/* ARTA TERME */}
      <Section>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-cta">Arta Terme</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Un borgo che si visita
              <br />a piedi
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Le terme di Arta, celebri fin dall'Ottocento, sono a cinque minuti a piedi. L'acqua
                sulfurea salsobromoiodica ti aspetta dopo una giornata sui sentieri.
              </p>
              <p>
                Nelle vie del centro trovi trattorie storiche e osterie dove si mangia con pochi
                euro cucina friulana autentica: frico, cjarsons, gubana.
              </p>
              <p>
                Parcheggia una volta all'hotel e lascia l'auto lì: tutto il paese è raggiungibile in
                una passeggiata.
              </p>
            </div>
          </div>
          <img
            src={village}
            alt="Vicolo del borgo di Arta Terme"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </Section>

      {/* ACTIVITY SPLITS */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl space-y-8">
          {ACTIVITIES.map((a, i) => (
            <div
              key={a.name}
              className={`grid gap-8 border border-border bg-card p-8 md:grid-cols-3 md:p-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-1">
                <img
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <h3 className="font-display text-3xl text-forest">{a.title}</h3>
                <p className="mt-4 text-muted-foreground">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HUB GRID */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-muted-foreground">Cosa fare</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              La tua base strategica
              <br />
              per un territorio unico
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "trek",
                title: "Trekking & Famiglie",
                text: "Sentieri facili che partono direttamente dai boschi dietro l'hotel. Passeggiate per bambini, cascate raggiungibili in mezz'ora e picnic tra i larici.",
              },
              {
                icon: "ski",
                title: "Grandi Vette & Escursioni",
                text: "Per chi cerca la vera scalata: Coglians, Monte Cimone, ferrate storiche della Grande Guerra. Guide alpine disponibili su richiesta.",
              },
              {
                icon: "coffee",
                title: "Storia & Sapori",
                text: "Malghe di alta quota, cjarsons, erbe spontanee, formaggi stagionati e leggende raccontate da chi la montagna la vive da sempre.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="border border-border bg-card p-8 transition hover:border-cta"
              >
                <div className="text-cta">
                  <Icon name={c.icon} className="h-10 w-10" />
                </div>
                <h3 className="mt-5 font-display text-xl text-forest">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/it/camere" hash="prenota" className="btn-cta">
              Prenota la tua prossima avventura
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="eyebrow text-muted-foreground">Domande frequenti</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Tutto quello che devi sapere</h2>
          </div>
          <Accordion type="single" collapsible className="mt-12">
            {TERRITORIO_FAQS.map((f, i) => (
              <AccordionItem key={i} value={`territorio-faq-${i}`}>
                <AccordionTrigger className="font-display text-lg text-forest hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* MAP */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div>
              <p className="eyebrow text-cta">Dove siamo</p>
              <h2 className="mt-3 font-display text-3xl">
                via fontana 21,
                <br />
                arta terme
              </h2>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="pin" className="h-4 w-4 text-cta" /> 33022 Arta Terme (UD)
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="ski" className="h-4 w-4 text-cta" /> 20 min dallo Zoncolan
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="parking" className="h-4 w-4 text-cta" /> 15 min dall'autostrada A23
                </div>
              </div>
            </div>
            <div className="relative col-span-2 aspect-[16/10] w-full overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5495.434851714841!2d13.02394427675014!3d46.47410486549224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a1de4a6db50ed%3A0xd4e4504327d295dd!2sVia%20Fontana%2C%2021%2C%2033022%20Arta%20Terme%20UD!5e0!3m2!1sit!2sit!4v1784562271014!5m2!1sit!2sit"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mappa - Hotel alpi.in, Via Fontana 21, Arta Terme"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
