import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import weddingData from "../data/weddingData.js";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Gifts", href: "#gifts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur shadow-[0_1px_0_rgba(176,141,79,0.25)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <a
          href="#home"
          className="font-script text-2xl sm:text-3xl text-wine leading-none"
        >
          {weddingData.couple.fullTitle}
        </a>

        <ul className="hidden md:flex items-center gap-8 font-heading text-sm tracking-wide text-ink/80">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-wine transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#rsvp"
          className="hidden md:inline-flex items-center rounded-full bg-wine text-cream font-heading text-sm px-6 py-2.5 hover:bg-wine-deep transition-colors duration-200"
        >
          RSVP
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-wine p-2 -mr-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-ivory px-6 pb-6 pt-2 flex flex-col gap-4 font-heading text-base text-ink/85 border-t border-gold-soft/40">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-1.5 hover:text-wine transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#rsvp"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center w-full rounded-full bg-wine text-cream px-6 py-2.5"
            >
              RSVP
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
