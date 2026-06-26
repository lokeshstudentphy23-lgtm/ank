import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { COMPANY, buildWhatsAppLink } from "@/lib/site";

type NavLink = {
  to: string;
  label: string;
  hash?: string;
};

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/packages", label: "Packages" },
  { to: "/bus-hire", label: "Bus Hire" },
  { to: "/", hash: "transport", label: "Car Rentals" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = buildWhatsAppLink("Hello, I would like to know more about your travel packages.");

  // Close mobile menu on route change
  const handleMobileLinkClick = () => setOpen(false);

  return (
    <header
      id="site-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        left: 0,
        right: 0,
        boxSizing: "border-box",
        boxShadow: scrolled ? "0 2px 20px rgba(11,27,71,0.18)" : "none",
        transition: "box-shadow 0.3s ease, background-color 0.3s ease",
      }}
      className={`bg-navy border-b border-white/10`}
    >
      {/* Top bar — phone number strip */}
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        className="hidden md:block"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6 py-1.5">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-1.5 text-xs text-white/70 hover:text-gold transition-colors"
          >
            <Phone className="h-3 w-3" />
            {COMPANY.phone}
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/70 hover:text-gold transition-colors"
          >
            <MessageCircle className="h-3 w-3 text-[#25D366]" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main navigation row */}
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        style={{ height: "68px" }}
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          style={{ textDecoration: "none" }}
        >
          <img
            src={logo}
            alt={`${COMPANY.name} logo`}
            style={{
              height: "44px",
              width: "44px",
              borderRadius: "8px",
              objectFit: "cover",
              border: "2px solid rgba(212,175,55,0.5)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "Fraunces, Georgia, serif",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#fff",
              fontSize: "clamp(13px, 2vw, 16px)",
              whiteSpace: "nowrap",
            }}
          >
            ANK Tours and Travels
          </span>
        </Link>

        {/* Desktop Nav Links — hidden on mobile via inline style + media query class */}
        <ul
          className="hidden md:flex items-center gap-1"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {links.map((l, i) => (
            <li key={i}>
              <Link
                to={l.to}
                hash={l.hash}
                activeOptions={{ exact: l.to === "/" && !l.hash }}
                activeProps={{
                  className:
                    "text-gold border-b-2 border-gold",
                }}
                inactiveProps={{
                  className:
                    "text-white/85 hover:text-gold border-b-2 border-transparent",
                }}
                className="block px-3 py-2 text-sm font-medium transition-colors duration-150"
                style={{ textDecoration: "none" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/plan-trip"
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #c9a227 0%, #e8c96d 50%, #c9a227 100%)",
              color: "#1a1a2e",
              padding: "9px 22px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 2px 12px rgba(212,175,55,0.35)",
              transition: "filter 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
            }}
            className="hover:brightness-110 hover:scale-[1.03]"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile hamburger — shown only on mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: open ? "500px" : "0px",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "#0b1b47",
          borderTop: open ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <ul
          style={{ listStyle: "none", margin: 0, padding: "8px 16px 16px" }}
        >
          {links.map((l, i) => (
            <li key={i}>
              <Link
                to={l.to}
                hash={l.hash}
                onClick={handleMobileLinkClick}
                activeOptions={{ exact: l.to === "/" && !l.hash }}
                activeProps={{
                  className: "bg-white/10 text-gold",
                }}
                inactiveProps={{
                  className: "text-white/85 hover:bg-white/8 hover:text-gold",
                }}
                className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                style={{ textDecoration: "none", display: "block" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li style={{ marginTop: "8px" }}>
            <Link
              to="/plan-trip"
              onClick={handleMobileLinkClick}
              style={{
                display: "block",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #c9a227 0%, #e8c96d 50%, #c9a227 100%)",
                color: "#1a1a2e",
                padding: "11px 20px",
                fontSize: "14px",
                fontWeight: 700,
                textAlign: "center",
                textDecoration: "none",
                marginTop: "4px",
              }}
            >
              Plan Your Trip
            </Link>
          </li>
          <li style={{ marginTop: "8px" }}>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileLinkClick}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                padding: "11px 20px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
