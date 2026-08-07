import { createFileRoute, Link } from "@tanstack/react-router";
import conferenceRoom from "@/assets/conference-room.jpg";
import partnerAlCaratel from "@/assets/partner-al-caratel.jpg";
import partnerPrivilegio from "@/assets/partner-privilegio.jpg";
import partnerLaugiane from "@/assets/partner-laugiane.jpg";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import { SITE_URL } from "@/lib/hotel-schema";

export const Route = createFileRoute("/it/servizi-extra-retreat")({
  head: () => ({
    meta: [
      { title: "Servizi Extra & Retreat — Hotel alpi.in" },
      {
        name: "description",
        content:
          "Sconto del 10% nei locali partner convenzionati di Arta Terme e spazi per retreat aziendali fino a 50 persone nel cuore della Carnia, all'Hotel alpi.in.",
      },
      { property: "og:title", content: "Servizi Extra & Retreat — Hotel alpi.in" },
      {
        property: "og:description",
        content:
          "Una rete di ristoranti, rifugi e SPA partner selezionati, più spazi e team building per il tuo retreat aziendale in Carnia.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/it/servizi-extra-retreat` }],
  }),
  component: Extra,
});

const PARTNERS = [
  {
    name: "AL CARATEL",
    distance: "10 minuti",
    mapsUrl: "https://maps.app.goo.gl/GkfvT5h2fxbvx4KH9",
    image: partnerAlCaratel,
    instagram: "https://www.instagram.com/alcaratel/",
    facebook: "https://www.facebook.com/profile.php?id=61580856583078",
    whatYouFind:
      "Brunch sfiziosi, i migliori vini della regione, cocktail d'autore e ristorazione veloce di qualità (panini gourmet, toast fatti in casa, primi piatti espressi).",
    bestMoment:
      "Perfetto per un pranzo veloce prima di un'escursione, per un brunch rilassato a metà mattina, per un drink post-attività o per concludere la vostra serata.",
  },
  {
    name: "RISTORANTE PRIVILEGIO",
    distance: "15 minuti",
    mapsUrl: "https://maps.app.goo.gl/ecoXzfQ4qsPhxtWt7",
    image: partnerPrivilegio,
    instagram: "https://www.instagram.com/privilegioristorante/",
    facebook: "https://www.facebook.com/privilegioristorante/?locale=it_IT",
    whatYouFind:
      "Piatti preparati con ingredienti locali e ricette autentiche, in un'atmosfera calda e accogliente.",
    bestMoment:
      "La degna conclusione di una giornata intensa tra i sentieri o sulle piste, per gustare i veri sapori della Carnia.",
  },
  {
    name: "RIFUGIO LAUGIANE",
    distance: "Sulle piste",
    mapsUrl: "https://maps.app.goo.gl/qkjBkwB9D6moTXji9",
    image: partnerLaugiane,
    instagram: "https://www.instagram.com/rifugiolaugiane/",
    facebook: "https://www.facebook.com/Laugiane/?locale=it_IT",
    whatYouFind:
      "Bar, ristorante con terrazza panoramica e, durante la stagione invernale, una piccola ed esclusiva SPA (su prenotazione) per rigenerarsi dopo le discese.",
    bestMoment:
      "Una pausa pranzo calorosa tra una pista e l'altra o un pomeriggio di puro relax ad alta quota.",
  },
];

function Extra() {
  return (
    <>
      {/* INTRO */}
      <Section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-cta">Servizi Extra & Retreat</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Un unico ecosistema di ospitalità
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-cta" />
          <p className="mt-8 text-lg font-light leading-relaxed text-forest-foreground/85">
            Come ospite di Hotel alpi.in accedi a una rete di strutture selezionate del nostro
            gruppo: ristoranti, rifugi e SPA. Sconto esclusivo del{" "}
            <span className="text-cta font-medium">10%</span> in tutti i locali partner, riservato
            agli ospiti dell'hotel.
          </p>
        </div>
      </Section>

      {/* PARTNERS */}
      <Section>
        <div className="mx-auto max-w-6xl space-y-8">
          {PARTNERS.map((p, i) => (
            <div
              key={p.name}
              className={`grid gap-8 border border-border bg-card p-8 md:grid-cols-3 md:p-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-1">
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <div className="eyebrow text-cta">Partner {i + 1}</div>
                <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <a
                    href={p.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition hover:text-cta"
                  >
                    <Icon name="pin" className="h-4 w-4 text-cta" /> {p.distance}
                  </a>
                  <a
                    href={p.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition hover:text-cta"
                  >
                    <Icon name="instagram" className="h-4 w-4 text-cta" /> Instagram
                  </a>
                  <a
                    href={p.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition hover:text-cta"
                  >
                    <Icon name="facebook" className="h-4 w-4 text-cta" /> Facebook
                  </a>
                </div>
                <div className="mt-6 space-y-3 text-muted-foreground">
                  <p>
                    <span className="font-medium text-forest">Cosa trovi:</span> {p.whatYouFind}
                  </p>
                  <p>
                    <span className="font-medium text-forest">Il momento ideale:</span>{" "}
                    {p.bestMoment}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center border border-cta/40 bg-cta/5 px-3 py-1 text-xs uppercase tracking-wider text-cta">
                  -10% per gli ospiti alpi.in
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
            <img
              src={conferenceRoom}
              alt="Sala meeting dell'hotel"
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div>
              <p className="eyebrow text-cta">Corporate Retreat</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Il tuo retreat aziendale
                <br />
                nel cuore della carnia
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Quindici minuti dall'uscita autostradale, sala riunioni attrezzata con proiettore,
                  lavagna e connessione.
                </p>
                <p>
                  Configurazioni flessibili delle camere per accogliere team fino a 50 persone, in
                  singole, doppie o dormitori a seconda del budget.
                </p>
                <p>
                  Team building alpini coordinati con guide di montagna esperte: escursioni,
                  arrampicata sportiva, canyoning e cene in malga.
                </p>
                <p>
                  Chiusura di giornata alle terme di Arta, a dieci minuti a piedi: sauna, vapore e
                  piscine termali per rigenerarsi prima del ritorno.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest">
                  A23 · 15 min
                </div>
                <div className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest">
                  Fino a 50 pax
                </div>
                <div className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest">
                  Sala meeting
                </div>
                <div className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest">
                  Team building
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FUNNEL FOOTER */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Pronto a scendere
            <br />
            dalle piste con noi?
          </h2>
          <p className="mt-6 text-muted-foreground">
            Scrivici le tue date e cosa cerchi. Costruiamo il soggiorno intorno a te — che sia una
            fuga individuale, una vacanza in famiglia o un retreat aziendale.
          </p>
          <Link to="/it/camere" hash="prenota" className="btn-cta mt-8">
            Prenota
          </Link>
        </div>
      </Section>
    </>
  );
}
