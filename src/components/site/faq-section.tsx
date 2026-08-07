import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/site/section";
import type { FaqItem } from "@/content/types";

function FaqAnswerContent({ answer }: { answer: FaqItem["answer"] }) {
  if (answer.kind === "text") {
    return (
      <>
        {answer.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </>
    );
  }
  if (answer.kind === "labeledList") {
    return (
      <div className="space-y-3">
        <p>{answer.intro}</p>
        {answer.items.map((item) => (
          <p key={item.label}>
            <span className="font-medium text-forest">{item.label}</span> {item.text}
          </p>
        ))}
        {answer.outro && <p>{answer.outro}</p>}
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <p>{answer.intro}</p>
      <ul className="space-y-1.5">
        {answer.items.map((d) => (
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
  );
}

export function FaqSection({
  eyebrow,
  title,
  items,
  idPrefix,
}: {
  eyebrow: string;
  title: string;
  items: FaqItem[];
  idPrefix: string;
}) {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="eyebrow text-muted-foreground">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">{title}</h2>
        </div>
        <Accordion type="single" collapsible className="mt-12">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`${idPrefix}-${i}`}>
              <AccordionTrigger className="font-display text-lg text-forest hover:no-underline">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <FaqAnswerContent answer={f.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
