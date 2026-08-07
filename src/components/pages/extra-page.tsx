import { Link } from "@tanstack/react-router";
import conferenceRoom from "@/assets/conference-room.jpg";
import partnerAlCaratel from "@/assets/partner-al-caratel.jpg";
import partnerPrivilegio from "@/assets/partner-privilegio.jpg";
import partnerLaugiane from "@/assets/partner-laugiane.jpg";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import { bookingPath, type Locale } from "@/lib/i18n";
import type { ExtraContent } from "@/content/types";

const PARTNER_IMAGES = [partnerAlCaratel, partnerPrivilegio, partnerLaugiane];

export function ExtraPage({ locale, content }: { locale: Locale; content: ExtraContent }) {
  return (
    <>
      {/* INTRO */}
      <Section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-cta">{content.intro.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">{content.intro.title}</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-cta" />
          <p className="mt-8 text-lg font-light leading-relaxed text-forest-foreground/85">
            {content.intro.paragraphPrefix}
            <span className="text-cta font-medium">{content.intro.discountHighlight}</span>
            {content.intro.paragraphSuffix}
          </p>
        </div>
      </Section>

      {/* PARTNERS */}
      <Section>
        <div className="mx-auto max-w-6xl space-y-8">
          {content.partners.map((p, i) => (
            <div
              key={p.name}
              className={`grid gap-8 border border-border bg-card p-8 md:grid-cols-3 md:p-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-1">
                <img
                  src={PARTNER_IMAGES[i]}
                  alt={p.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <div className="eyebrow text-cta">
                  {content.partnerLabelPrefix} {i + 1}
                </div>
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
                    <span className="font-medium text-forest">{content.whatYouFindLabel}</span>{" "}
                    {p.whatYouFind}
                  </p>
                  <p>
                    <span className="font-medium text-forest">{content.bestMomentLabel}</span>{" "}
                    {p.bestMoment}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center border border-cta/40 bg-cta/5 px-3 py-1 text-xs uppercase tracking-wider text-cta">
                  -10% {content.discountBadgeSuffix}
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
              alt={content.corporateRetreat.imageAlt}
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div>
              <p className="eyebrow text-cta">{content.corporateRetreat.eyebrow}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                {content.corporateRetreat.titleLine1}
                <br />
                {content.corporateRetreat.titleLine2}
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {content.corporateRetreat.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {content.corporateRetreat.badges.map((b) => (
                  <div
                    key={b}
                    className="border border-forest/20 px-3 py-2 text-xs uppercase tracking-wider text-forest"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FUNNEL FOOTER */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            {content.funnel.titleLine1}
            <br />
            {content.funnel.titleLine2}
          </h2>
          <p className="mt-6 text-muted-foreground">{content.funnel.text}</p>
          <Link to={bookingPath(locale)} className="btn-cta mt-8">
            {content.funnel.cta}
          </Link>
        </div>
      </Section>
    </>
  );
}
