import weddingData from "../data/weddingData.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function WeddingColours() {
  const { colours } = weddingData;

  return (
    <section className="relative bg-obsidian section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Dress Code"
          title={colours.heading}
          intro={colours.note}
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {colours.palette.map((colour, index) => (
            <Reveal
              key={colour.name}
              delay={index * 90}
              className="flex flex-col"
            >
              <div
                className="aspect-[3/4] w-full border border-graphite"
                style={{ backgroundColor: colour.hex }}
                aria-hidden="true"
              />
              <div className="mt-5 flex items-baseline justify-between gap-2">
                <span className="font-display text-xl text-ivory">
                  {colour.name}
                </span>
                <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-silver/70">
                  {colour.hex}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
