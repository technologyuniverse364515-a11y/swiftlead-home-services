import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, Star, Clock, ShieldCheck, CheckCircle2, Wrench, Zap, Wind } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";
import { buttons } from "@/config/buttons";
import { text } from "@/config/text";
import { messages } from "@/config/messages";
import { images } from "@/config/images";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Zap,
  Wind,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${text.brand.name} — 24/7 Plumbing, Electrical & HVAC Repair` },
      { name: "description", content: text.heroSubtitle },
      { property: "og:title", content: `${text.brand.name} — 24/7 Home Repair Experts` },
      { property: "og:description", content: text.heroSubtitle },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${images.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
              <Star className="h-3.5 w-3.5 fill-accent" />
              {text.heroBadge}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              {text.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              {text.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buttons.callNow.link}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 font-bold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover hover:scale-105 animate-pulse-ring"
              >
                <Phone className="h-5 w-5" />
                {buttons.callNow.text}
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition-smooth hover:bg-white/10"
              >
                {buttons.requestQuote.text}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {messages.guarantees.map((g) => (
                <span key={g} className="flex items-center gap-2 text-primary-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {g}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative ml-auto max-w-md rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-md shadow-elegant">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">Live Status</div>
                  <div className="mt-1 font-display text-2xl font-bold">Dispatchers Available</div>
                </div>
                <div className="flex h-3 w-3">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-success/60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div className="text-sm">
                    <div className="font-semibold">Avg. Response: 47 min</div>
                    <div className="text-xs text-primary-foreground/70">In your area right now</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <div className="text-sm">
                    <div className="font-semibold">{text.brand.technicians}+ Certified Techs</div>
                    <div className="text-xs text-primary-foreground/70">On-call 24/7/365</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <div className="text-sm">
                    <div className="font-semibold">{text.brand.rating} ★ ({text.brand.reviewCount.toLocaleString()})</div>
                    <div className="text-xs text-primary-foreground/70">Verified customer reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">What We Fix</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground text-balance md:text-5xl">
            {text.servicesTitle}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{text.servicesSubtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {text.services.map((s) => {
            const Icon = ICONS[s.icon] ?? Wrench;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={images.services[s.slug]}
                    alt={`${s.name} services`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">{s.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{s.tagline}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-semibold text-primary">{s.pricing}</span>
                    <span className="flex items-center gap-1 font-semibold text-accent">
                      Learn more <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why ProFix</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
                Trust built on {text.brand.yearsInBusiness} years and {text.brand.homesServed} homes.
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                We're not the cheapest, and we're not trying to be. We're the team you call when you need it
                done right — the first time, on time, with a guarantee in writing.
              </p>
              <Link
                to="/trust"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
              >
                See our credentials <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {text.whyUs.map((w) => (
                <div key={w.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-display font-bold text-foreground">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Real Reviews</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
            {text.reviewsTitle}
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {text.testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/90">"{t.text}"</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4 text-xs">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground">{t.city} • {t.service}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
          >
            Read all {text.brand.reviewCount.toLocaleString()} reviews <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CITIES */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-3xl">
            Serving Major Cities Across the USA
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {text.cities.map((c) => (
              <Link
                key={c.slug}
                to="/city/$slug"
                params={{ slug: c.slug }}
                className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground transition-smooth hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                {c.name}, {c.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="One call solves it. Day or night."
        subtitle={messages.ctaUrgency}
      />
    </SiteLayout>
  );
}
