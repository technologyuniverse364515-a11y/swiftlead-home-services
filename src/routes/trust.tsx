import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Award, FileCheck, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTASection } from "@/components/CTASection";
import { text } from "@/config/text";
import { images } from "@/config/images";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: `Licensed & Insured — ${text.brand.name}` },
      { name: "description", content: text.trustSubtitle },
      { property: "og:title", content: `Credentials & Trust — ${text.brand.name}` },
      { property: "og:description", content: text.trustSubtitle },
      { property: "og:image", content: images.team },
    ],
  }),
  component: TrustPage,
});

function TrustPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why we're different</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-balance md:text-6xl">{text.trustTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 md:text-lg">{text.trustSubtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="overflow-hidden rounded-3xl shadow-elegant">
          <img
            src={images.team}
            alt="Certified ProFix technicians"
            loading="lazy"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our credentials</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {text.certifications.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-accent">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">By the numbers</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
                {text.brand.yearsInBusiness} years. {text.brand.homesServed} homes. Zero shortcuts.
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Trust isn't claimed — it's earned, one job at a time. Here's what that looks like in numbers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Stat icon={Award} value={`${text.brand.yearsInBusiness}+`} label="Years in business" />
              <Stat icon={FileCheck} value={text.brand.homesServed} label="Homes served" />
              <Stat icon={ShieldCheck} value={`${text.brand.technicians}+`} label="Certified techs" />
              <Stat icon={Star} value={`${text.brand.rating} ★`} label={`${text.brand.reviewCount.toLocaleString()} reviews`} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Frequently asked</h2>
        <div className="mt-8 space-y-3">
          {text.faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-5 shadow-card transition-smooth open:shadow-elegant"
            >
              <summary className="cursor-pointer list-none font-display font-bold text-foreground marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-2xl text-accent transition-smooth group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection title="Ready to work with the trusted team?" />
    </SiteLayout>
  );
}

function Stat({ icon: Icon, value, label }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <Icon className="h-8 w-8 text-accent" />
      <div className="mt-3 font-display text-3xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
