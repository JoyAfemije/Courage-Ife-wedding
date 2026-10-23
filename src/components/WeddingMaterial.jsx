import { ArrowRight } from "lucide-react";
import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function WeddingMaterial() {
  const { material } = weddingData;

  const whatsappUrl = `https://wa.me/${material.whatsappNumber}?text=${encodeURIComponent(
    material.whatsappMessage
  )}`;

  return (
    <section className="relative bg-ivory section overflow-hidden">
      {/* faint warm depth on the off-white field */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-champagne/25 pointer-events-none" />

      <div className="wrap relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-start">
          <Reveal>
            <p className="eyebrow mb-6 text-emerald">Aso-Ebi</p>
            <h2 className="display-lg text-obsidian mb-6">{material.heading}</h2>
            <p className="font-body text-charcoal/70 leading-relaxed max-w-md">
              {material.body}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald"
              >
                {material.ctaLabel}
                <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="anim-border relative bg-forest/60 border border-ivory/15 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
              <dl className="divide-y divide-ivory/15 border-y border-ivory/15 font-body">
                {material.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-6 py-5"
                  >
                    <dt className="font-display text-2xl text-ivory">
                      {item.name}
                    </dt>
                    <dd className="text-gold tracking-wide">{item.price}</dd>
                  </div>
                ))}
                {[
                  ["Colour", material.colour],
                  ["Payment Deadline", material.paymentDeadline],
                  [
                    "Contact Person",
                    `${material.contactPerson} · ${material.phoneNumber}`,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-champagne-soft shrink-0">
                      {label}
                    </dt>
                    <dd className="text-ivory/90 sm:text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
