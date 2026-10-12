import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
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
    <section id="gifts" className="relative bg-obsidian section">
      <div className="wrap max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">Celebrate With Us</p>
          <h2 className="display-md text-ivory mb-6">{support.heading}</h2>
          <p className="font-body text-silver leading-relaxed max-w-md mx-auto mb-12">
            {support.body}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="bg-charcoal border border-graphite p-8 sm:p-10 text-left mb-8">
            <p className="eyebrow mb-8">Account Details</p>
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

        <Reveal delay={200}>
          <a
            href={support.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            {support.onlineLabel}
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
