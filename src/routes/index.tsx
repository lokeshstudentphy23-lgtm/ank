import { createFileRoute, Link } from "@tanstack/react-router";
import { Placeholder } from "@/components/site/Placeholder";
import { PackageCard } from "@/components/site/PackageCard";
import { PACKAGES, COMPANY, CITIES } from "@/lib/site";
import { Bus, Award, Users, MapPin, Mountain, Landmark, Sparkles, Flame } from "lucide-react";
import busExterior from "@/assets/bus-exterior.jpeg";
import busInterior1 from "@/assets/bus-interior-1.jpeg";
import busInterior2 from "@/assets/bus-interior-2.jpeg";

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
      <section className="relative overflow-hidden">
        <Placeholder aspect="aspect-[16/9] md:aspect-[21/9]" label="HERO BANNER — Varanasi Ghats at Sunrise" alt="Varanasi Ganga ghats sunrise pilgrimage tour banner" className="!rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-navy-foreground">
              <p className="text-saffron font-semibold tracking-wide uppercase text-sm">From the heart of Kashi</p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Sacred journeys, <span className="text-saffron">crafted with devotion.</span>
              </h1>
              <p className="mt-4 text-lg opacity-90">
                Pilgrimage, leisure, and group tours across India and Nepal — backed by 30+ years of experience and our own fleet of 30+ buses.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/packages" className="rounded-md bg-saffron text-saffron-foreground px-5 py-3 text-sm font-semibold hover:brightness-95">Explore Packages</Link>
                <Link to="/contact" className="rounded-md border border-white/30 bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold hover:bg-white/20">Plan Your Trip</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground" aria-label="Trust indicators">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: Award, k: "30+", v: "Years Experience" },
            { icon: Bus, k: "30+", v: "Owned Buses" },
            { icon: Users, k: "1000+", v: "Happy Travellers" },
            { icon: MapPin, k: "All India", v: "& Nepal Coverage" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={v} className="flex flex-col items-center gap-1">
              <Icon className="h-6 w-6 text-saffron" />
              <div className="font-bold text-lg">{k}</div>
              <div className="text-xs opacity-80">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Pilgrimage Packages</h2>
            <p className="text-muted-foreground mt-2">Handpicked journeys, led by Varanasi's most experienced operators.</p>
          </div>
          <Link to="/packages" className="text-sm font-semibold text-navy hover:text-saffron">View All Packages →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map(p => <PackageCard key={p.id} pkg={p} />)}
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
        <h2 className="text-3xl font-bold text-center">What Travellers Say</h2>
        <p className="text-center text-muted-foreground mt-2">Real testimonials from our pilgrims will appear here.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1,2,3].map(i => (
            <article key={i} className="bg-card rounded-xl p-6 card-lift">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full placeholder-gradient flex items-center justify-center text-xs font-bold">AVT</div>
                <div>
                  <div className="font-semibold">[NAME PLACEHOLDER]</div>
                  <div className="text-xs text-muted-foreground">[LOCATION]</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground/80 italic">[TESTIMONIAL {i} — text placeholder]</p>
            </article>
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
        <h2 className="text-3xl font-bold text-center">Our Fleet — Comfort, Safety, Zero Compromise</h2>
        <p className="text-center text-muted-foreground mt-2">A glimpse of our owned fleet. Read more on the <Link to="/about" className="text-saffron hover:underline">About</Link> page or <Link to="/bus-hire" className="text-saffron hover:underline">hire a bus</Link>.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { src: busExterior, caption: "All India Tourist Permit Coach", alt: "Neelkamal All India Tourist Permit coach exterior" },
            { src: busInterior1, caption: "Premium Branded Interior", alt: "Aarya branded bus interior with ambient lighting" },
            { src: busInterior2, caption: "Spacious Group Cabin", alt: "Spacious bus interior for pilgrimage groups" },
          ].map((b, i) => (
            <figure key={i} className="card-lift rounded-xl overflow-hidden bg-card border">
              <img src={b.src} alt={b.alt} loading="lazy" className="aspect-[5/3] w-full object-cover" />
              <figcaption className="p-3 text-sm text-center text-muted-foreground">{b.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
