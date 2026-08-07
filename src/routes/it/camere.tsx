import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import roomSingola from "@/assets/room-singola.jpg";
import roomDoppia from "@/assets/room-doppia.jpg";
import roomTripla from "@/assets/room-tripla.jpg";
import roomQuadrupla from "@/assets/room-quadrupla.jpg";
import roomDormitorio7 from "@/assets/room-dormitorio-7.jpg";
import roomDormitorio8 from "@/assets/room-dormitorio-8.jpg";
import lounge from "@/assets/lounge.jpg";
import breakfastTable from "@/assets/breakfast-table.jpg";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_URL } from "@/lib/hotel-schema";

export const Route = createFileRoute("/it/camere")({
  head: () => ({
    meta: [
      { title: "Le Camere — Hotel alpi.in" },
      {
        name: "description",
        content:
          "Sei tipologie di camera all'Hotel alpi.in di Arta Terme: singole, matrimoniali, triple, quadruple e dormitori da 7 e 8 letti. Colazione inclusa, Wi-Fi gratuito, deposito sci/bici.",
      },
      { property: "og:title", content: "Le Camere — Hotel alpi.in" },
      {
        property: "og:description",
        content:
          "Dalle singole intime ai dormitori da otto letti: sei tipologie di camera per ogni tipo di viaggio in Carnia.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/it/camere` }],
  }),
  component: Camere,
});

const ROOMS = [
  {
    name: "Singola",
    beds: 1,
    price: 55,
    text: "Compatta, luminosa, per viaggiatore solitario/lavoro.",
    image: roomSingola,
  },
  {
    name: "Matrimoniale",
    beds: 2,
    price: 75,
    text: "Letto matrimoniale o due singoli, vista boschi.",
    image: roomDoppia,
  },
  {
    name: "Tripla",
    beds: 3,
    price: 95,
    text: "Spaziosa, per amici in trasferta sportiva.",
    image: roomTripla,
  },
  {
    name: "Quadrupla",
    beds: 4,
    price: 120,
    text: "Per famiglie.",
    image: roomQuadrupla,
  },
  {
    name: "Dormitorio 7 letti",
    beds: 7,
    price: 32,
    text: "Per gruppi sportivi/squadre.",
    image: roomDormitorio7,
  },
  {
    name: "Dormitorio 8 letti",
    beds: 8,
    price: 30,
    text: "Per grandi gruppi.",
    image: roomDormitorio8,
  },
];

const FAQS = [
  {
    question: "Quali sono gli orari di Check-in e Check-out?",
    answer:
      "Il check-in è disponibile dalle 15 alle 20, mentre il check-out va effettuato entro le ore 11.",
  },
  {
    question: "Cosa è incluso nel soggiorno in camera?",
    answer:
      "Tutte le nostre camere includono una ricca colazione a buffet, connessione Wi-Fi, TV, kit di cortesia, asciugacapelli e riscaldamento autonomo. È incluso anche l'accesso al deposito sci/bici.",
  },
  {
    question: "Qual è la politica di cancellazione e modifica della prenotazione?",
    answer:
      "È possibile cancellare o modificare gratuitamente una prenotazione fino a 14 giorni prima del check-in, dai 14 ai 7 giorni prima della data di arrivo, il rimborso sarà pari al 50% dell'importo pagato. Dal 7° giorno antecedente la data di arrivo invece, non è previsto alcun rimborso.",
  },
  {
    question: "Gli animali domestici sono ammessi nelle camere?",
    answer:
      "Sì, i vostri amici a quattro zampe sono i benvenuti! Accettiamo animali in specifiche camere dedicate (è richiesto un piccolo supplemento giornaliero di 10€ per la sanificazione extra). Vi preghiamo di segnalare la loro presenza al momento della prenotazione.",
  },
  {
    question: "Ci sono camere accessibili, familiari o comunicanti?",
    answer:
      "Disponiamo di ampie Suite Familiari e di camere comunicanti perfette per chi viaggia con i bambini. Ci sono anche due dormitori, da 7 e 8 posti ciascuno, perfetti per gruppi o squadre. Inoltre, la struttura offre camere interamente accessibili e prive di barriere architettoniche per ospiti con disabilità o mobilità ridotta. Contattaci per scegliere la sistemazione più adatta alle tue esigenze.",
  },
];

function Camere() {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow text-cta">Le Camere</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Riposo su misura,
                <br />
                per ogni viaggio
              </h2>
              <p className="mt-6 text-muted-foreground">
                Dalle singole intime ai dormitori da otto letti: sei tipologie di camera per
                accogliere coppie, famiglie, squadre e viaggiatori individuali. Bagno privato in
                ogni stanza, Wi-Fi gratuito e materassi pensati per chi in montagna cammina davvero.
              </p>
              <button className="btn-cta mt-8" onClick={scrollToForm}>
                Richiedi informazioni
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <img
                src={roomDoppia}
                alt="Camera matrimoniale"
                width={1280}
                height={1280}
                loading="lazy"
                className="col-span-2 row-span-2 aspect-square h-full w-full object-cover"
              />
              <img
                src={lounge}
                alt="Salone dell'hotel"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square h-full w-full object-cover"
              />
              <img
                src={breakfastTable}
                alt="Colazione a buffet"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ROOMS GRID */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((r) => (
              <div
                key={r.name}
                className="flex flex-col overflow-hidden border border-border bg-card transition hover:border-cta hover:shadow-lg"
              >
                <img
                  src={r.image}
                  alt={r.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge icon="bed" label={`${r.beds} ${r.beds === 1 ? "letto" : "letti"}`} />
                      <Badge icon="bath" label="Bagno" />
                      <Badge icon="wifi" label="Wi-Fi" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-forest">{r.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <div className="eyebrow text-muted-foreground text-[10px]">A partire da</div>
                    <div className="mt-1 font-display text-2xl text-cta">
                      €{r.price}
                      <span className="text-sm text-muted-foreground"> / notte</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="font-display text-lg text-forest hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
                <div className="text-cta">
                  <Icon name={p.icon} className="h-9 w-9" />
                </div>
                <div className="eyebrow mt-4 text-forest">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <div ref={formRef} id="prenota">
        <Section className="bg-forest text-forest-foreground">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <p className="eyebrow text-cta">Prenota</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Scrivici, ti risponderemo presto
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
                <button type="submit" className="btn-cta">
                  Invia richiesta
                </button>
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
    "w-full rounded-md border-0 bg-white px-4 py-3 text-forest placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cta transition";
  return (
    <label className="block">
      <span className="eyebrow text-forest-foreground/70">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls + " mt-2 resize-none"} required />
      ) : (
        <input name={name} type={type} className={cls + " mt-2"} required />
      )}
    </label>
  );
}
