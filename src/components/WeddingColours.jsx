import weddingData from "../data/weddingData.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function WeddingColours() {
  const { colours } = weddingData;

  return (
    <section className="relative bg-obsidian section overflow-hidden">
      {/* soft transparent ash wash */}
      <div className="absolute inset-0 ash-veil pointer-events-none" />

      <div className="wrap relative">
        <SectionHeading
          eyebrow="Dress Code"
          title={colours.heading}
          intro={colours.note}
        />

        <div className="mt-16 mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:gap-8">
          {colours.palette.map((colour, index) => (
            <Reveal
              key={colour.name}
              delay={index * 110}
              className="flex flex-col items-center"
            >
              <div
                className="aspect-[3/4] w-full rounded-2xl border border-graphite shadow-[0_20px_45px_-25px_rgba(0,0,0,0.7)]"
                style={{ backgroundColor: colour.hex }}
                aria-hidden="true"
              />
              <span className="mt-6 font-display text-2xl text-ivory">
                {colour.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
