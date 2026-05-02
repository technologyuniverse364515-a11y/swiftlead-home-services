import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ShieldCheck, Facebook, Instagram, Twitter } from "lucide-react";
import { buttons } from "@/config/buttons";
import { text } from "@/config/text";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            {text.brand.name}
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70">{text.footerTagline}</p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition-smooth hover:bg-accent">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 transition-smooth hover:bg-accent">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 transition-smooth hover:bg-accent">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {text.services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-smooth hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="transition-smooth hover:text-accent">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Cities Served</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {text.cities.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/city/$slug"
                  params={{ slug: c.slug }}
                  className="transition-smooth hover:text-accent"
                >
                  {c.name}, {c.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Get In Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a href={buttons.callNow.link} className="flex items-start gap-2 transition-smooth hover:text-accent">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span className="block font-semibold text-primary-foreground">{buttons.callNow.phoneDisplay}</span>
                  <span className="text-xs">24/7 Emergency Line</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <span>help@profix.example</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Serving {text.cities.length}+ major US metros</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/60 md:flex-row md:px-6">
          <p>{text.copyright}</p>
          <p>Licensed • Insured • BBB A+ Accredited</p>
        </div>
      </div>
    </footer>
  );
}
