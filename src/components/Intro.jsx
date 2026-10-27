import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function Intro() {
  const { intro } = weddingData;

  return (
    <section
      id="intro"
      className="relative bg-paper section overflow-hidden"
    >
      {/* faint warm depth on the off-white field */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-champagne/25 pointer-events-none" />

      <div className="wrap relative max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow mb-8 text-emerald!">{intro.heading}</p>
        </Reveal>

        <Reveal delay={100}>
          <p className="font-display text-ink leading-[1.35] text-[clamp(1.75rem,4vw,2.75rem)] font-light">
            {intro.body}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex justify-center">
            <span className="ornament" aria-hidden="true">
              <span className="block h-1 w-1 rotate-45 bg-emerald" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
