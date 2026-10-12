import { ArrowRight } from "lucide-react";
import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function WeddingMaterial() {
  const { material } = weddingData;

  const whatsappUrl = `https://wa.me/${material.whatsappNumber}?text=${encodeURIComponent(
    material.whatsappMessage
  )}`;

  return (
    <section className="relative bg-emerald section overflow-hidden">
      {/* faint tonal depth without gloom */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/40 via-transparent to-obsidian/50 pointer-events-none" />

      <div className="wrap relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-start">
          <Reveal>
            <p className="eyebrow mb-6 text-champagne-soft">Aso-Ebi</p>
            <h2 className="display-lg text-ivory mb-6">{material.heading}</h2>
            <p className="font-body text-ivory/75 leading-relaxed max-w-md">
              {material.body}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                {material.ctaLabel}
                <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="divide-y divide-ivory/15 border-y border-ivory/15 font-body">
              {[
                ["Material", material.materialType],
                ["Colour", material.colour],
                ["Contact Person", `${material.contactPerson} · ${material.phoneNumber}`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:justify-between sm:gap-6"
                >
                  <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-champagne-soft shrink-0">
                    {label}
                  </dt>
                  <dd className="text-ivory/90 sm:text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
