import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, ShieldCheck, Wifi, MapPin, Clock, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY, HERO_IMAGES } from "@/lib/site";
import { Hero } from "@/components/site/Hero";
import fleetTouristCoach from "@/assets/fleet-tourist-coach.jpg";
import fleetTravellerVan from "@/assets/fleet-traveller-van.jpg";
import fleetTravellerInterior from "@/assets/fleet-traveller-interior.jpg";
import heroFleet from "@/assets/hero-fleet.jpg";

export const Route = createFileRoute("/bus-hire")({
  head: () => ({
    meta: [
      { title: "Bus Hire for Pilgrimages & Group Tours | Varanasi to Nepal — All India Coverage" },
      { name: "description", content: "Hire a bus from Varanasi for pilgrimages, school tours, weddings & corporate trips. Mini bus to Volvo, AC & Semi-Sleeper. Owned fleet of 30+ buses. All India + Nepal." },
      { name: "keywords", content: "bus hire Varanasi, bus rental UP, Volvo bus hire, bus to Kathmandu, bus to Ayodhya, group bus booking, charter bus Nepal" },
      { property: "og:title", content: "Bus Hire — Varanasi to All India & Nepal" },
      { property: "og:description", content: "30+ owned buses. Pilgrimage, school, corporate & wedding charters." },
      { property: "og:url", content: "/bus-hire" },
    ],
    links: [{ rel: "canonical", href: "/bus-hire" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context":"https://schema.org","@type":"Service",
        serviceType: "Bus Charter and Group Transportation",
        provider: { "@type":"LocalBusiness", name: COMPANY.name },
        areaServed: ["Uttar Pradesh","Bihar","Uttarakhand","Delhi NCR","Rajasthan","Maharashtra","Tamil Nadu","Andhra Pradesh","Jammu & Kashmir","Nepal"],
      }),
    }],
  }),
  component: BusHire,
});

const fleet = [
  { name: "Tempo Traveller", seats: "12–20 seats", img: fleetTravellerVan, lines: ["Non-AC: from ₹3,500/day or ₹18/km", "AC: from ₹5,000/day or ₹25/km"] },
  { name: "Premium Traveller AC", seats: "13–17 seats", img: fleetTravellerInterior, lines: ["Pushback recliners + LED + Screen", "AC: from ₹6,200/day or ₹32/km"] },
  { name: "Medium Coach", seats: "21–32 seats", img: heroFleet, lines: ["Non-AC: from ₹4,500/day or ₹22/km", "AC: from ₹6,200/day or ₹32/km"] },
  { name: "Large Tourist Coach", seats: "33–45 seats", img: fleetTouristCoach, lines: ["Non-AC: from ₹5,500/day", "AC: from ₹7,800/day", "Semi-Sleeper: from ₹9,800/day"] },
  { name: "Luxury Coach", seats: "46–54 seats", img: fleetTouristCoach, lines: ["AC: from ₹11,000/day", "Semi-Sleeper: from ₹13,500/day"] },
  { name: "Volvo / Super Luxury", seats: "55+ seats", img: heroFleet, lines: ["Semi-Sleeper: from ₹17,000/day", "Luxury: from ₹22,000/day"] },
];

const routes = [
  ["Varanasi → Prayagraj","₹2,800 (Mini Non-AC)","₹18,000 (Volvo)"],
  ["Varanasi → Ayodhya","₹4,200","₹28,000"],
  ["Varanasi → Delhi","₹14,000","₹95,000"],
  ["Gorakhpur → Kathmandu","₹10,000","₹68,800"],
  ["Delhi → Haridwar","₹4,800","₹33,000"],
  ["Delhi → Amritsar","₹8,500","₹58,100"],
];

const steps = ["Enquire","Quotation (2–4 hrs)","Confirm + 25% Advance","Reconfirm 48 hrs Before","Travel","GST Invoice"];

function BusHire() {
  return (
    <>
      <Hero
        image={HERO_IMAGES.busHire}
        imageAlt="Premium tourist bus interior"
        eyebrow="Bus Hire"
        title="Any route. Any group size."
        subtitle="Owned fleet of 30+ buses. Pilgrimages, school tours, corporate outings, wedding baraat, and multi-day circuits across India and Nepal."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-bold">Our Fleet</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map(f => (
            <article key={f.name} className="bg-card rounded-xl overflow-hidden card-lift">
              <div className="relative">
                <img src={f.img} alt={`${f.name} for hire from Varanasi for pilgrimage and group tours`} loading="lazy" className="aspect-[5/3] w-full object-cover" />
                <span className="absolute top-3 left-3 rounded-full bg-navy/90 backdrop-blur text-navy-foreground text-[11px] font-bold px-3 py-1 shadow">{f.seats}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-navy">{f.name}</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {f.lines.map(l => <li key={l}>• {l}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-center">Use Cases</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Pilgrimages","School & College Tours","Corporate Outings","Wedding Baraat","One-Way Transfers","Multi-Day Circuits"].map(u => (
              <span key={u} className="rounded-full bg-card border px-4 py-2 text-sm font-medium">{u}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-bold">Popular Routes</h2>
        <p className="text-muted-foreground mt-2">Sample fares — exact quotation depends on bus category, halts, and dates.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr><th className="px-4 py-3 font-semibold">Route</th><th className="px-4 py-3 font-semibold">From</th><th className="px-4 py-3 font-semibold">Up to</th></tr>
            </thead>
            <tbody>
              {routes.map(r => (
                <tr key={r[0]} className="border-t"><td className="px-4 py-3 font-medium">{r[0]}</td><td className="px-4 py-3">{r[1]}</td><td className="px-4 py-3">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-saffron/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold">Bulk Booking Discounts</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[["2–3 buses","5% off"],["4–6 buses","8% off"],["7–10 buses","12% off"],["11+ buses","up to 20% off"]].map(([k,v]) => (
              <div key={k} className="bg-card rounded-xl p-5 text-center card-lift">
                <div className="text-sm text-muted-foreground">{k}</div>
                <div className="text-2xl font-bold text-navy mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-bold">What's Always Included</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: Bus, t: "Driver & Fuel" },
            { icon: ShieldCheck, t: "Insurance" },
            { icon: MapPin, t: "GPS Tracking" },
            { icon: Clock, t: "24/7 Breakdown Support" },
            { icon: CheckCircle2, t: "Clean Bus" },
            { icon: Wifi, t: "WhatsApp Updates" },
            { icon: FileText, t: "GST Invoice" },
            { icon: ShieldCheck, t: "Verified Drivers" },
          ].map(({icon:Icon,t}) => (
            <div key={t} className="flex items-center gap-3 bg-card rounded-lg p-4 border">
              <Icon className="h-5 w-5 text-saffron" /><span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl font-bold text-center">6-Step Booking Process</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <li key={s} className="relative bg-card rounded-xl p-5 text-center card-lift">
                <div className="mx-auto h-10 w-10 rounded-full bg-saffron text-saffron-foreground flex items-center justify-center font-bold">{i + 1}</div>
                <div className="mt-3 text-sm font-semibold">{s}</div>
                {/* Desktop connector arrow */}
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-saffron text-lg font-bold" aria-hidden>›</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold">Routes We Cover</h2>
        <p className="mt-3 text-foreground/80 leading-relaxed max-w-4xl">
          We operate bus hire services across Uttar Pradesh, Bihar, Uttarakhand, Delhi NCR, Rajasthan, Maharashtra,
          Tamil Nadu, Andhra Pradesh, Jammu & Kashmir, and international routes to Nepal including Kathmandu, Pokhara,
          Lumbini, Janakpur, and Muktinath. From short Varanasi airport transfers to multi-state pilgrimage circuits,
          our fleet handles every scale — see our <Link to="/packages" className="text-saffron hover:underline">tour packages</Link> for ready-made itineraries.
        </p>
        <div className="mt-8 text-center">
          <Link to="/contact" className="inline-flex rounded-md bg-saffron px-6 py-3 text-sm font-semibold text-saffron-foreground">Get a Quote</Link>
        </div>
      </section>
    </>
  );
}
