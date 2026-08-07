import { DEFAULT_LOCALE, LOCALES, PAGE_PATHS, type PageKey } from "./i18n";
import { SITE_URL } from "./hotel-schema";

export function hreflangLinks(page: PageKey) {
  const links: { rel: string; hrefLang: string; href: string }[] = LOCALES.map((locale) => ({
    rel: "alternate",
    hrefLang: locale,
    href: `${SITE_URL}${PAGE_PATHS[page][locale]}`,
  }));
  links.push({
    rel: "alternate",
    hrefLang: "x-default",
    href: `${SITE_URL}${PAGE_PATHS[page][DEFAULT_LOCALE]}`,
  });
  return links;
}
