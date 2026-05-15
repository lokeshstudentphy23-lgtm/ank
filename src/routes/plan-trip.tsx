import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Hero } from "@/components/site/Hero";
import { HERO_IMAGES, CITIES } from "@/lib/site";
import { submitInquiry } from "@/lib/submissions";
import {
  Sparkles, Users, CalendarDays, Wallet, Compass, Bus, Hotel, MessageSquare,
  CheckCircle2, ChevronLeft, ChevronRight, Heart, Building2, Plane, Mountain, UsersRound,
} from "lucide-react";

export const Route = createFileRoute("/plan-trip")({
  head: () => ({
    meta: [
      { title: "Plan Your Trip | Custom Travel Planning — Aarya Neelkamal Tours" },
      { name: "description", content: "Get a customized pilgrimage, leisure or group travel plan from Varanasi. Tell us your destination, dates, budget and preferences — we'll build your perfect journey." },
      { property: "og:title", content: "Plan Your Trip — Aarya Neelkamal Tours" },
      { property: "og:description", content: "Customized travel planning across India and Nepal." },
      { property: "og:url", content: "/plan-trip" },
    ],
    links: [{ rel: "canonical", href: "/plan-trip" }],
  }),
  component: PlanTrip,
});

type Form = {
  destination: string;
  travellers: string;
  startDate: string;
  endDate: string;
  budget: string;
  tripType: string;
  transport: string;
  hotel: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
};

const initial: Form = {
  destination: "", travellers: "2", startDate: "", endDate: "",
  budget: "", tripType: "", transport: "", hotel: "", notes: "",
  name: "", email: "", phone: "",
};

const tripTypes = [
  { id: "Family", icon: Heart },
  { id: "Corporate", icon: Building2 },
  { id: "Honeymoon", icon: Sparkles },
  { id: "Pilgrimage", icon: Mountain },
  { id: "Group Tour", icon: UsersRound },
  { id: "Leisure", icon: Plane },
];
const budgets = ["Under ₹10k / person", "₹10k–25k / person", "₹25k–50k / person", "₹50k+ / person", "Flexible"];
const transports = ["Bus / Coach", "Tempo Traveller", "Car / SUV", "Train + Local Transport", "Flight + Local Transport", "Don't need transport"];
const hotels = ["Budget", "3-Star", "4-Star", "5-Star / Luxury", "Heritage / Boutique", "No accommodation needed"];

const stepTitles = ["Destination", "Travellers & Dates", "Trip Style & Budget", "Preferences", "Your Details"];

function PlanTrip() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(initial);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm(f => ({ ...f, [k]: v }));

  const canNext = () => {
    if (step === 0) return form.destination.trim().length > 1;
    if (step === 1) return Number(form.travellers) > 0 && form.startDate;
    if (step === 2) return form.tripType && form.budget;
    if (step === 3) return true;
    if (step === 4) return form.name && form.email && form.phone;
    return false;
  };

  const total = stepTitles.length;
  const progress = ((step + 1) / total) * 100;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canNext()) return;
    setSubmitting(true);
    try {
      const summary = [
        `Trip type: ${form.tripType}`,
        `Budget: ${form.budget}`,
        `Dates: ${form.startDate || "—"} → ${form.endDate || "—"}`,
        `Transport: ${form.transport || "—"}`,
        `Hotel: ${form.hotel || "—"}`,
        form.notes ? `Notes: ${form.notes}` : "",
      ].filter(Boolean).join(" | ");
      await submitInquiry({
        full_name: form.name,
        email: form.email,
        phone: form.phone,
        travel_type: form.tripType || "Custom Plan",
        destination: form.destination,
        travel_date: form.startDate || null,
        travellers: Number(form.travellers) || null,
        message: summary,
      });
      toast.success("Your trip plan is on its way!", { description: "We'll craft an itinerary and respond within 2–4 hours." });
      setForm(initial); setStep(0);
      navigate({ to: "/" });
    } catch (err) {
      toast.error("Could not submit", { description: err instanceof Error ? err.message : "Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const field = "mt-1 w-full rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron transition";
  const label = "block text-sm font-semibold text-navy";

  return (
    <>
      <Hero
        image={HERO_IMAGES.planTrip}
        imageAlt="Plan your perfect trip"
        eyebrow="Plan Your Trip"
        height="sm"
        title={<>Let us plan your <span className="text-saffron">perfect journey</span></>}
        subtitle="Five quick steps to a personalized travel plan, hand-built by our 30-year team in Varanasi."
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Step {step + 1} of {total}</span>
            <span className="text-xs font-semibold text-saffron">{stepTitles[step]}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-gradient-to-r from-saffron to-amber-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <ol className="mt-4 hidden sm:flex justify-between">
            {stepTitles.map((t, i) => (
              <li key={t} className="flex flex-col items-center gap-1.5 flex-1">
                <span className={`step-dot grid place-items-center h-7 w-7 rounded-full text-xs font-bold ${i <= step ? "bg-saffron text-saffron-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                </span>
                <span className={`text-[11px] ${i === step ? "text-navy font-semibold" : "text-muted-foreground"}`}>{t}</span>
              </li>
            ))}
          </ol>
        </div>

        <form onSubmit={onSubmit} className="bg-card rounded-2xl border p-6 sm:p-8 shadow-sm">
          {/* Step 0 — Destination */}
          {step === 0 && (
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-saffron/15 text-saffron"><Compass className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">Where would you like to go?</h2>
                  <p className="text-sm text-muted-foreground">Pick a destination or type your own.</p>
                </div>
              </div>
              <div>
                <label className={label} htmlFor="destination">Destination</label>
                <input id="destination" className={field} value={form.destination} onChange={e => set("destination", e.target.value)} placeholder="e.g. Kashi + Ayodhya, Kathmandu, Pokhara" required maxLength={200} />
              </div>
              <div className="flex flex-wrap gap-2">
                {CITIES.slice(0, 10).map(c => (
                  <button type="button" key={c} onClick={() => set("destination", c)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium border transition ${form.destination === c ? "bg-navy text-navy-foreground border-navy" : "bg-card hover:border-saffron hover:text-saffron"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 — Travellers & Dates */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-saffron/15 text-saffron"><CalendarDays className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">Who's travelling, and when?</h2>
                  <p className="text-sm text-muted-foreground">Approximate is fine — we can refine later.</p>
                </div>
              </div>
              <div>
                <label className={label} htmlFor="travellers"><Users className="inline h-4 w-4 mr-1" />Number of travellers</label>
                <input id="travellers" type="number" min={1} max={500} className={field} value={form.travellers} onChange={e => set("travellers", e.target.value)} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className={label} htmlFor="startDate">Start date</label><input id="startDate" type="date" className={field} value={form.startDate} onChange={e => set("startDate", e.target.value)} required /></div>
                <div><label className={label} htmlFor="endDate">End date (optional)</label><input id="endDate" type="date" className={field} value={form.endDate} onChange={e => set("endDate", e.target.value)} /></div>
              </div>
            </div>
          )}

          {/* Step 2 — Trip Style + Budget */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-saffron/15 text-saffron"><Sparkles className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">What kind of trip?</h2>
                  <p className="text-sm text-muted-foreground">Choose a style and budget to help us design.</p>
                </div>
              </div>
              <div>
                <p className={label}>Trip type</p>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {tripTypes.map(({ id, icon: Icon }) => (
                    <button type="button" key={id} onClick={() => set("tripType", id)}
                      className={`flex flex-col items-center gap-1.5 rounded-xl border p-4 text-sm font-medium transition ${form.tripType === id ? "border-saffron bg-saffron/10 text-navy" : "hover:border-saffron/60 hover:bg-secondary/40"}`}>
                      <Icon className="h-5 w-5 text-saffron" />{id}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className={label}><Wallet className="inline h-4 w-4 mr-1" />Budget range</p>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {budgets.map(b => (
                    <button type="button" key={b} onClick={() => set("budget", b)}
                      className={`rounded-lg border px-4 py-3 text-sm font-medium text-left transition ${form.budget === b ? "border-saffron bg-saffron/10 text-navy" : "hover:border-saffron/60"}`}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3 — Preferences */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-saffron/15 text-saffron"><Hotel className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">Travel preferences</h2>
                  <p className="text-sm text-muted-foreground">Optional — skip what doesn't apply.</p>
                </div>
              </div>
              <div>
                <label className={label} htmlFor="transport"><Bus className="inline h-4 w-4 mr-1" />Transportation</label>
                <select id="transport" className={field} value={form.transport} onChange={e => set("transport", e.target.value)}>
                  <option value="">Select...</option>
                  {transports.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="hotel">Hotel preference</label>
                <select id="hotel" className={field} value={form.hotel} onChange={e => set("hotel", e.target.value)}>
                  <option value="">Select...</option>
                  {hotels.map(h => <option key={h}>{h}</option>)}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="notes"><MessageSquare className="inline h-4 w-4 mr-1" />Additional requests</label>
                <textarea id="notes" rows={4} maxLength={1500} className={field} value={form.notes} onChange={e => set("notes", e.target.value)} placeholder="Special meals, accessibility needs, must-see temples, language preference…" />
              </div>
            </div>
          )}

          {/* Step 4 — Contact */}
          {step === 4 && (
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-saffron/15 text-saffron"><CheckCircle2 className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">Almost there — your details</h2>
                  <p className="text-sm text-muted-foreground">We'll respond within 2–4 hours with a custom plan.</p>
                </div>
              </div>
              <div><label className={label} htmlFor="name">Full name</label><input id="name" className={field} value={form.name} onChange={e => set("name", e.target.value)} required maxLength={100} /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className={label} htmlFor="phone">Phone</label><input id="phone" type="tel" className={field} value={form.phone} onChange={e => set("phone", e.target.value)} required maxLength={20} /></div>
                <div><label className={label} htmlFor="email">Email</label><input id="email" type="email" className={field} value={form.email} onChange={e => set("email", e.target.value)} required maxLength={150} /></div>
              </div>
              <div className="rounded-lg bg-secondary/60 p-4 text-xs text-muted-foreground">
                <p className="font-semibold text-navy mb-1">Trip summary</p>
                <p>{form.destination || "—"} · {form.travellers} traveller(s) · {form.tripType || "—"} · {form.budget || "—"}</p>
              </div>
            </div>
          )}

          {/* Nav */}
          <div className="mt-8 flex items-center justify-between gap-3">
            <button type="button" onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0}
              className="inline-flex items-center gap-1 rounded-md border px-4 py-2.5 text-sm font-semibold disabled:opacity-40 hover:bg-secondary transition">
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
            {step < total - 1 ? (
              <button type="button" disabled={!canNext()} onClick={() => setStep(s => s + 1)}
                className="inline-flex items-center gap-1 rounded-md bg-navy text-navy-foreground px-5 py-2.5 text-sm font-semibold hover:bg-navy/90 disabled:opacity-50 transition">
                Continue <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button type="submit" disabled={!canNext() || submitting}
                className="inline-flex items-center gap-2 rounded-md bg-saffron px-6 py-2.5 text-sm font-bold text-saffron-foreground shadow-lg shadow-saffron/30 hover:brightness-95 disabled:opacity-60 transition">
                {submitting ? "Sending..." : "Get My Custom Plan"} <Sparkles className="h-4 w-4" />
              </button>
            )}
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">Prefer to chat? <a className="text-saffron font-semibold hover:underline" href="/contact">Contact us directly</a> — or use the WhatsApp button.</p>
      </section>
    </>
  );
}