import { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function WeddingMaterial() {
  const { material } = weddingData;
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/${material.whatsappNumber}?text=${encodeURIComponent(
    material.whatsappMessage
  )}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(material.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable — account number remains visible on screen.
    }
  };

  return (
    <section className="relative bg-paper section overflow-hidden">
      {/* faint warm depth on the off-white field */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-champagne/25 pointer-events-none" />

      <div className="wrap relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-start">
          <Reveal>
            <p className="eyebrow mb-6 text-emerald!">Aso-Ebi</p>
            <h2 className="display-lg text-ink mb-6">{material.heading}</h2>
            <p className="font-body text-ink-soft leading-relaxed max-w-md">
              {material.body}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
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
            <div className="anim-border pin-dark relative bg-emerald border border-ivory/10 rounded-lg p-6 sm:p-8 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)]">
              <dl className="divide-y divide-ivory/15 border-y border-ivory/15 font-body">
                {material.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-6 py-5"
                  >
                    <dt className="font-display text-xl text-ivory sm:text-2xl">
                      {item.name}
                    </dt>
                    <dd className="text-gold tracking-wide">{item.price}</dd>
                  </div>
                ))}
                {[
                  ["Bank", material.bankName],
                  ["Account Name", material.accountName],
                  ["Payment Deadline", material.paymentDeadline],
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
                <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-champagne-soft shrink-0">
                    Account Number
                  </dt>
                  <dd className="font-body text-ivory/90 tracking-[0.12em] sm:text-right">
                    {material.accountNumber}
                  </dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={handleCopy}
                className="btn btn-outline text-ivory! w-full sm:w-auto mt-6"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Account number copied!" : "Copy Account Number"}
              </button>

              <p className="mt-5 text-xs text-ivory/70">
                {material.contactPerson} · {material.phoneNumber}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
