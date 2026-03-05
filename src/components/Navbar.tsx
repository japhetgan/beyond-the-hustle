import { useState, useEffect } from "react";
import { CHECKOUT_URL } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Speakers", href: "#speakers" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <a
          href="#"
          className={`font-heading text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-cream" : "text-white"
          }`}
        >
          Beyond The Hustle
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-cream/80" : "text-white/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal text-sm uppercase tracking-widest px-6 py-3 font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Reserve Your Spot
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            scrolled ? "text-cream" : "text-charcoal"
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            } ${scrolled ? "bg-cream" : "bg-charcoal"}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            } ${scrolled ? "bg-cream" : "bg-charcoal"}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            } ${scrolled ? "bg-cream" : "bg-charcoal"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-charcoal/95 backdrop-blur-sm`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream/80 text-sm uppercase tracking-widest hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal text-sm uppercase tracking-widest px-6 py-3 font-medium text-center mt-2 hover:bg-gold-light transition-colors"
          >
            Reserve Your Spot
          </a>
        </div>
      </div>
    </nav>
  );
}
