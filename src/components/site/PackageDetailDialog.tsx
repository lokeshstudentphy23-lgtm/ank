import { ReactNode, useState } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { buildWhatsAppLink, PACKAGE_IMAGES, type Pkg } from "@/lib/site";
import { Clock, IndianRupee, MapPin, MessageCircle, ArrowRight } from "lucide-react";

type Props = { pkg: Pkg; trigger: ReactNode };

export function PackageDetailDialog({ pkg, trigger }: Props) {
  const [open, setOpen] = useState(false);
  const img = PACKAGE_IMAGES[pkg.id];
  const wa = buildWhatsAppLink(`Hi, I am interested in the ${pkg.name} package. Please share details.`);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0 max-h-[90vh] flex flex-col">
        {img && (
          <div className="relative aspect-[16/9] bg-secondary shrink-0">
            <img src={img} alt={pkg.alt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="inline-block text-[11px] font-semibold tracking-wide bg-saffron text-saffron-foreground rounded-full px-2.5 py-0.5">{pkg.tag}</span>
            </div>
          </div>
        )}
        <div className="p-6 overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-navy">{pkg.name}</DialogTitle>
            <DialogDescription className="flex flex-wrap gap-x-5 gap-y-1 text-sm pt-1">
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4 text-saffron" />{pkg.duration}</span>
              <span className="inline-flex items-center gap-1"><IndianRupee className="h-4 w-4 text-saffron" />{pkg.price.replace("From ₹","").replace("From ","")}</span>
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-saffron" />Departs Varanasi</span>
            </DialogDescription>
          </DialogHeader>

          <Accordion type="single" collapsible defaultValue="highlights" className="mt-4">
            <AccordionItem value="highlights">
              <AccordionTrigger>Trip Highlights</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1.5 text-sm text-foreground/85">
                  {pkg.highlights.map(h => <li key={h}>• {h}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="inclusions">
              <AccordionTrigger>Inclusions</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1.5 text-sm text-foreground/85">
                  <li>• Comfortable AC coach with verified driver</li>
                  <li>• Hotel accommodation (as per package tier)</li>
                  <li>• Daily breakfast & select meals</li>
                  <li>• Temple darshan assistance & local guide</li>
                  <li>• All applicable tolls, parking & driver allowance</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="exclusions">
              <AccordionTrigger>Exclusions</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1.5 text-sm text-foreground/85">
                  <li>• Personal expenses & tips</li>
                  <li>• Special pooja or VIP darshan fees</li>
                  <li>• Anything not mentioned in inclusions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 sticky bottom-0 -mx-6 -mb-6 px-6 py-4 bg-card border-t grid grid-cols-2 gap-2">
            <Link to="/contact" onClick={() => setOpen(false)}
              className="inline-flex justify-center items-center gap-1.5 rounded-full bg-navy text-navy-foreground px-3 py-2.5 text-sm font-semibold hover:bg-navy/90 transition">
              Enquire <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-1.5 rounded-full bg-[#25D366] text-white px-3 py-2.5 text-sm font-semibold hover:brightness-95 transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}