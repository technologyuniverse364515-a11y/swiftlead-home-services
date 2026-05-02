import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Clock, Phone, CheckCircle2, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTASection } from "@/components/CTASection";
import { text } from "@/config/text";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";

export const Route = createFileRoute("/city/$slug")({
  loader: ({ params }) => {
    const city = text.cities.find((c) => c.slug === params.slug);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.city;
    return {
      meta: c
        ? [
            { title: `Plumber, Electrician & HVAC in ${c.name}, ${c.state} | ${text.brand.name}` },
            {
              name: "description",
              content: `Trusted 24/7 home repair in ${c.name}, ${c.state}. Licensed plumbers, electricians, and HVAC techs. Average arrival 47 minutes. Call ${buttons.callNow.phoneDisplay}.`,
            },
            { property: "og:title", content: `Home Repair in ${c.name}, ${c.state}` },
            { property: "og:description", content: `Same-day plumbing, electrical & HVAC in ${c.name}.` },
            { property: "og:image", content: images.city },
          ]
        : [{ title: "City Not Found" }],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">City not found</h1>
        <Link to="/" className="mt-6 inline-block font-semibold text-accent hover:underline">
          ← Home
        </Link>
      </div>
    </SiteLayout>
  ),
  component: CityPage,
});

function CityPage() {
  const { city: c } = Route.useLoaderData();
  const localTestimonials = text.testimonials.filter((t) => t.city.includes(c.name));
  const reviews = localTestimonials.length > 0 ? localTestimonials : text.testimonials.slice(0, 3);

  return (
    <SiteLayout city={{ name: c.name, state: c.state }}>
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground md:py-28">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${images.city})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <MapPin className="h-3.5 w-3.5" />
            {c.name}, {c.state} • ZIP {c.zip}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-balance md:text-6xl">
            #1 Home Repair Service in {c.name}, {c.state}
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85 md:text-lg">
            Local plumbers, electricians, and HVAC technicians serving every {c.name} neighborhood.
            24/7 emergency dispatch. Average arrival time: 47 minutes.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={buttons.callNow.link}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 font-bold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call {c.name} Dispatch
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition-smooth hover:bg-white/10"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
          Services we offer in {c.name}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {text.services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-accent hover:shadow-elegant"
            >
              <h3 className="font-display text-lg font-bold text-foreground">{s.name} in {c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                <Clock className="h-4 w-4" /> {s.response}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
            Why {c.name} homeowners trust ProFix
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {text.whyUs.map((w) => (
              <div key={w.title} className="rounded-xl bg-card p-5 shadow-card">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-display font-bold text-foreground">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
          What {c.name} customers are saying
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-foreground/90">"{t.text}"</blockquote>
              <figcaption className="mt-4 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> • {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection title={`Need help in ${c.name} right now?`} subtitle="One call. One trusted team. Zero stress." />
    </SiteLayout>
  );
}
