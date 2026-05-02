import { createFileRoute } from "@tanstack/react-router";
import { Phone, AlertTriangle, Clock, ShieldCheck, Zap, Wrench, Wind } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: `🚨 24/7 Emergency Home Repair — ${text.brand.name}` },
      { name: "description", content: text.emergencySubtitle },
      { property: "og:title", content: `Emergency Home Repair — ${text.brand.name}` },
      { property: "og:description", content: text.emergencySubtitle },
    ],
  }),
  component: EmergencyPage,
});

const emergencies = [
  { icon: Wrench, title: "Burst pipe / major leak", action: "Shut off main water valve, then call." },
  { icon: Wrench, title: "No hot water / flooded heater", action: "Turn off water and gas, then call." },
  { icon: Zap, title: "Power outage / sparking outlet", action: "Flip main breaker, then call immediately." },
  { icon: Zap, title: "Electrical burning smell", action: "Leave the area, then call right away." },
  { icon: Wind, title: "AC failure in extreme heat", action: "Move to coolest room, then call." },
  { icon: Wind, title: "No heat / furnace failure", action: "Layer up, conserve heat, then call." },
];

function EmergencyPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-accent py-16 text-accent-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 animate-pulse-ring">
            <AlertTriangle className="h-10 w-10" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-balance md:text-6xl">
            {text.emergencyTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-95">{text.emergencySubtitle}</p>

          <a
            href={buttons.callNow.link}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-6 text-2xl font-bold text-primary-foreground shadow-elegant transition-smooth hover:scale-105 md:text-3xl"
          >
            <Phone className="h-7 w-7" />
            {buttons.callNow.phoneDisplay}
          </a>
          <p className="mt-3 text-sm opacity-90">Tap to call — answered in under 30 seconds, 24/7/365</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <Clock className="mx-auto h-10 w-10 text-accent" />
            <div className="mt-3 font-display text-3xl font-bold text-foreground">47 min</div>
            <div className="text-sm text-muted-foreground">Avg. emergency arrival</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <ShieldCheck className="mx-auto h-10 w-10 text-accent" />
            <div className="mt-3 font-display text-3xl font-bold text-foreground">{text.brand.technicians}+</div>
            <div className="text-sm text-muted-foreground">On-call technicians</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <AlertTriangle className="mx-auto h-10 w-10 text-accent" />
            <div className="mt-3 font-display text-3xl font-bold text-foreground">24/7/365</div>
            <div className="text-sm text-muted-foreground">Always available</div>
          </div>
        </div>

        <h2 className="mt-16 font-display text-2xl font-bold text-foreground md:text-4xl">
          Common emergencies we handle
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {emergencies.map((e) => {
            const Icon = e.icon;
            return (
              <div key={e.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.action}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-2xl font-bold md:text-4xl">Stop reading. Start calling.</h2>
          <p className="mt-3 text-primary-foreground/80">Every minute matters in an emergency.</p>
          <a
            href={buttons.callNow.link}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-bold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover animate-pulse-ring"
          >
            <Phone className="h-5 w-5" />
            {buttons.callNow.phoneDisplay}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
