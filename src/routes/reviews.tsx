import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTASection } from "@/components/CTASection";
import { text } from "@/config/text";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: `Customer Reviews — ${text.brand.name}` },
      { name: "description", content: text.reviewsSubtitle },
      { property: "og:title", content: `${text.brand.reviewCount.toLocaleString()} Reviews — ${text.brand.name}` },
      { property: "og:description", content: text.reviewsSubtitle },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Verified reviews</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-balance md:text-6xl">{text.reviewsTitle}</h1>

          <div className="mt-8 inline-flex items-center gap-6 rounded-2xl border border-white/20 bg-white/5 px-8 py-5 backdrop-blur">
            <div>
              <div className="font-display text-5xl font-bold">{text.brand.rating}</div>
              <div className="mt-1 flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-left">
              <div className="font-display text-2xl font-bold">{text.brand.reviewCount.toLocaleString()}</div>
              <div className="text-xs text-primary-foreground/70">verified reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {text.testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-accent/15" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/90">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                  {t.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection title="Join 150,000+ happy homeowners" subtitle="See what world-class home repair feels like." />
    </SiteLayout>
  );
}
