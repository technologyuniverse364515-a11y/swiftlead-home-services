import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, ChevronLeft, Phone, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { text } from "@/config/text";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: `Get a Free Quote — ${text.brand.name}` },
      { name: "description", content: text.quoteSubtitle },
      { property: "og:title", content: `Free Quote — ${text.brand.name}` },
      { property: "og:description", content: text.quoteSubtitle },
    ],
  }),
  component: QuotePage,
});

type Form = {
  service: string;
  urgency: string;
  name: string;
  phone: string;
  email: string;
  zip: string;
  details: string;
};

function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Form>({
    service: "",
    urgency: "",
    name: "",
    phone: "",
    email: "",
    zip: "",
    details: "",
  });

  const update = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canNext =
    (step === 1 && form.service && form.urgency) ||
    (step === 2 && form.name && form.phone && form.zip);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to your endpoint / Lovable Cloud function.
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-14 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{messages.urgency}</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-balance md:text-5xl">{text.quoteTitle}</h1>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">{text.quoteSubtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        {submitted ? (
          <div className="rounded-2xl border border-success/30 bg-success/10 p-10 text-center shadow-card">
            <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Request received!</h2>
            <p className="mt-2 text-muted-foreground">{messages.formSuccess}</p>
            <a
              href={buttons.callNow.link}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-accent-foreground shadow-accent"
            >
              <Phone className="h-4 w-4" /> Or call now: {buttons.callNow.phoneDisplay}
            </a>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            {/* Stepper */}
            <div className="flex border-b border-border bg-secondary">
              {[
                { n: 1, label: "Service" },
                { n: 2, label: "Contact" },
                { n: 3, label: "Details" },
              ].map((s) => (
                <div
                  key={s.n}
                  className={`flex-1 border-b-2 px-4 py-4 text-center text-sm font-semibold transition-smooth ${
                    step >= s.n ? "border-accent text-foreground" : "border-transparent text-muted-foreground"
                  }`}
                >
                  <span
                    className={`mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                      step >= s.n ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s.n}
                  </span>
                  {s.label}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              {step === 1 && (
                <div className="space-y-6 animate-fade-up">
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-foreground">
                      What service do you need?
                    </label>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {text.services.map((s) => (
                        <button
                          type="button"
                          key={s.slug}
                          onClick={() => update("service", s.name)}
                          className={`rounded-xl border-2 p-4 text-left transition-smooth ${
                            form.service === s.name
                              ? "border-accent bg-accent/5 shadow-accent"
                              : "border-border bg-background hover:border-accent/50"
                          }`}
                        >
                          <div className="font-display font-bold text-foreground">{s.name}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{s.tagline}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-foreground">How urgent?</label>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { v: "emergency", l: "🚨 Emergency", d: "ASAP, today" },
                        { v: "soon", l: "📅 This week", d: "Schedule soon" },
                        { v: "planning", l: "💡 Planning", d: "Quote first" },
                      ].map((u) => (
                        <button
                          type="button"
                          key={u.v}
                          onClick={() => update("urgency", u.v)}
                          className={`rounded-xl border-2 p-4 text-left transition-smooth ${
                            form.urgency === u.v
                              ? "border-accent bg-accent/5"
                              : "border-border bg-background hover:border-accent/50"
                          }`}
                        >
                          <div className="font-semibold text-foreground">{u.l}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{u.d}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fade-up">
                  <Field label="Full name" v={form.name} onChange={(v) => update("name", v)} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" type="tel" v={form.phone} onChange={(v) => update("phone", v)} />
                    <Field label="Email (optional)" type="email" v={form.email} onChange={(v) => update("email", v)} required={false} />
                  </div>
                  <Field label="ZIP code" v={form.zip} onChange={(v) => update("zip", v)} />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fade-up">
                  <label className="block">
                    <span className="text-sm font-semibold text-foreground">Tell us what's going on</span>
                    <textarea
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                      rows={5}
                      placeholder="e.g. Kitchen sink is leaking under the cabinet…"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-smooth focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </label>
                  <div className="flex items-start gap-2 rounded-lg bg-secondary p-4 text-xs text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    Your info is private. Used only to dispatch your tech and send your quote.
                  </div>
                </div>
              )}

              {/* Nav */}
              <div className="mt-8 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                ) : (
                  <span />
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    disabled={!canNext}
                    onClick={() => setStep((s) => s + 1)}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-accent-foreground shadow-accent transition-smooth hover:bg-accent-hover"
                  >
                    Submit Request <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  v,
  onChange,
  type = "text",
  required = true,
}: {
  label: string;
  v: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <input
        type={type}
        value={v}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-smooth focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </label>
  );
}
