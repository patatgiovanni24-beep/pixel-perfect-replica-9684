import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

const TABS = [
  { to: "/it", label: "Home" },
  { to: "/it/camere", label: "Le Camere" },
  { to: "/it/territorio", label: "Il Territorio" },
  { to: "/it/servizi-extra-retreat", label: "Servizi Extra & Retreat" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/it" ? pathname === "/it" || pathname === "/it/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 bg-forest text-forest-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/it"
          className="flex items-center gap-3 text-left"
          aria-label="Hotel alpi.in home"
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
          {TABS.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className={`eyebrow relative py-2 transition ${
                isActive(t.to) ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              {t.label}
              {isActive(t.to) && (
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-cta" />
              )}
            </Link>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
          {TABS.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              onClick={() => setOpen(false)}
              className={`eyebrow block w-full px-6 py-4 text-left ${
                isActive(t.to) ? "bg-white/5 text-cta" : ""
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
