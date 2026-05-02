import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Wrench, Zap, Wind, CheckCircle2, Phone, ChevronRight, Clock, DollarSign, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTASection } from "@/components/CTASection";
import { text } from "@/config/text";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = { Wrench, Zap, Wind };

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = text.services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: s
        ? [
            { title: `${s.name} Services — ${text.brand.name}` },
            { name: "description", content: s.short },
            { property: "og:title", content: `${s.name} — ${text.brand.name}` },
            { property: "og:description", content: s.short },
            { property: "og:image", content: images.services[s.slug] },
          ]
        : [{ title: "Service Not Found" }],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block font-semibold text-accent hover:underline">
          ← Back to services
        </Link>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const Icon = ICONS[s.icon] ?? Wrench;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground md:py-28">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${images.services[s.slug]})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-accent">
            ← All services
          </Link>
          <div className="mt-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-accent">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold text-balance md:text-6xl">
            {s.name} Repair & Installation
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85 md:text-lg">{s.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={buttons.callNow.link}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 font-bold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              {buttons.callNow.phoneDisplay}
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition-smooth hover:bg-white/10"
            >
              {buttons.requestQuote.text}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Everything we cover under {s.name}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-xl font-bold text-foreground">
              Why homeowners choose ProFix for {s.name.toLowerCase()}
            </h3>
            <div className="mt-4 grid gap-3">
              {text.whyUs.map((w) => (
                <div key={w.title} className="flex gap-3 rounded-lg bg-secondary p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <div className="text-sm font-bold text-foreground">{w.title}</div>
                    <div className="text-sm text-muted-foreground">{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4 md:sticky md:top-24 md:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h3 className="font-display text-lg font-bold text-foreground">Get help fast</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-accent" />{s.pricing}</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />{s.response}</div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" />Lifetime workmanship warranty</div>
              </div>
              <a
                href={buttons.callNow.link}
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-bold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link
                to="/quote"
                className="mt-2 flex items-center justify-center rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground"
              >
                Free Quote
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-secondary p-6">
              <h4 className="font-display text-sm font-bold text-foreground">Other services</h4>
              <ul className="mt-3 space-y-1 text-sm">
                {text.services
                  .filter((o) => o.slug !== s.slug)
                  .map((o) => (
                    <li key={o.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: o.slug }}
                        className="flex items-center justify-between rounded-md px-2 py-2 text-foreground transition-smooth hover:bg-background hover:text-accent"
                      >
                        {o.name} <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection title={`Need ${s.name.toLowerCase()} help today?`} subtitle="One call. One trusted team. Zero stress." />
    </SiteLayout>
  );
}
