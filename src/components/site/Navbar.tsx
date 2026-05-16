import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { COMPANY, buildWhatsAppLink } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/packages", label: "Packages" },
  { to: "/bus-hire", label: "Bus Hire" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  void scrolled;
  const wa = buildWhatsAppLink("Hello, I would like to know more about your travel packages.");
  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 bg-background/95 backdrop-blur-md border-b ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex h-18 py-3 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt={`${COMPANY.name} logo`} className="h-11 w-11 rounded-md object-cover ring-1 ring-border" />
          <span className="font-display font-bold hidden sm:inline leading-tight text-sm md:text-base text-navy">
            {COMPANY.shortName}
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-saffron" }}
                inactiveProps={{ className: "text-foreground hover:text-navy" }}
                className="text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-navy hover:bg-secondary transition"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
          </a>
          <Link to="/plan-trip" className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground hover:brightness-105 transition shadow-md">
            Plan Your Trip
          </Link>
        </div>
        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all ${open ? "max-h-[28rem] bg-background border-t" : "max-h-0"}`}>
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-2">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary text-navy" }}
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/plan-trip" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-gold px-3 py-2.5 text-center text-sm font-semibold text-gold-foreground">
              Plan Your Trip
            </Link>
          </li>
          <li>
            <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-1 flex items-center justify-center gap-2 rounded-full border px-3 py-2.5 text-center text-sm font-medium text-navy">
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
