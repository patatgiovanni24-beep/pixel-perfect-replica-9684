import { createFileRoute } from "@tanstack/react-router";
import { CamerePage } from "@/components/pages/camere-page";
import { CONTENT } from "@/content";
import { PAGE_PATHS } from "@/lib/i18n";
import { SITE_URL } from "@/lib/hotel-schema";
import { hreflangLinks } from "@/lib/hreflang";

const content = CONTENT.it.camere;

export const Route = createFileRoute("/it/camere")({
  head: () => ({
    meta: [
      { title: content.meta.title },
      { name: "description", content: content.meta.description },
      { property: "og:title", content: content.meta.ogTitle },
      { property: "og:description", content: content.meta.ogDescription },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}${PAGE_PATHS.camere.it}` },
      ...hreflangLinks("camere"),
    ],
  }),
  component: () => <CamerePage content={content} />,
});
