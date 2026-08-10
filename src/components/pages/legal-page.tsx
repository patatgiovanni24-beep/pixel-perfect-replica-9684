import type { ReactNode } from "react";
import { Section } from "@/components/site/section";

export function LegalPage({
  title,
  updatedLabel,
  children,
}: {
  title: string;
  updatedLabel: string;
  children: ReactNode;
}) {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-forest md:text-5xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{updatedLabel}</p>
        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-sm leading-relaxed text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-forest [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
          {children}
        </div>
      </div>
    </Section>
  );
}
