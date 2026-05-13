import { Link } from "@tanstack/react-router";
import { Placeholder } from "./Placeholder";
import type { Pkg } from "@/lib/site";
import { Clock, IndianRupee } from "lucide-react";

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
  return (
    <article className="card-lift bg-card rounded-xl overflow-hidden flex flex-col">
      <div className="relative">
        <Placeholder aspect="aspect-[5/3]" label={`PACKAGE PHOTO — ${pkg.name}`} alt={pkg.alt} />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor(pkg.tag)}`}>{pkg.tag}</span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-navy">{pkg.name}</h3>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{pkg.duration}</span>
          <span className="inline-flex items-center gap-1"><IndianRupee className="h-4 w-4" />{pkg.price.replace("From ₹","").replace("From ","")}</span>
        </div>
        <ul className="mt-3 space-y-1 text-sm text-foreground/80 flex-1">
          {pkg.highlights.slice(0,3).map(h => <li key={h}>• {h}</li>)}
        </ul>
        <Link to="/contact" className="mt-4 inline-flex justify-center items-center rounded-md bg-navy text-navy-foreground px-4 py-2 text-sm font-semibold hover:bg-navy/90 transition">
          Enquire Now
        </Link>
      </div>
    </article>
  );
}
