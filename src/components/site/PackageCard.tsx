import { Link } from "@tanstack/react-router";
import { buildWhatsAppLink, PACKAGE_IMAGES, type Pkg } from "@/lib/site";
import { Clock, IndianRupee, MessageCircle, ArrowRight } from "lucide-react";

const tagColor = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("popular")) return "bg-saffron text-saffron-foreground";
  if (t.includes("premium") || t.includes("luxury")) return "bg-navy text-navy-foreground";
  if (t.includes("budget")) return "bg-emerald-600 text-white";
  if (t.includes("nepal")) return "bg-rose-600 text-white";
  if (t.includes("buddhist")) return "bg-amber-600 text-white";
  if (t.includes("circuit") || t.includes("group")) return "bg-indigo-600 text-white";
  if (t.includes("hidden")) return "bg-teal-600 text-white";
  return "bg-secondary text-secondary-foreground";
};

export function PackageCard({ pkg }: { pkg: Pkg }) {
  const img = PACKAGE_IMAGES[pkg.id];
  return (
    <article className="group card-lift bg-card rounded-2xl overflow-hidden flex flex-col border">
      <div className="relative aspect-[5/3] overflow-hidden bg-secondary">
        {img && (
          <img
            src={img}
            alt={pkg.alt}
            loading="lazy"
            decoding="async"
            width={1280}
            height={768}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow tracking-wide ${tagColor(pkg.tag)}`}>{pkg.tag}</span>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">{pkg.name}</h3>
          <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white font-medium [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{pkg.duration}</span>
            <span className="inline-flex items-center gap-1"><IndianRupee className="h-3.5 w-3.5" />{pkg.price.replace("From ₹","").replace("From ","")}</span>
          </div>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <ul className="space-y-1.5 text-sm text-foreground/80 flex-1">
          {pkg.highlights.slice(0,3).map(h => <li key={h}>• {h}</li>)}
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link to="/contact" className="inline-flex justify-center items-center gap-1.5 rounded-full bg-navy text-navy-foreground px-3 py-2.5 text-sm font-semibold hover:bg-navy/90 transition">
            Enquire <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={buildWhatsAppLink(`Hi, I am interested in the ${pkg.name} package. Please share details.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp about ${pkg.name}`}
            className="inline-flex justify-center items-center gap-1.5 rounded-full bg-[#25D366] text-white px-3 py-2.5 text-sm font-semibold hover:brightness-95 transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
