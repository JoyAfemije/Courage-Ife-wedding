import { useState } from "react";
import { Copy, Check } from "lucide-react";
import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function GiftSupport() {
  const { support } = weddingData;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(support.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable — account number remains visible on screen.
    }
  };

  return (
    <section id="gifts" className="relative bg-night section overflow-hidden">
      {/* soft transparent ash wash over the base tone */}
      <div className="absolute inset-0 ash-veil pointer-events-none" />

      <div className="wrap relative max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">Celebrate With Us</p>
          <h2 className="display-md text-ivory mb-6">{support.heading}</h2>
          <p className="font-body text-silver leading-relaxed max-w-md mx-auto mb-12">
            {support.body}
          </p>
        </Reveal>

        {/* Material items — Cap & Gele with prices */}
        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
            {support.items.map((item) => (
              <div
                key={item.name}
                className="anim-border relative overflow-hidden rounded-xl border border-graphite bg-charcoal px-4 py-8 text-left"
              >
                <span className="block font-display text-2xl text-ivory">
                  {item.name}
                </span>
                <span className="mt-2 block font-body text-sm tracking-[0.12em] text-gold">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <p className="font-body text-[0.68rem] uppercase tracking-[0.24em] text-champagne-soft mb-10">
            Payment Deadline · {support.paymentDeadline}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="anim-border relative rounded-xl bg-charcoal border border-graphite p-8 sm:p-10 text-left">
            <p className="eyebrow mb-8">Payment Details</p>
            <dl className="font-body text-sm divide-y divide-graphite">
              {[
                ["Bank", support.bankName],
                ["Account Name", support.accountName],
                ["Account Number", support.accountNumber],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <dt className="text-silver/70 uppercase tracking-[0.18em] text-[0.7rem]">
                    {label}
                  </dt>
                  <dd className="text-ivory tracking-wide">{value}</dd>
                </div>
              ))}
            </dl>

            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-outline text-ivory w-full mt-8"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? support.copiedLabel : support.copyLabel}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
