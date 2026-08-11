// Genera public/sitemap.xml a partire dalla mappa delle pagine del sito.
// Rilanciare questo script (`node scripts/generate-sitemap.mjs`) ogni volta che
// cambiano le pagine o gli slug in src/lib/i18n.ts, poi fare commit del file
// public/sitemap.xml aggiornato.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SITE_URL = "https://www.hotelalpi-in.it";
const LOCALES = ["it", "en", "de"];
const DEFAULT_LOCALE = "it";

// Tenere in sync con PAGE_PATHS in src/lib/i18n.ts
const PAGE_PATHS = {
  home: { it: "/it", en: "/en", de: "/de" },
  camere: { it: "/it/camere", en: "/en/rooms", de: "/de/zimmer" },
  territorio: { it: "/it/territorio", en: "/en/the-area", de: "/de/umgebung" },
  extra: {
    it: "/it/servizi-extra-retreat",
    en: "/en/extras-retreat",
    de: "/de/extras-retreat",
  },
};

// Pagine presenti in una sola lingua (nessuna alternanza hreflang).
const SINGLE_LOCALE_PAGES = ["/it/privacy-policy"];

function urlEntry(loc, alternates) {
  const alternateLinks = alternates
    .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
    .join("\n");
  return `  <url>\n    <loc>${loc}</loc>\n${alternateLinks ? alternateLinks + "\n" : ""}  </url>`;
}

const entries = [];

for (const page of Object.values(PAGE_PATHS)) {
  const alternates = LOCALES.map((locale) => ({
    hreflang: locale,
    href: `${SITE_URL}${page[locale]}`,
  }));
  alternates.push({ hreflang: "x-default", href: `${SITE_URL}${page[DEFAULT_LOCALE]}` });

  for (const locale of LOCALES) {
    entries.push(urlEntry(`${SITE_URL}${page[locale]}`, alternates));
  }
}

for (const pathname of SINGLE_LOCALE_PAGES) {
  entries.push(urlEntry(`${SITE_URL}${pathname}`, []));
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`;

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "sitemap.xml",
);
writeFileSync(outPath, xml);
console.log(`sitemap.xml generato con ${entries.length} URL -> ${outPath}`);
