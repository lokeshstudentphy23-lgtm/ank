import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/packages", label: "Packages" },
  { to: "/bus-hire", label: "Bus Hire" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md placeholder-gradient flex items-center justify-center text-[10px] font-bold">LOGO</div>
          <span className="font-bold text-navy hidden sm:inline">[COMPANY NAME]</span>
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
        <Link to="/contact" className="hidden md:inline-flex items-center rounded-md bg-saffron px-4 py-2 text-sm font-semibold text-saffron-foreground hover:brightness-95 transition">
          Plan Your Trip
        </Link>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col gap-1 px-4 pb-4">
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
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-saffron px-3 py-2 text-center text-sm font-semibold text-saffron-foreground">
              Plan Your Trip
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
