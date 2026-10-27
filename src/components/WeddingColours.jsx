import weddingData from "../data/weddingData.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import fabricImg from "../assets/emerald-gold-fabrics.jpg";

export default function WeddingColours() {
  const { colours } = weddingData;

  return (
    <section className="relative bg-obsidian section overflow-hidden">
      {/* soft transparent ash wash */}
      <div className="absolute inset-0 ash-veil pointer-events-none" />

      <div className="wrap relative max-w-3xl">
        <SectionHeading
          eyebrow="Dress Code"
          title={colours.heading}
          intro={colours.note}
        />

        <Reveal delay={120}>
          <div className="mt-14 sm:mt-16">
            {/* Fabric photograph instead of flat colour cards */}
            <div className="anim-border overflow-hidden rounded-2xl border border-graphite shadow-[0_20px_45px_-25px_rgba(0,0,0,0.7)]">
              <img
                src={fabricImg}
                alt={`${colours.palette.map((c) => c.name).join(" & ")} — wedding fabric`}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-cover"
              />
            </div>

            {/* Small colour legend so the shades are still named */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {colours.palette.map((colour) => (
                <span
                  key={colour.name}
                  className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-silver"
                >
                  <span
                    className="inline-block size-4 rounded-full border border-graphite"
                    style={{ backgroundColor: colour.hex }}
                    aria-hidden="true"
                  />
                  {colour.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
