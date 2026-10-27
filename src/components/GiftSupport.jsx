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

        <Reveal delay={160}>
          <div className="anim-border relative rounded-xl bg-charcoal border border-graphite p-8 sm:p-10 text-center sm:text-left">
            <p className="eyebrow mb-8">Payment Details</p>
            <dl className="font-body text-sm divide-y divide-graphite">
              {[
                ["Bank", support.bankName],
                ["Account Name", support.accountName],
                ["Account Number", support.accountNumber],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 py-4 sm:flex-row sm:justify-between sm:gap-4"
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
