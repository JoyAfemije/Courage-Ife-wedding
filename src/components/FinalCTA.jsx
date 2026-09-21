import weddingData from "../data/weddingData.js";

export default function FinalCTA() {
  const { finalCta, couple, hero } = weddingData;

  return (
    <section className="relative py-24 sm:py-32 bg-wine-deep text-cream text-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none flex items-center justify-center">
        <span className="font-script text-[14rem] sm:text-[20rem] leading-none whitespace-nowrap">
          C &amp; I
        </span>
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <h2 className="font-script text-4xl sm:text-5xl mb-6">
          {finalCta.heading}
        </h2>
        <p className="font-heading text-2xl sm:text-3xl mb-2">
          {couple.fullTitle}
        </p>
        <p className="font-body text-cream/80 mb-10">{hero.dateDisplay}</p>

        <a
          href="#rsvp"
          className="inline-flex items-center justify-center rounded-full bg-gold text-wine-deep font-heading text-sm sm:text-base px-8 py-3.5 hover:bg-gold-soft transition-colors duration-200"
        >
          {finalCta.ctaLabel}
        </a>
      </div>
    </section>
  );
}
