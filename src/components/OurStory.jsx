import { useState } from "react";
import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

/** Quiet centred ornament — line · diamond · line. */
function StoryOrnament({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-ink/20 sm:w-16" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-12 bg-ink/20 sm:w-16" />
    </span>
  );
}

/** A finished story page, presented as a framed fine-art print —
    white mat board, hairline border, deep soft shadow. Resolves from
    a shimmer as it lazy-loads; lifts toward the visitor on hover. */
function StoryCard({ src, alt, eager = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`story-card ${loaded ? "is-loaded" : ""}`}>
      <span className="story-card__skeleton" aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </figure>
  );
}

export default function OurStory() {
  const { story } = weddingData;

  return (
    <section
      id="story"
      className="story-paper relative overflow-hidden border-y border-ink/5"
    >
      <div className="relative z-10 wrap section">
        {/* ── Section header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal from="zoom">
            <p className="eyebrow mb-6">Our Journey</p>
            <h2 className="display-lg">{story.heading}</h2>
            <StoryOrnament className="my-8" />
            <p className="font-display italic text-xl leading-snug text-ink-soft sm:text-[1.65rem]">
              “{story.intro}”
            </p>
          </Reveal>
        </div>

        {/* ── The chapters — pages joined flush, one long story magazine ── */}
        <div className="relative mx-auto mt-14 max-w-[36rem] sm:mt-16 sm:max-w-[38rem]">
          {/* elegant side rails in the whitespace — large screens only */}
          <span
            className="pointer-events-none absolute top-6 bottom-6 -left-14 hidden w-px bg-gradient-to-b from-transparent via-ink/15 to-transparent xl:block"
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold/60" />
            <span className="absolute left-1/2 bottom-0 size-1.5 -translate-x-1/2 translate-y-1/2 rotate-45 bg-gold/60" />
          </span>
          <span
            className="pointer-events-none absolute top-6 bottom-6 -right-14 hidden w-px bg-gradient-to-b from-transparent via-ink/15 to-transparent xl:block"
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold/60" />
            <span className="absolute left-1/2 bottom-0 size-1.5 -translate-x-1/2 translate-y-1/2 rotate-45 bg-gold/60" />
          </span>

          <div className="story-stack">
            {story.cards.map((card, index) => (
              <Reveal
                key={card.alt}
                from="up"
                delay={index === 0 ? 120 : 0}
                className="w-full"
              >
                <StoryCard
                  src={card.src}
                  alt={card.alt}
                  eager={index === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
