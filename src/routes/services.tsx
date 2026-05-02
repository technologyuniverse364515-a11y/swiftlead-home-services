import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, Zap, Wind, ChevronRight, CheckCircle2, Clock, DollarSign } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTASection } from "@/components/CTASection";
import { text } from "@/config/text";
import { images } from "@/config/images";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = { Wrench, Zap, Wind };

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${text.brand.name} | Plumbing, Electrical, HVAC` },
      { name: "description", content: text.servicesSubtitle },
      { property: "og:title", content: `Home Repair Services — ${text.brand.name}` },
      { property: "og:description", content: text.servicesSubtitle },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">What we do</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-balance md:text-6xl">
            {text.servicesTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/80 md:text-lg">
            {text.servicesSubtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="space-y-16">
          {text.services.map((s, idx) => {
            const Icon = ICONS[s.icon] ?? Wrench;
            const reverse = idx % 2 === 1;
            return (
              <article
                key={s.slug}
                className={`grid gap-10 md:grid-cols-2 md:items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    src={images.services[s.slug]}
                    alt={`${s.name} service`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">{s.name}</h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-accent">{s.tagline}</p>
                  <p className="mt-4 text-muted-foreground">{s.description}</p>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 font-medium text-foreground">
                      <DollarSign className="h-3.5 w-3.5 text-accent" /> {s.pricing}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 font-medium text-foreground">
                      <Clock className="h-3.5 w-3.5 text-accent" /> {s.response}
                    </span>
                  </div>

                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant transition-smooth hover:scale-105"
                  >
                    Explore {s.name} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
