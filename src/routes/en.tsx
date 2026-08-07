import { createFileRoute } from "@tanstack/react-router";
import { LocaleLayout } from "@/components/site/locale-layout";
import { hotelSchema } from "@/lib/hotel-schema";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [{ "script:ld+json": hotelSchema } as never],
  }),
  component: () => <LocaleLayout locale="en" />,
});
