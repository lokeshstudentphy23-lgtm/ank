import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PackageCard } from "@/components/site/PackageCard";
import { Hero } from "@/components/site/Hero";
import { PACKAGES, HERO_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Pilgrimage Tour Packages | Varanasi, Ayodhya, Prayagraj, Gaya, Kathmandu, Pokhara" },
      { name: "description", content: "13 curated pilgrimage and group tour packages from Varanasi covering Kashi, Ayodhya, Prayagraj, Gaya, Naimisharanya, Janakpur, Kathmandu, Pokhara and full Nepal & UP circuits." },
      { name: "keywords", content: "Varanasi tour package, Ayodhya pilgrimage, Kathmandu tour, Pokhara package, Buddhist circuit tour, Nepal tour from Varanasi" },
      { property: "og:title", content: "Pilgrimage Tour Packages — Varanasi & Nepal" },
      { property: "og:description", content: "13 curated packages across India and Nepal." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context":"https://schema.org","@type":"ItemList",
        itemListElement: PACKAGES.map((p,i) => ({
          "@type":"ListItem", position: i+1,
          item: { "@type":"TouristTrip", name: p.name, description: p.highlights.join(", "), url: `/packages#${p.id}` }
        })),
      }),
    }],
  }),
  component: Packages,
});

const tabs = [
  { id: "all", label: "All" },
  { id: "pilgrimage", label: "Pilgrimage" },
  { id: "nepal", label: "Nepal" },
  { id: "circuit", label: "Multi-Day Circuits" },
  { id: "custom", label: "Custom" },
] as const;

function Packages() {
  const [filter, setFilter] = useState<string>("all");
  const items = filter === "all" ? PACKAGES : PACKAGES.filter(p => p.category === filter);
  return (
    <>
      <Hero
        image={HERO_IMAGES.packages}
        imageAlt="Travel destinations across India and Nepal"
        eyebrow="Tour Packages"
        height="sm"
        title="Pilgrimage & group tour packages"
        subtitle="Curated journeys to Varanasi, Ayodhya, Prayagraj, Gaya, Kathmandu, Pokhara and beyond."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(t => {
            const count = t.id === "all" ? PACKAGES.length : PACKAGES.filter(p => p.category === t.id).length;
            return (
              <button key={t.id} onClick={() => setFilter(t.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  filter === t.id
                    ? "bg-navy text-navy-foreground border-navy scale-[1.04] shadow-md"
                    : "bg-card hover:border-saffron hover:text-saffron hover:scale-[1.02]"
                }`}>
                {t.label}
                {count > 0 && t.id !== "custom" && (
                  <span className={`ml-1.5 text-[11px] font-bold opacity-70`}>({count})</span>
                )}
              </button>
            );
          })}
        </div>

        {filter === "custom" ? (
          <div className="bg-card rounded-xl p-10 text-center card-lift">
            <h2 className="text-2xl font-bold">Custom & Special Requests</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Building a private pilgrimage, school tour, or wedding-baraat circuit? Tell us your route and we'll design it for you.</p>
            <Link to="/plan-trip" className="mt-5 inline-flex rounded-md bg-saffron px-5 py-3 text-sm font-semibold text-saffron-foreground">Request a Custom Itinerary</Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(p => <div key={p.id} id={p.id}><PackageCard pkg={p} /></div>)}
          </div>
        )}
      </section>
    </>
  );
}
