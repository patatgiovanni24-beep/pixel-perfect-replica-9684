export const LOCALES = ["it", "en", "de"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "it";

export type PageKey = "home" | "camere" | "territorio" | "extra";

export const PAGE_PATHS: Record<PageKey, Record<Locale, string>> = {
  home: { it: "/it", en: "/en", de: "/de" },
  camere: { it: "/it/camere", en: "/en/rooms", de: "/de/zimmer" },
  territorio: { it: "/it/territorio", en: "/en/the-area", de: "/de/umgebung" },
  extra: {
    it: "/it/servizi-extra-retreat",
    en: "/en/extras-retreat",
    de: "/de/extras-retreat",
  },
};

/** Given any known path, return its PageKey (used to build hreflang alternates). */
export function pageKeyFromPath(pathname: string): PageKey | null {
  for (const key of Object.keys(PAGE_PATHS) as PageKey[]) {
    for (const locale of LOCALES) {
      if (PAGE_PATHS[key][locale] === pathname) return key;
    }
  }
  return null;
}

export function bookingPath(locale: Locale) {
  return `${PAGE_PATHS.camere[locale]}#prenota`;
}
