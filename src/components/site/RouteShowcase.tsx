import { Reveal } from "@/components/site/Reveal";
import { buildWhatsAppLink } from "@/lib/site";
import { Link } from "@tanstack/react-router";
import { MessageCircle, MapPin, Bus } from "lucide-react";

import routeAgra from "@/assets/route-agra.jpg";
import routeVrindavan from "@/assets/route-vrindavan.jpg";
import routeChardham from "@/assets/route-chardham.jpg";
import routePuri from "@/assets/route-puri.jpg";
import routeKolkata from "@/assets/route-kolkata.jpg";
import routeSouthIndia from "@/assets/route-south-india.jpg";
import routeDelhi from "@/assets/route-delhi.jpg";
import routeBhubaneswar from "@/assets/route-bhubaneswar.jpg";
import routeBaijnath from "@/assets/route-baijnath.jpg";
import pkgAyodhya from "@/assets/pkg-ayodhya.jpg";
import pkgPrayagraj from "@/assets/pkg-prayagraj.jpg";
import pkgGaya from "@/assets/pkg-gaya.jpg";
import pkgNaimisharanya from "@/assets/pkg-naimisharanya.jpg";
import fleetTouristCoach from "@/assets/fleet-tourist-coach.jpg";

type Route = {
  name: string;
  region: string;
  image: string;
  description: string;
  alt: string;
};

const ROUTES: Route[] = [
  { name: "Ayodhya", region: "Ram Mandir Darshan", image: pkgAyodhya,
    description: "Daily and group services to the sacred birthplace of Lord Ram.",
    alt: "Ayodhya Ram Mandir pilgrimage route" },
  { name: "Prayagraj", region: "Triveni Sangam", image: pkgPrayagraj,
    description: "Regular coach services to the holy confluence of Ganga, Yamuna & Saraswati.",
    alt: "Prayagraj Triveni Sangam route" },
  { name: "Naimisharanya", region: "Sacred Forest", image: pkgNaimisharanya,
    description: "Comfortable transport to Chakra Teertha and the 88,000 sages' tapobhumi.",
    alt: "Naimisharanya pilgrimage route" },
  { name: "Agra", region: "Taj Mahal & Heritage", image: routeAgra,
    description: "Premium coaches to the city of the world's most iconic monument.",
    alt: "Agra Taj Mahal travel route" },
  { name: "Mathura & Vrindavan", region: "Krishna Bhoomi", image: routeVrindavan,
    description: "Devotional yatra to Banke Bihari, Prem Mandir and the leelas of Krishna.",
    alt: "Mathura Vrindavan Krishna temple route" },
  { name: "Delhi", region: "Capital Connect", image: routeDelhi,
    description: "Long-distance group transport with rest stops and experienced drivers.",
    alt: "Delhi long distance bus route" },
  { name: "Chardham Yatra", region: "Himalayan Pilgrimage", image: routeChardham,
    description: "Yamunotri • Gangotri • Kedarnath • Badrinath — full circuit coaches.",
    alt: "Chardham yatra Himalayan pilgrimage route" },
  { name: "Gaya & Bodh Gaya", region: "Hindu & Buddhist", image: pkgGaya,
    description: "Vishnupad Temple, Mahabodhi & Pind Daan services from Varanasi.",
    alt: "Gaya Vishnupad Mahabodhi route" },
  { name: "Baidyanath Dham", region: "Jyotirlinga • Deoghar", image: routeBaijnath,
    description: "Group transport for Shravani Mela and year-round Baba Dham darshan.",
    alt: "Baidyanath Dham Deoghar Jyotirlinga route" },
  { name: "Kolkata", region: "Eastern Gateway", image: routeKolkata,
    description: "Cross-state coach services to the cultural heart of Bengal.",
    alt: "Kolkata Howrah long route bus service" },
  { name: "Bhubaneswar", region: "Temple City of India", image: routeBhubaneswar,
    description: "Onward services to Lingaraj, Konark & the Odisha heritage circuit.",
    alt: "Bhubaneswar temple route" },
  { name: "Puri", region: "Jagannath Dham", image: routePuri,
    description: "Char Dham pilgrimage to the sacred abode of Lord Jagannath.",
    alt: "Puri Jagannath Temple route" },
  { name: "Chennai & Tamil Nadu", region: "South Temple Circuit", image: routeSouthIndia,
    description: "Madurai, Rameshwaram, Tirupati & Kanchipuram — South India yatra.",
    alt: "Tamil Nadu South India temple tour route" },
  { name: "Andhra Pradesh", region: "Tirupati & Beyond", image: fleetTouristCoach,
    description: "Tirumala Balaji darshan and onward South Indian pilgrimage routes.",
    alt: "Andhra Pradesh Tirupati pilgrimage route" },
];

function CTAs({ name }: { name: string }) {
  const wa = buildWhatsAppLink(`Hi, I'd like to plan a journey to ${name}. Please share route details and bus availability.`);
  return (
    <div className="mt-4 grid grid-cols-3 gap-1.5">
      <Link to="/plan-trip" className="rounded-md bg-navy text-navy-foreground text-[11px] font-semibold py-2 text-center hover:bg-navy/90 transition">Plan Journey</Link>
      <Link to="/bus-hire" className="rounded-md bg-gold text-gold-foreground text-[11px] font-semibold py-2 text-center hover:brightness-105 transition">Book Transport</Link>
      <a href={wa} target="_blank" rel="noopener noreferrer"
         className="rounded-md bg-[#25D366] text-white text-[11px] font-semibold py-2 text-center inline-flex items-center justify-center gap-1 hover:brightness-105 transition"
         aria-label={`Get route details for ${name} on WhatsApp`}>
        <MessageCircle className="h-3 w-3" aria-hidden /> Details
      </a>
    </div>
  );
}

export function RouteShowcase() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-saffron mb-2">All-India Network</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Popular Travel Routes &amp; Daily Services</h2>
          <div className="gold-divider w-24 mt-3 mx-auto" />
          <p className="text-muted-foreground mt-4">
            Trusted pilgrimage and group transport across India — from the ghats of Kashi to the temples of the South,
            from the Himalayas to the eastern coast.
          </p>
        </div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="mt-10 -mx-4 sm:mx-0 px-4 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0">
          {ROUTES.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i, 6) * 60}
              className="snap-start shrink-0 w-[78%] sm:w-auto">
              <article className="card-lift h-full rounded-2xl overflow-hidden bg-card border group flex flex-col">
                <div className="relative overflow-hidden aspect-[5/3]">
                  <img src={r.image} alt={r.alt} loading="lazy" width={1280} height={768}
                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gold font-semibold">
                      <MapPin className="h-3 w-3" aria-hidden /> {r.region}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>{r.name}</h3>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                  <div className="mt-auto"><CTAs name={r.name} /></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-navy text-navy-foreground p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <Bus className="h-7 w-7 text-saffron shrink-0 mt-0.5" aria-hidden />
            <div>
              <h3 className="font-display text-xl font-bold">All India Tour &amp; Transport Services</h3>
              <p className="text-sm opacity-85 mt-1">Daily routes, group bus hire, pilgrimage circuits & customised family travel — across every state.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link to="/plan-trip" className="rounded-full bg-gold text-gold-foreground px-5 py-2.5 text-sm font-semibold hover:brightness-105">Talk to Travel Expert</Link>
            <a href={buildWhatsAppLink("Hi, I'd like to check bus availability and route options.")} target="_blank" rel="noopener noreferrer"
               className="rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 hover:brightness-105">
              <MessageCircle className="h-4 w-4" aria-hidden /> Get Bus Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}