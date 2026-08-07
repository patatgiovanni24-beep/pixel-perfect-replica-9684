import { Outlet } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CONTENT } from "@/content";
import type { Locale } from "@/lib/i18n";

export function LocaleLayout({ locale }: { locale: Locale }) {
  const content = CONTENT[locale];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav locale={locale} content={content.nav} />
      <main>
        <Outlet />
      </main>
      <Footer locale={locale} content={content.footer} />
    </div>
  );
}
