import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { PackageCard } from "@/components/site/PackageCard";
import { PACKAGES, COMPANY, CITIES, HERO_IMAGES } from "@/lib/site";
import { Bus, Award, Users, MapPin, Mountain, Landmark, Sparkles, Flame } from "lucide-react";
import fleetTouristCoach from "@/assets/fleet-tourist-coach.jpg";
import fleetTravellerVan from "@/assets/fleet-traveller-van.jpg";
import fleetTravellerInterior from "@/assets/fleet-traveller-interior.jpg";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { Reveal } from "@/components/site/Reveal";
import { RouteShowcase } from "@/components/site/RouteShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarya Neelkamal Tours and Travels | Pilgrimage & Group Tours from Varanasi | 30+ Years Trusted Travel" },
      { name: "description", content: "Varanasi-based pilgrimage tour operator with 30+ years of experience. Curated tours to Kashi, Ayodhya, Prayagraj, Gaya, Kathmandu & Pokhara with our own fleet of 30+ buses." },
      { name: "keywords", content: "pilgrimage tours Varanasi, Kashi tour package, Ayodhya tour, Nepal tour from Varanasi, bus hire Varanasi, group travel UP" },
      { property: "og:title", content: "Aarya Neelkamal Tours and Travels — Pilgrimage & Group Tours from Varanasi" },
      { property: "og:description", content: "30+ years of trusted pilgrimage and group travel across India and Nepal." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context":"https://schema.org","@type":"LocalBusiness",
        name: COMPANY.name,
        description: "30+ year pilgrimage and group tour operator based in Varanasi",
        address: COMPANY.address, telephone: COMPANY.phone,
        areaServed: ["Varanasi","Prayagraj","Ayodhya","Lucknow","Gaya","Patna","Gorakhpur","Kathmandu","Pokhara","Janakpur","All India"],
        priceRange: "₹₹–₹₹₹₹",
        foundingDate: COMPANY.foundingYear,
      }),
    }],
  }),
  component: Home,
});

const featured = PACKAGES.filter(p => ["varanasi-mid","ayodhya","kathmandu"].includes(p.id));
const circuits = [
  { icon: Flame, name: "Kashi" },
  { icon: Mountain, name: "Nepal" },
  { icon: Landmark, name: "Buddhist Circuit" },
  { icon: Sparkles, name: "Char Dham" },
];

function Home() {
  return (
    <>
      <Hero
        image={HERO_IMAGES.home}
        imageAlt="Ganga Aarti at Varanasi — pilgrimage tours"
        eyebrow="From the heart of Kashi · Est. 1995"
        height="lg"
        title={<>Sacred journeys,<br /><span className="text-gold">crafted with devotion.</span></>}
        subtitle="Pilgrimage, leisure, and group tours across India and Nepal — backed by 30+ years of experience and our own fleet of 30+ premium coaches."
      >
        <Link to="/packages" className="rounded-full bg-gold text-gold-foreground px-7 py-3.5 text-sm font-semibold hover:brightness-105 shadow-xl shadow-black/30 transition">Explore Packages</Link>
        <Link to="/plan-trip" className="rounded-full border border-white/50 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition">Plan Your Trip</Link>
      </Hero>

      <section className="bg-navy text-navy-foreground" aria-label="Trust indicators">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: Award, num: 30, suffix: "+", v: "Years Experience" },
            { icon: Bus,   num: 30, suffix: "+", v: "Owned Buses" },
            { icon: Users, num: 1000, suffix: "+", v: "Happy Travellers" },
            { icon: MapPin, label: "All India", v: "& Nepal Coverage" },
          ].map(({ icon: Icon, num, suffix, label, v }, i) => (
            <Reveal key={v} delay={i * 80} className="flex flex-col items-center gap-1">
              <Icon className="h-6 w-6 text-saffron" />
              <div className="font-bold text-lg">
                {typeof num === "number"
                  ? <AnimatedCounter end={num} suffix={suffix} />
                  : label}
              </div>
              <div className="text-xs opacity-80">{v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <RouteShowcase />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="eyebrow text-saffron mb-2">Curated Pilgrimage</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Pilgrimage Packages</h2>
            <div className="gold-divider w-24 mt-3" />
            <p className="text-muted-foreground mt-4 max-w-xl">Handpicked journeys, led by Varanasi's most experienced operators.</p>
          </div>
          <Link to="/packages" className="text-sm font-semibold text-navy hover:text-saffron">View All Packages →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}><PackageCard pkg={p} /></Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-center">Pilgrimage Circuits</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {circuits.map(({ icon: Icon, name }) => (
              <div key={name} className="bg-card rounded-lg p-6 text-center card-lift">
                <Icon className="h-8 w-8 mx-auto text-saffron" />
                <div className="mt-3 font-semibold text-navy">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-saffron mb-2">Pilgrim Voices</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Trusted by families across India</h2>
          <div className="gold-divider w-24 mt-3 mx-auto" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { initials: "RS", name: "Ramesh Sharma", loc: "Delhi", quote: "Our family Chardham yatra was managed end-to-end — clean coach, punctual driver, and not a single hiccup across 12 days." },
            { initials: "MP", name: "Meena Patel", loc: "Ahmedabad", quote: "We did the Kashi–Ayodhya–Prayag circuit with 36 relatives. The team handled hotels, darshan slots and meals with remarkable care." },
            { initials: "AK", name: "Anand Kulkarni", loc: "Pune", quote: "Booked the Nepal circuit for our parents. The Tempo Traveller was premium, drivers were respectful and the itinerary was beautifully paced." },
          ].map((t) => (
            <Reveal key={t.name}>
              <article className="bg-card rounded-xl p-6 card-lift h-full">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full placeholder-gradient flex items-center justify-center text-xs font-bold">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.loc}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/80 italic leading-relaxed">"{t.quote}"</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-center">Cities We Serve</h2>
          <p className="text-center text-muted-foreground mt-2">Tours and bus hire across India and Nepal.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {CITIES.map(c => (
              <Link key={c} to="/packages" className="rounded-full bg-card px-4 py-2 text-sm font-medium border hover:border-saffron hover:text-saffron transition">
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="eyebrow text-saffron mb-2">Owned Fleet</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Comfort, Safety, Zero Compromise</h2>
          <div className="gold-divider w-24 mt-3 mx-auto" />
          <p className="text-muted-foreground mt-4">A glimpse of our owned fleet. Read more on the <Link to="/about" className="text-saffron hover:underline">About</Link> page or <Link to="/bus-hire" className="text-saffron hover:underline">hire a bus</Link>.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { src: fleetTouristCoach, caption: "AARYA Luxury Tourist Coach — All India Permit", alt: "Aarya Neelkamal luxury tourist coach with All India Tourist Permit, parked in Varanasi" },
            { src: fleetTravellerVan, caption: "Jannet Tempo Traveller — Group Pilgrimage", alt: "Premium Tempo Traveller for small group pilgrimage tours" },
            { src: fleetTravellerInterior, caption: "AC Cabin with Entertainment & Pushback Seats", alt: "Traveller interior showing pushback leather seats, LED roof lighting and entertainment screen" },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="card-lift rounded-2xl overflow-hidden bg-card border group">
                <div className="overflow-hidden">
                  <img src={b.src} alt={b.alt} loading="lazy" width={1280} height={768} className="aspect-[5/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="p-4 text-sm text-center text-navy font-semibold">{b.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={HERO_IMAGES.home} alt="Plan your sacred journey" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Begin your journey</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-white">Let our 30 years of experience plan your next pilgrimage.</h2>
            <div className="gold-divider w-24 mt-5" />
            <p className="mt-5 text-white/85 max-w-xl">From Kashi to Kathmandu, family yatra to corporate offsite — we craft journeys that travel with care.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/plan-trip" className="rounded-full bg-gold text-gold-foreground px-7 py-3.5 text-sm font-semibold hover:brightness-105 shadow-xl">Plan Your Trip</Link>
              <Link to="/contact" className="rounded-full border border-white/50 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15">Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
