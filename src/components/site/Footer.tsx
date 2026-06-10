import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const destinations = ["Varanasi","Ayodhya","Prayagraj","Gaya","Kathmandu","Pokhara","Naimisharanya","Janakpur"];

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt={`${COMPANY.name} logo`} className="h-11 w-11 rounded-md object-cover" />
            <span className="font-bold leading-tight">{COMPANY.name}</span>
          </div>
          <p className="text-sm opacity-80">{COMPANY.tagline}</p>
          <p className="mt-3 text-xs opacity-70">All India & Nepal Pilgrimage Specialists | Est. {COMPANY.foundingYear}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3 text-saffron">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-saffron">Home</Link></li>
            <li><Link to="/about" className="hover:text-saffron">About</Link></li>
            <li><Link to="/packages" className="hover:text-saffron">Packages</Link></li>
            <li><Link to="/bus-hire" className="hover:text-saffron">Bus Hire</Link></li>
            <li><Link to="/contact" className="hover:text-saffron">Car Rentals</Link></li>
            <li><Link to="/contact" className="hover:text-saffron">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3 text-saffron">Popular Destinations</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm opacity-90">
            {destinations.map(d => (
              <li key={d}><Link to="/packages" className="hover:text-saffron">{d}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3 text-saffron">Contact</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>{COMPANY.phone}</li>
            <li>{COMPANY.whatsapp}</li>
            <li>{COMPANY.email}</li>
            <li>{COMPANY.address}</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href={COMPANY.whatsappLink} aria-label="WhatsApp" className="hover:text-saffron"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-saffron"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-saffron"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-saffron"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs opacity-80 leading-relaxed">
            {COMPANY.name} is a Varanasi-based pilgrimage and group tour operator with 30+ years of experience.
            We offer curated pilgrimage packages to Varanasi, Ayodhya, Prayagraj, Gaya, Naimisharanya, Janakpur,
            Kathmandu, and Pokhara. With an owned fleet of premium coaches and budget to luxury car booking services, 
            we are the trusted choice for family pilgrimages, school tours, corporate outings, airport transfers, and group travel across India and Nepal.
          </p>
          <p className="mt-4 text-xs opacity-60">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
