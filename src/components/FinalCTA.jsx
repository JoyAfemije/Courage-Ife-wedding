import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function FinalCTA() {
  const { finalCta, couple, hero, material } = weddingData;

  const materialUrl = `https://wa.me/${material.whatsappNumber}?text=${encodeURIComponent(
    material.whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-emerald section text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-transparent to-obsidian/60 pointer-events-none" />
      {/* restrained monogram watermark */}
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[12rem] leading-none text-ivory/[0.04] select-none sm:text-[22rem]"
        aria-hidden="true"
      >
        I&amp;C
      </span>

      <div className="wrap relative">
        <Reveal>
          <span className="ornament mb-10" aria-hidden="true">
            <span className="block h-1 w-1 rotate-45 bg-champagne" />
          </span>
          <h2 className="display-lg text-ivory mb-8 max-w-2xl mx-auto">
            {finalCta.heading}
          </h2>
          <p className="font-display text-2xl text-champagne-soft italic mb-2">
            {couple.fullTitle}
          </p>
          <p className="font-body text-sm uppercase tracking-[0.28em] text-ivory/70 mb-12">
            {hero.dateDisplay}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#rsvp" className="btn btn-solid w-full sm:w-auto">
              {finalCta.ctaLabel}
            </a>
            <a
              href={materialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full sm:w-auto text-ivory"
            >
              {material.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
