import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { COMPANY, HERO_IMAGES } from "@/lib/site";
import { Hero } from "@/components/site/Hero";
import { submitInquiry } from "@/lib/submissions";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Youtube, AlertCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(/^[0-9+\-\s()]{7,20}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address").max(150),
  type: z.string().min(1, "Please select a travel type"),
  dest: z.string().max(150).optional(),
  date: z.string().optional(),
  travellers: z.string().optional(),
  msg: z.string().max(2000).optional(),
  website: z.string().max(0, "Spam detected").optional(), // Honeypot
});
type FormValues = z.infer<typeof formSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aarya Neelkamal Tours and Travels | Book Pilgrimage Tours & Bus Hire from Varanasi" },
      { name: "description", content: "Contact Aarya Neelkamal Tours and Travels in Varanasi to book pilgrimage tours, group travel, bus hire, and premium car rentals. Call, WhatsApp, or send an enquiry — we respond in 2–4 hours." },
      { name: "keywords", content: "contact Varanasi travel agent, book pilgrimage Varanasi, bus hire enquiry, Nepal tour booking, car rental enquiry, airport transfer booking, chauffeur service" },
      { property: "og:title", content: "Contact Aarya Neelkamal Tours and Travels" },
      { property: "og:description", content: "Reach our Varanasi team for tours, bus hire, and premium car rentals." },
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { website: "", type: "" }
  });

  const onSubmit = async (data: FormValues) => {
    if (data.website) return; // Honeypot triggered
    setSubmitting(true);
    try {
      await submitInquiry({
        full_name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        travel_type: data.type,
        destination: data.dest || null,
        travel_date: data.date || null,
        travellers: data.travellers ? Number(data.travellers) : null,
        message: data.msg || null,
      });
      reset();
      toast.success("Enquiry sent!", { description: "Our team will reach out within 2–4 hours." });
      
      // Fallback WhatsApp Redirect if Formspree handles only email
      const waMsg = encodeURIComponent(`Hi, I just submitted an enquiry on your website.\nName: ${data.name}\nType: ${data.type}`);
      window.open(`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}?text=${waMsg}`, '_blank');
    } catch (err) {
      toast.error("Could not send enquiry", {
        description: err instanceof Error ? err.message : "Please try again or call us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldBase = "mt-1 w-full rounded-md border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron";
  const getFieldClass = (hasError: boolean) => `${fieldBase} ${hasError ? 'border-destructive focus:ring-destructive' : 'border-border'}`;
  const label = "block text-sm font-medium";

  return (
    <>
      <Hero
        image={HERO_IMAGES.contact}
        imageAlt="Travel planning"
        eyebrow="Contact"
        height="sm"
        title="Plan your journey with us"
        subtitle="Tell us where you'd like to go, or what vehicle you need. We typically respond within 2–4 hours."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-2xl p-6 sm:p-8 border space-y-4 card-lift relative">
          <h2 className="text-2xl font-bold">Send an Enquiry</h2>
          
          {/* Honeypot field (hidden from users, stops bots) */}
          <div className="absolute opacity-0 -z-10 pointer-events-none" aria-hidden="true">
            <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={label} htmlFor="name">Full Name</label>
              <input id="name" {...register("name")} className={getFieldClass(!!errors.name)} />
              {errors.name && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.name.message}</p>}
            </div>
            <div>
              <label className={label} htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" {...register("phone")} className={getFieldClass(!!errors.phone)} />
              {errors.phone && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.phone.message}</p>}
            </div>
          </div>
          <div>
            <label className={label} htmlFor="email">Email Address</label>
            <input id="email" type="email" {...register("email")} className={getFieldClass(!!errors.email)} />
            {errors.email && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.email.message}</p>}
          </div>
          <div>
            <label className={label} htmlFor="type">Type of Travel</label>
            <select id="type" {...register("type")} className={getFieldClass(!!errors.type)}>
              <option value="" disabled>Select...</option>
              <option>Personal / Family Trip</option>
              <option>Pilgrimage / Religious Tour</option>
              <option>Vacation / Holiday</option>
              <option>Group / Bulk Booking</option>
              <option>Corporate / Office Trip</option>
              <option>Bus Hire / Charter</option>
              <option>Car Rental / Chauffeur Service</option>
              <option>Airport / City Transfer</option>
              <option>Custom / Special Request</option>
            </select>
            {errors.type && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.type.message}</p>}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={label} htmlFor="dest">Travel Destination</label>
              <input id="dest" {...register("dest")} className={getFieldClass(!!errors.dest)} placeholder="e.g. Varanasi, Kathmandu" />
            </div>
            <div>
              <label className={label} htmlFor="date">Travel Date</label>
              <input id="date" type="date" {...register("date")} className={getFieldClass(!!errors.date)} />
            </div>
          </div>
          <div>
            <label className={label} htmlFor="travellers">Number of Travellers</label>
            <input id="travellers" type="number" {...register("travellers")} min={1} max={500} className={getFieldClass(!!errors.travellers)} />
          </div>
          <div>
            <label className={label} htmlFor="msg">Message / Special Requirements</label>
            <textarea id="msg" {...register("msg")} rows={4} className={getFieldClass(!!errors.msg)} />
          </div>
          <button disabled={submitting} type="submit" className="w-full rounded-md bg-gradient-to-r from-saffron to-amber-500 px-5 py-3 text-sm font-semibold text-saffron-foreground hover:brightness-95 disabled:opacity-60 transition shadow-lg shadow-saffron/25">
            {submitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>

        <aside className="space-y-6">
          <div className="bg-card rounded-2xl border p-6 sm:p-8 card-lift">
            <img src={logo} alt={`${COMPANY.name} logo`} className="h-16 w-16 rounded-md object-cover border" />
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
            <iframe
              title="Aarya Neelkamal Tours and Travels — Varanasi office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114726.59397456!2d82.87473!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2def9b9f0759%3A0x8eb2a4b41c76e3fc!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718000000000"
              className="w-full aspect-[16/10] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </aside>
      </section>
    </>
  );
}
