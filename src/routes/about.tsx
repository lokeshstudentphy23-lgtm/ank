import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Bus, MapPin, ShieldCheck, Heart, Users, Sparkles } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { HERO_IMAGES } from "@/lib/site";
import busExterior from "@/assets/bus-exterior.jpeg";
import busInterior1 from "@/assets/bus-interior-1.jpeg";
import busInterior2 from "@/assets/bus-interior-2.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Aarya Neelkamal Tours and Travels — 30+ Years of Travel Excellence in Varanasi, UP & Nepal" },
      { name: "description", content: "Learn about Aarya Neelkamal Tours and Travels, a Varanasi-based travel operator with 30+ years of experience in pilgrimages, group tours, and bus hire across India and Nepal." },
      { name: "keywords", content: "about Varanasi travel company, pilgrimage operator UP, group tour company Varanasi, bus operator Nepal" },
      { property: "og:title", content: "About Aarya Neelkamal Tours and Travels" },
      { property: "og:description", content: "30+ years of heritage in pilgrimage and group travel from Varanasi." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Hero
        image={HERO_IMAGES.about}
        imageAlt="Sacred temple architecture"
        eyebrow="About Us"
        title={<>Three decades.<br />One devotion: your journey.</>}
        subtitle="Born in the lanes of Varanasi, we have spent 30+ years guiding pilgrims and travellers across India and Nepal — from the ghats of Kashi to the temples of Pashupatinath."
      />

      <section className="border-y bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[["30+","Years"],["30+","Buses"],["1000+","Trips"],["All India","& Nepal"]].map(([k,v]) => (
            <div key={v}><div className="text-3xl font-bold text-navy">{k}</div><div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">{v}</div></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold">Our Fleet</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Owned, maintained, and GPS-tracked — every bus is ready for pilgrimages, school tours, weddings, and corporate trips. See full hire details on the <Link to="/bus-hire" className="text-saffron hover:underline">Bus Hire</Link> page.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { src: busExterior, caption: "Neelkamal — All India Tourist Permit Coach", alt: "Aarya Neelkamal tourist coach exterior with All India Tourist Permit" },
            { src: busInterior1, caption: "Premium AARYA branded interior with mood lighting", alt: "Aarya bus interior with branded headrests and ambient lighting" },
            { src: busInterior2, caption: "Spacious cabin for long pilgrimage circuits", alt: "Spacious bus interior for long-distance pilgrimage tours" },
          ].map((b, i) => (
            <figure key={i} className="card-lift rounded-xl overflow-hidden bg-card border">
              <img src={b.src} alt={b.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-3 text-sm text-muted-foreground">{b.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/bus-hire" className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:underline">View Full Fleet &amp; Pricing →</Link>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Award, t: "Experienced Team", d: "30+ years guiding pilgrimages and group travel." },
              { icon: Bus, t: "Own Fleet", d: "30+ buses, no third-party dependence." },
              { icon: MapPin, t: "All-India Coverage", d: "Pan-India and Nepal routes covered." },
              { icon: Users, t: "Trusted by Thousands", d: "1000+ trips and counting." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-card rounded-xl p-6 card-lift">
                <Icon className="h-8 w-8 text-saffron" />
                <h3 className="mt-3 font-bold text-navy">{t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Safety", d: "Every vehicle is GPS-tracked, insured, and driven by verified, experienced professionals." },
            { icon: Award, t: "Reliability", d: "30+ years of on-time departures, transparent billing, and zero hidden charges." },
            { icon: Sparkles, t: "Comfort", d: "Pushback seats, AC coaches, and premium interiors that make long journeys feel shorter." },
            { icon: Heart, t: "Devotion", d: "We treat every pilgrimage as sacred — handled with the care and respect it deserves." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card rounded-xl p-6 card-lift text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-saffron/10 mx-auto">
                <Icon className="h-7 w-7 text-saffron" />
              </div>
              <h3 className="mt-4 font-bold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
