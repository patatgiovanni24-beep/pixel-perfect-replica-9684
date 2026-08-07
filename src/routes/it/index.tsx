import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroEntrance from "@/assets/hero-entrance.jpg";
import logo from "@/assets/logo.svg";
import lounge from "@/assets/lounge.jpg";
import roomSingola from "@/assets/room-singola.jpg";
import roomDoppia from "@/assets/room-doppia.jpg";
import breakfastTable from "@/assets/breakfast-table.jpg";
import gardenMountain from "@/assets/garden-mountain.jpg";
import windowView from "@/assets/window-view.jpg";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SITE_URL } from "@/lib/hotel-schema";

export const Route = createFileRoute("/it/")({
  head: () => ({
    meta: [
      { title: "Hotel alpi.in — La tua base per le Alpi Carniche" },
      {
        name: "description",
        content:
          "Hotel alpi.in ad Arta Terme, Carnia. Base strategica per sci, bici e trekking sullo Zoncolan. Camere, dormitori, deposito attrezzato e colazione locale.",
      },
      { property: "og:title", content: "Hotel alpi.in — Arta Terme, Carnia" },
      {
        property: "og:description",
        content:
          "La tua base alpina in Friuli Venezia Giulia. Camere, dormitori e retreat aziendali ai piedi dello Zoncolan.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/it` }],
  }),
  component: Home,
});

const REVIEWS = [
  {
    name: "Francesco M.",
    rating: 5,
    text: "Posizione strategica, estrema cordialità dello staff, tranquillità e pulizia della struttura.",
  },
  {
    name: "Paola D.",
    rating: 4,
    text: "Consigliatissimo! Camera matrimoniale spaziosa e pulita, bagno comodo. Personale molto gentile e accogliente. Colazione a buffet ottima e abbondante.",
  },
  {
    name: "Kent C.",
    rating: 5,
    text: "Buono per amanti della montagna e dello sport. Consigliato.",
  },
  {
    name: "Vincenzo P.",
    rating: 5,
    text: "Assolutamente consigliato per posizione e servizi prestati.",
  },
  {
    name: "Nicla O.",
    rating: 4,
    text: "Struttura accogliente e conveniente. Camere grandi e accoglienti, buona posizione per trekking sullo Zoncolan.",
  },
  {
    name: "Marco F.",
    rating: 5,
    text: "Staff gentile e servizi completi. Abbiamo cenato in uno dei partner convenzionati di cucina tipica.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-cta" aria-label={`${rating} su 5 stelle`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 2 L14.9 8.6 L22 9.3 L16.7 14.1 L18.2 21.2 L12 17.6 L5.8 21.2 L7.3 14.1 L2 9.3 L9.1 8.6 Z"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function Home() {
  const [reviewsApi, setReviewsApi] = useState<CarouselApi>();
  const reviewsPaused = useRef(false);

  useEffect(() => {
    if (!reviewsApi) return;
    const interval = setInterval(() => {
      if (!reviewsPaused.current) reviewsApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [reviewsApi]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroEntrance}
          alt="Ingresso Hotel alpi.in"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="mb-6 h-40 w-40 overflow-hidden md:h-56 md:w-56">
            <img
              src={logo}
              alt="Hotel alpi.in"
              className="h-full w-full origin-top scale-[1.6] object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
            />
          </div>
          <p className="eyebrow mt-4 text-white/85">Arta Terme · Carnia · Friuli Venezia Giulia</p>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/95 md:text-xl">
            Nel cuore delle Alpi Carniche, l'avventura inizia qui
          </p>
          <Link to="/it/camere" hash="prenota" className="btn-cta mt-10">
            Prenota
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-muted-foreground">Benvenuti</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            La tua base per le Alpi Carniche
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-cta" />
          <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
            Benvenuti all'Hotel alpi.in di Arta Terme, la vostra base strategica nel cuore delle
            Alpi Carniche. Situato a pochi passi dal centro del paese ma affacciato direttamente
            sulla quiete del bosco, la nostra struttura è il punto di partenza perfetto per chi ama
            la montagna vissuta al massimo. Con una vista spettacolare sullo Zoncolan, un deposito
            attrezzato per i vostri sci o biciclette e tariffe sempre convenienti, la vostra
            prossima grande avventura in Carnia inizia qui.
          </p>
          <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
            Un rifugio contemporaneo, con tariffe convenienti e un'accoglienza che sa di casa.
          </p>
        </div>
      </Section>

      {/* L'HOTEL */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-cta">L'Hotel</p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              L'inizio della tua
              <br />
              avventura in Carnia
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Camere singole, doppie e triple per chi viaggia in coppia o da solo.</p>
              <p>Quadruple e dormitori fino a otto letti per famiglie, squadre e gruppi.</p>
              <p>Legno di larice e vedute che aprono sulle vette.</p>
              <p>
                Una colazione abbondante, un ampio parcheggio e un deposito sicuro per lasciare la
                vostra attrezzatura.
              </p>
              <p>
                Ogni dettaglio pensato per chi scende dai sentieri, dalle piste o per chi vuole
                rilassarsi nelle vicine terme di Arta.
              </p>
            </div>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="mt-12 px-10">
            <CarouselContent>
              {[
                { src: lounge, alt: "Salone interno dell'hotel" },
                { src: roomSingola, alt: "Camera singola dell'hotel" },
                { src: breakfastTable, alt: "Colazione a buffet" },
                { src: gardenMountain, alt: "Giardino e vista sulle montagne" },
                { src: windowView, alt: "Vista dalla camera" },
                { src: roomDoppia, alt: "Camera matrimoniale" },
              ].map((img) => (
                <CarouselItem key={img.alt} className="basis-full md:basis-1/3">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1280}
                    height={1280}
                    loading="lazy"
                    className="aspect-square h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
          <div className="mt-10 text-center">
            <Link to="/it/camere" className="btn-cta">
              Scopri le nostre camere
            </Link>
          </div>
        </div>
      </Section>

      {/* IL TERRITORIO INTRO */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-muted-foreground">Il Territorio</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Un unico centro,
              <br />
              mille avventure
            </h2>
            <p className="mt-6 text-muted-foreground">
              Sport all'aria aperta, terme, cucina di montagna. Da alpi.in raggiungi in poche curve
              tutto ciò che la Carnia ha da offrire.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Sci", icon: "ski", text: "Piste dello Zoncolan e Ravascletto a 20 minuti." },
              { name: "Bici", icon: "bike", text: "Salite mitiche e ciclabili panoramiche." },
              {
                name: "Trekking",
                icon: "trek",
                text: "Sentieri che partono dal bosco dietro l'hotel.",
              },
              {
                name: "Terme di Arta",
                icon: "spa",
                text: "Il centro termale che fa bene a corpo e spirito.",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="group flex flex-col items-center border border-border bg-card px-8 py-12 text-center transition hover:border-cta"
              >
                <div className="text-forest transition group-hover:text-cta">
                  <Icon name={c.icon} className="h-12 w-12" />
                </div>
                <h3 className="eyebrow mt-6 text-forest">{c.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/it/territorio" className="btn-outline-forest">
              Scopri la Carnia
            </Link>
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-muted-foreground">Cosa dicono di noi</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Le parole dei nostri ospiti</h2>
          </div>
          <div
            onMouseEnter={() => (reviewsPaused.current = true)}
            onMouseLeave={() => (reviewsPaused.current = false)}
          >
            <Carousel
              opts={{ align: "start", loop: true }}
              setApi={setReviewsApi}
              className="mt-12 px-10"
            >
              <CarouselContent>
                {REVIEWS.map((r) => (
                  <CarouselItem key={r.name} className="basis-full sm:basis-1/2 md:basis-1/3">
                    <div className="flex h-full flex-col justify-between border border-border bg-card p-8">
                      <div>
                        <Stars rating={r.rating} />
                        <p className="mt-4 text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
                      </div>
                      <div className="mt-6 font-display text-lg text-forest">{r.name}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </Section>
    </>
  );
}
