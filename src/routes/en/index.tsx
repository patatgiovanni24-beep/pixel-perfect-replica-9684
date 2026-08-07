import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/home-page";
import { CONTENT } from "@/content";
import { PAGE_PATHS } from "@/lib/i18n";
import { SITE_URL } from "@/lib/hotel-schema";
import { hreflangLinks } from "@/lib/hreflang";

const content = CONTENT.en.home;

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: content.meta.title },
      { name: "description", content: content.meta.description },
      { property: "og:title", content: content.meta.ogTitle },
      { property: "og:description", content: content.meta.ogDescription },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}${PAGE_PATHS.home.en}` },
      ...hreflangLinks("home"),
    ],
  }),
  component: () => <HomePage locale="en" content={content} />,
});
