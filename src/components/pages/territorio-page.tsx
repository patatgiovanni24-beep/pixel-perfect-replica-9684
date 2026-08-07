import { Link } from "@tanstack/react-router";
import zoncolan from "@/assets/zoncolan.jpg";
import village from "@/assets/village.jpg";
import activitySki from "@/assets/activity-ski.jpg";
import activityBike from "@/assets/activity-bike.jpg";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import { FaqSection } from "@/components/site/faq-section";
import { bookingPath, type Locale } from "@/lib/i18n";
import type { TerritorioContent } from "@/content/types";

const ACTIVITY_IMAGES = [activitySki, activityBike];

export function TerritorioPage({
  locale,
  content,
}: {
  locale: Locale;
  content: TerritorioContent;
}) {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={zoncolan}
          alt={content.hero.imageAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="eyebrow text-white/90 text-sm">{content.hero.eyebrow}</h1>
          <h2 className="mt-4 font-display text-5xl tracking-wider md:text-7xl">
            {content.hero.titleLine1}
            <br />
            {content.hero.titleLine2}
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-light text-white/90">{content.hero.text}</p>
        </div>
      </section>

      {/* ARTA TERME */}
      <Section>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-cta">{content.artaTerme.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              {content.artaTerme.titleLine1}
              <br />
              {content.artaTerme.titleLine2}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {content.artaTerme.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <img
            src={village}
            alt={content.artaTerme.imageAlt}
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
          {content.activities.map((a, i) => (
            <div
              key={a.name}
              className={`grid gap-8 border border-border bg-card p-8 md:grid-cols-3 md:p-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-1">
                <img
                  src={ACTIVITY_IMAGES[i]}
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
            <p className="eyebrow text-muted-foreground">{content.hub.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {content.hub.titleLine1}
              <br />
              {content.hub.titleLine2}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.hub.cards.map((c) => (
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
            <Link to={bookingPath(locale)} className="btn-cta">
              {content.hub.cta}
            </Link>
          </div>
        </div>
      </Section>

      <FaqSection
        eyebrow={content.faq.eyebrow}
        title={content.faq.title}
        items={content.faq.items}
        idPrefix="territorio-faq"
      />

      {/* MAP */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div>
              <p className="eyebrow text-cta">{content.map.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl">
                {content.map.titleLine1}
                <br />
                {content.map.titleLine2}
              </h2>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                {content.map.addressLines.map((line) => (
                  <div key={line} className="flex items-center gap-2">
                    <Icon name="pin" className="h-4 w-4 text-cta" /> {line}
                  </div>
                ))}
                {content.map.distances.map((d) => (
                  <div key={d.text} className="flex items-center gap-2">
                    <Icon name={d.icon} className="h-4 w-4 text-cta" /> {d.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative col-span-2 aspect-[16/10] w-full overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5495.434851714841!2d13.02394427675014!3d46.47410486549224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a1de4a6db50ed%3A0xd4e4504327d295dd!2sVia%20Fontana%2C%2021%2C%2033022%20Arta%20Terme%20UD!5e0!3m2!1sit!2sit!4v1784562271014!5m2!1sit!2sit"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={content.map.iframeTitle}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
