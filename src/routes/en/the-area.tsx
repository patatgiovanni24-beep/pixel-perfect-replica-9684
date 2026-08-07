import { createFileRoute } from "@tanstack/react-router";
import { TerritorioPage } from "@/components/pages/territorio-page";
import { CONTENT } from "@/content";
import { PAGE_PATHS } from "@/lib/i18n";
import { SITE_URL } from "@/lib/hotel-schema";
import { hreflangLinks } from "@/lib/hreflang";

const content = CONTENT.en.territorio;

export const Route = createFileRoute("/en/the-area")({
  head: () => ({
    meta: [
      { title: content.meta.title },
      { name: "description", content: content.meta.description },
      { property: "og:title", content: content.meta.ogTitle },
      { property: "og:description", content: content.meta.ogDescription },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}${PAGE_PATHS.territorio.en}` },
      ...hreflangLinks("territorio"),
    ],
  }),
  component: () => <TerritorioPage locale="en" content={content} />,
});
