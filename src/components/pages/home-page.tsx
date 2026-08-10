import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroEntrance from "@/assets/hero-entrance.jpg";
import logo from "@/assets/logo.svg";
import logoHero from "@/assets/logo-hero.png";
import lounge from "@/assets/lounge.jpg";
import roomSingola from "@/assets/room-singola.jpg";
import roomDoppia from "@/assets/room-doppia.jpg";
import breakfastTable from "@/assets/breakfast-table.jpg";
import gardenMountain from "@/assets/garden-mountain.jpg";
import windowView from "@/assets/window-view.jpg";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import { Stars } from "@/components/site/stars";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PAGE_PATHS, bookingPath, type Locale } from "@/lib/i18n";
import type { HomeContent } from "@/content/types";

export function HomePage({ locale, content }: { locale: Locale; content: HomeContent }) {
  const [reviewsApi, setReviewsApi] = useState<CarouselApi>();
  const reviewsPaused = useRef(false);

  useEffect(() => {
    if (!reviewsApi) return;
    const interval = setInterval(() => {
      if (!reviewsPaused.current) reviewsApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [reviewsApi]);

  const carouselImages = [
    lounge,
    roomSingola,
    breakfastTable,
    gardenMountain,
    windowView,
    roomDoppia,
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroEntrance}
          alt={content.hero.heroImageAlt}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="mb-6 h-40 w-40 overflow-hidden md:h-56 md:w-56">
            <img
              src={logoHero}
              alt={content.hero.logoAlt}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="eyebrow mt-4 text-white/85">{content.hero.location}</p>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/95 md:text-xl">
            {content.hero.tagline}
          </p>
          <Link to={bookingPath(locale)} className="btn-cta mt-10">
            {content.hero.cta}
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-muted-foreground">{content.intro.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">{content.intro.title}</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-cta" />
          <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
            {content.intro.paragraph1}
          </p>
          <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
            {content.intro.paragraph2}
          </p>
        </div>
      </Section>

      {/* L'HOTEL */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-cta">{content.hotelSection.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              {content.hotelSection.titleLine1}
              <br />
              {content.hotelSection.titleLine2}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {content.hotelSection.bullets.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="mt-12 px-10">
            <CarouselContent>
              {content.hotelSection.carouselAlts.map((alt, i) => (
                <CarouselItem key={alt} className="basis-full md:basis-1/3">
                  <img
                    src={carouselImages[i]}
                    alt={alt}
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
            <Link to={PAGE_PATHS.camere[locale]} className="btn-cta">
              {content.hotelSection.cta}
            </Link>
          </div>
        </div>
      </Section>

      {/* IL TERRITORIO INTRO */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-muted-foreground">{content.territorioPreview.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {content.territorioPreview.titleLine1}
              <br />
              {content.territorioPreview.titleLine2}
            </h2>
            <p className="mt-6 text-muted-foreground">{content.territorioPreview.intro}</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {content.territorioPreview.cards.map((c) => (
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
            <Link to={PAGE_PATHS.territorio[locale]} className="btn-outline-forest">
              {content.territorioPreview.cta}
            </Link>
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-muted-foreground">{content.reviews.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">{content.reviews.title}</h2>
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
                {content.reviews.items.map((r) => (
                  <CarouselItem key={r.name} className="basis-full sm:basis-1/2 md:basis-1/3">
                    <div className="flex h-full flex-col justify-between border border-border bg-card p-8">
                      <div>
                        <Stars rating={r.rating} label={`${r.rating}/5`} />
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
