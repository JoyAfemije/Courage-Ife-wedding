import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const toggleRef = useRef(null);

  // Move focus onto the header toggle BEFORE the off-screen panel is hidden.
  // Otherwise focus stays inside the panel as it becomes aria-hidden, which
  // Chrome blocks with "Blocked aria-hidden … descendant retained focus".
  const closeMenu = () => {
    toggleRef.current?.focus({ preventScroll: true });
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/90 backdrop-blur-md border-b border-graphite py-4"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <nav className="wrap flex items-center justify-between">
          {/* Wordmark / monogram */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="font-display text-ivory text-xl sm:text-2xl tracking-[0.28em] leading-none"
            aria-label="Courage and Ife — home"
          >
            C&nbsp;<span className="text-champagne font-light">&amp;</span>&nbsp;I
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[0.7rem] uppercase tracking-[0.24em] text-silver transition-colors duration-300 hover:text-ivory"
                >
                  {link.label}
                  <span className="grad-luxe absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <a href="#rsvp" className="hidden md:inline-flex btn btn-outline !py-2.5 !px-6 text-ivory">
            RSVP
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            ref={toggleRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex size-11 items-center justify-center -mr-2 text-ivory"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu — rendered outside <header> so the
          header's backdrop-filter never becomes a containing block. */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-obsidian transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="wrap flex items-center justify-between py-6">
          <span className="font-display text-2xl tracking-[0.28em] text-ivory">
            C&nbsp;<span className="text-champagne font-light">&amp;</span>&nbsp;I
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="flex size-11 items-center justify-center -mr-2 text-ivory"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="wrap">
          <ul className="flex flex-col pt-6">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-baseline gap-4 border-b border-graphite py-5 font-display text-3xl text-ivory transition-opacity duration-500 ${
                    open ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                >
                  <span className="font-body text-[0.65rem] tracking-[0.2em] text-champagne">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#rsvp"
            onClick={closeMenu}
            className="btn btn-solid mt-10 w-full"
          >
            RSVP Now
          </a>
        </nav>
      </div>
    </>
  );
}
