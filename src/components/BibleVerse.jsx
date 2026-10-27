import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function BibleVerse() {
  const { bibleVerse } = weddingData;

  return (
    <section className="relative bg-obsidian section border-t border-graphite overflow-hidden">
      {/* soft golden glow from the top */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(201,162,39,0.10),transparent_70%)]" />

      <div className="wrap relative max-w-3xl text-center">
        <Reveal>
          {/* line · diamond · line ornament */}
          <span
            className="inline-flex items-center justify-center gap-4"
            aria-hidden="true"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50 sm:w-16" />
            <span className="size-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50 sm:w-16" />
          </span>

          <p className="eyebrow mt-8">The Word</p>

          <blockquote className="mt-6 font-display text-2xl italic leading-relaxed text-ivory sm:text-[1.85rem] sm:leading-[1.55]">
            &ldquo;{bibleVerse.text}&rdquo;
          </blockquote>

          <cite className="mt-8 block font-body text-[0.7rem] uppercase not-italic tracking-[0.3em] text-champagne">
            {bibleVerse.reference}
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
