import { useRef, useState } from "react";
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
import { FaqSection } from "@/components/site/faq-section";
import { BOOKING_EMAIL } from "@/lib/contact";
import type { CamereContent } from "@/content/types";

const ROOM_IMAGES = [
  roomSingola,
  roomDoppia,
  roomTripla,
  roomQuadrupla,
  roomDormitorio7,
  roomDormitorio8,
];

export function CamerePage({ content }: { content: CamereContent }) {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const [submission, setSubmission] = useState<{
    mailto: string;
    gmail: string;
    text: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow text-cta">{content.intro.eyebrow}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                {content.intro.titleLine1}
                <br />
                {content.intro.titleLine2}
              </h2>
              <p className="mt-6 text-muted-foreground">{content.intro.paragraph}</p>
              <button className="btn-cta mt-8" onClick={scrollToForm}>
                {content.intro.cta}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <img
                src={roomDoppia}
                alt={content.intro.mosaicAlts[0]}
                width={1280}
                height={1280}
                loading="lazy"
                className="col-span-2 row-span-2 aspect-square h-full w-full object-cover"
              />
              <img
                src={lounge}
                alt={content.intro.mosaicAlts[1]}
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square h-full w-full object-cover"
              />
              <img
                src={breakfastTable}
                alt={content.intro.mosaicAlts[2]}
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
            {content.rooms.map((r, i) => (
              <div
                key={r.name}
                className="flex flex-col overflow-hidden border border-border bg-card transition hover:border-cta hover:shadow-lg"
              >
                <img
                  src={ROOM_IMAGES[i]}
                  alt={r.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge icon="bed" label={content.bedsLabel(r.beds)} />
                      <Badge icon="bath" label={content.bathLabel} />
                      <Badge icon="wifi" label={content.wifiLabel} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-forest">{r.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <div className="eyebrow text-muted-foreground text-[10px]">
                      {content.fromLabel}
                    </div>
                    <div className="mt-1 font-display text-2xl text-cta">
                      €{r.price}
                      <span className="text-sm text-muted-foreground">
                        {" "}
                        {content.perNightLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FaqSection
        eyebrow={content.faq.eyebrow}
        title={content.faq.title}
        items={content.faq.items}
        idPrefix="camere-faq"
      />

      {/* PERKS */}
      <Section>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {content.perks.map((p) => (
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
              <p className="eyebrow text-cta">{content.form.eyebrow}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">{content.form.title}</h2>
              <p className="mt-4 text-forest-foreground/80">{content.form.subtitle}</p>
            </div>
            {submission ? (
              <div className="mt-10 space-y-6 text-center">
                <p className="font-display text-2xl">{content.form.readyTitle}</p>
                <p className="text-forest-foreground/80">{content.form.readySubtitle}</p>
                <p className="mx-auto max-w-md rounded-md border border-cta/40 bg-cta/10 px-4 py-3 text-sm font-medium text-cta">
                  {content.form.readyWarning}
                </p>
                <div className="flex flex-col items-center gap-4">
                  <a
                    href={submission.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta"
                  >
                    {content.form.openGmail}
                  </a>
                  <a
                    href={submission.mailto}
                    className="text-sm text-forest-foreground/80 underline transition hover:text-cta"
                  >
                    {content.form.openMailApp}
                  </a>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(submission.text);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      } catch {
                        // clipboard unavailable — the other two options still work
                      }
                    }}
                    className="text-sm text-forest-foreground/80 underline transition hover:text-cta"
                  >
                    {copied ? content.form.copied : content.form.copyMessage}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmission(null)}
                  className="text-xs text-forest-foreground/60 underline transition hover:text-cta"
                >
                  {content.form.newRequest}
                </button>
              </div>
            ) : (
              <form
                className="mt-10 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const body = [
                    `${content.form.firstName}: ${data.get("nome")}`,
                    `${content.form.lastName}: ${data.get("cognome")}`,
                    `${content.form.email}: ${data.get("email")}`,
                    `${content.form.phone}: ${data.get("tel")}`,
                    "",
                    `${content.form.message}:`,
                    `${data.get("msg")}`,
                  ].join("\n");
                  const mailtoUrl = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
                    content.form.emailSubject,
                  )}&body=${encodeURIComponent(body)}`;
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    BOOKING_EMAIL,
                  )}&su=${encodeURIComponent(content.form.emailSubject)}&body=${encodeURIComponent(body)}`;
                  const text = `${content.form.email}: ${BOOKING_EMAIL}\n${content.form.emailSubject}\n\n${body}`;
                  setSubmission({ mailto: mailtoUrl, gmail: gmailUrl, text });
                  window.location.href = mailtoUrl;
                }}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label={content.form.firstName} name="nome" />
                  <Field label={content.form.lastName} name="cognome" />
                  <Field label={content.form.email} name="email" type="email" />
                  <Field label={content.form.phone} name="tel" type="tel" />
                </div>
                <Field label={content.form.message} name="msg" textarea />
                <div className="pt-2 text-center">
                  <button type="submit" className="btn-cta">
                    {content.form.submit}
                  </button>
                </div>
              </form>
            )}
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
