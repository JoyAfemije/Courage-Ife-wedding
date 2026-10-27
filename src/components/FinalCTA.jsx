import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function FinalCTA() {
  const { finalCta, couple, hero, material } = weddingData;

  const materialUrl = `https://wa.me/${material.whatsappNumber}?text=${encodeURIComponent(
    material.whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-paper section text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-champagne/25 pointer-events-none" />
      {/* restrained monogram watermark */}
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[12rem] leading-none text-ink/[0.05] select-none sm:text-[22rem]"
        aria-hidden="true"
      >
        I&amp;C
      </span>

      <div className="wrap relative">
        <Reveal>
          <span className="ornament mb-10" aria-hidden="true">
            <span className="block h-1 w-1 rotate-45 bg-emerald" />
          </span>
          <h2 className="display-lg text-ink mb-8 max-w-2xl mx-auto">
            {finalCta.heading}
          </h2>
          <p className="font-display text-2xl text-emerald italic mb-2">
            {couple.fullTitle}
          </p>
          <p className="font-body text-sm uppercase tracking-[0.28em] text-ink-soft mb-12">
            {hero.dateDisplay}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#rsvp" className="btn btn-emerald w-full sm:w-auto">
              {finalCta.ctaLabel}
            </a>
            <a
              href={materialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full sm:w-auto text-ink!"
            >
              {material.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
