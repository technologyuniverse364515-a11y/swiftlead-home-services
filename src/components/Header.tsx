import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { buttons } from "@/config/buttons";
import { text } from "@/config/text";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/trust", label: "Trust" },
  { to: "/emergency", label: "Emergency" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground shadow-accent">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="hidden sm:inline">{text.brand.name}</span>
          <span className="sm:hidden">ProFix</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/70 transition-smooth hover:text-accent"
              activeProps={{ className: "text-accent font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buttons.callNow.link}
            className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover hover:scale-105 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {buttons.callNow.phoneDisplay}
          </a>
          <a
            href={buttons.callNow.link}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-accent md:hidden"
            aria-label="Call now"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium text-foreground/80"
                activeProps={{ className: "text-accent font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to={buttons.requestQuote.link as "/quote"}
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              {buttons.requestQuote.text}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
