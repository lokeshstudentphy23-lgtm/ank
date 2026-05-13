import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { COMPANY } from "@/lib/site";
import { submitInquiry } from "@/lib/submissions";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact [COMPANY NAME] | Book Pilgrimage Tours & Bus Hire from Varanasi" },
      { name: "description", content: "Contact [COMPANY NAME] in Varanasi to book pilgrimage tours, group travel and bus hire. Call, WhatsApp, or send an enquiry — we respond in 2–4 hours." },
      { name: "keywords", content: "contact Varanasi travel agent, book pilgrimage Varanasi, bus hire enquiry, Nepal tour booking" },
      { property: "og:title", content: "Contact [COMPANY NAME]" },
      { property: "og:description", content: "Reach our Varanasi team for tours and bus hire." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({ "@context":"https://schema.org","@type":"ContactPage", name:"Contact "+COMPANY.name }),
    }],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);
    try {
      await submitInquiry({
        full_name: String(fd.get("name") ?? "").trim(),
        email: String(fd.get("email") ?? "").trim(),
        phone: String(fd.get("phone") ?? "").trim(),
        travel_type: (fd.get("type") as string) || null,
        destination: (fd.get("dest") as string) || null,
        travel_date: (fd.get("date") as string) || null,
        travellers: fd.get("travellers") ? Number(fd.get("travellers")) : null,
        message: (fd.get("msg") as string) || null,
      });
      form.reset();
      toast.success("Enquiry sent!", { description: "Our team will reach out within 2–4 hours." });
    } catch (err) {
      toast.error("Could not send enquiry", {
        description: err instanceof Error ? err.message : "Please try again or call us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const field = "mt-1 w-full rounded-md border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron";
  const label = "block text-sm font-medium";

  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-saffron font-semibold uppercase tracking-wide text-sm">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">Plan your journey with us</h1>
          <p className="mt-3 max-w-2xl opacity-90">Tell us where you'd like to go. We typically respond within 2–4 hours.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 sm:p-8 border space-y-4 card-lift">
          <h2 className="text-2xl font-bold">Send an Enquiry</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className={label} htmlFor="name">Full Name</label><input id="name" name="name" required maxLength={100} className={field} /></div>
            <div><label className={label} htmlFor="phone">Phone Number</label><input id="phone" name="phone" required type="tel" maxLength={20} className={field} /></div>
          </div>
          <div><label className={label} htmlFor="email">Email Address</label><input id="email" name="email" required type="email" maxLength={150} className={field} /></div>
          <div>
            <label className={label} htmlFor="type">Type of Travel</label>
            <select id="type" name="type" required className={field} defaultValue="">
              <option value="" disabled>Select...</option>
              <option>Personal / Family Trip</option>
              <option>Pilgrimage / Religious Tour</option>
              <option>Vacation / Holiday</option>
              <option>Group / Bulk Booking</option>
              <option>Corporate / Office Trip</option>
              <option>Bus Hire / Charter</option>
              <option>Custom / Special Request</option>
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className={label} htmlFor="dest">Travel Destination</label><input id="dest" name="dest" maxLength={150} className={field} placeholder="e.g. Varanasi, Kathmandu" /></div>
            <div><label className={label} htmlFor="date">Travel Date</label><input id="date" name="date" type="date" className={field} /></div>
          </div>
          <div><label className={label} htmlFor="travellers">Number of Travellers</label><input id="travellers" name="travellers" type="number" min={1} max={500} className={field} /></div>
          <div><label className={label} htmlFor="msg">Message / Special Requirements</label><textarea id="msg" name="msg" rows={4} maxLength={2000} className={field} /></div>
          <button disabled={submitting} className="w-full rounded-md bg-saffron px-5 py-3 text-sm font-semibold text-saffron-foreground hover:brightness-95 disabled:opacity-60">
            {submitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>

        <aside className="space-y-6">
          <div className="bg-card rounded-2xl border p-6 sm:p-8 card-lift">
            <div className="h-16 w-16 rounded-md placeholder-gradient flex items-center justify-center text-xs font-bold">LOGO</div>
            <h2 className="mt-4 text-2xl font-bold">{COMPANY.name}</h2>
            <p className="text-sm text-muted-foreground">{COMPANY.tagline}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-saffron mt-0.5" /><span>{COMPANY.phone}</span></li>
              <li className="flex items-start gap-3"><MessageCircle className="h-5 w-5 text-saffron mt-0.5" /><a className="hover:text-saffron" href={COMPANY.whatsappLink}>{COMPANY.whatsapp}</a></li>
              <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-saffron mt-0.5" /><span>{COMPANY.email}</span></li>
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-saffron mt-0.5" /><span>{COMPANY.address}</span></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={COMPANY.whatsappLink} aria-label="WhatsApp" className="rounded-full bg-secondary p-2 hover:bg-saffron hover:text-saffron-foreground"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="rounded-full bg-secondary p-2 hover:bg-saffron hover:text-saffron-foreground"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-secondary p-2 hover:bg-saffron hover:text-saffron-foreground"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="rounded-full bg-secondary p-2 hover:bg-saffron hover:text-saffron-foreground"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-card card-lift">
            <div className="aspect-[16/10] placeholder-gradient-soft flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 mx-auto" />
                <p className="mt-2 font-semibold">[GOOGLE MAP PLACEHOLDER]</p>
                <p className="text-xs opacity-80">Embed coordinates: 25.3176, 82.9739 (Varanasi)</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
