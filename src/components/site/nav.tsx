import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import { PAGE_PATHS, pageKeyFromPath, type Locale, type PageKey } from "@/lib/i18n";
import type { NavContent } from "@/content/types";

const ORDER: PageKey[] = ["home", "camere", "territorio", "extra"];

export function Nav({ locale, content }: { locale: Locale; content: NavContent }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const currentKey = pageKeyFromPath(pathname);

  const labels: Record<PageKey, string> = {
    home: content.home,
    camere: content.camere,
    territorio: content.territorio,
    extra: content.extra,
  };

  return (
    <header className="sticky top-0 z-50 bg-forest text-forest-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to={PAGE_PATHS.home[locale]}
          className="flex items-center gap-3 text-left"
          aria-label={content.homeAriaLabel}
        >
          <div className="h-11 w-11 overflow-hidden">
            <img
              src={logo}
              alt=""
              className="h-full w-full origin-top scale-[1.6] object-contain brightness-0 invert"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg lowercase tracking-tight">alpi.in</div>
            <div className="eyebrow text-[10px] opacity-80">Arta Terme · Carnia</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {ORDER.map((key) => (
            <Link
              key={key}
              to={PAGE_PATHS[key][locale]}
              className={`eyebrow relative py-2 transition ${
                currentKey === key ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              {labels[key]}
              {currentKey === key && (
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-cta" />
              )}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={content.toggleMenuAriaLabel}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 md:hidden">
          {ORDER.map((key) => (
            <Link
              key={key}
              to={PAGE_PATHS[key][locale]}
              onClick={() => setOpen(false)}
              className={`eyebrow block w-full px-6 py-4 text-left ${
                currentKey === key ? "bg-white/5 text-cta" : ""
              }`}
            >
              {labels[key]}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
