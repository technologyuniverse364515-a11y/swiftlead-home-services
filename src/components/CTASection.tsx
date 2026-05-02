import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";

export function CTASection({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
          {messages.urgency}
        </p>
        <h2 className="font-display text-3xl font-bold text-balance md:text-5xl">
          {title ?? "Need Help Right Now?"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
          {subtitle ?? messages.ctaUrgency}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={buttons.callNow.link}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 font-bold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover hover:scale-105 animate-pulse-ring"
          >
            <Phone className="h-5 w-5" />
            {buttons.callNow.phoneDisplay}
          </a>
          <Link
            to={buttons.requestQuote.link as "/quote"}
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 bg-white/5 px-7 py-4 font-semibold text-primary-foreground backdrop-blur transition-smooth hover:bg-white/10"
          >
            {buttons.requestQuote.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
