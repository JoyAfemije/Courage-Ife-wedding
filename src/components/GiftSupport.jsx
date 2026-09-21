import { useState } from "react";
import { Copy, Check, CreditCard } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function GiftSupport() {
  const { support } = weddingData;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(support.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable — fail silently, account number is visible on screen.
    }
  };

  return (
    <section id="gifts" className="max-w-2xl mx-auto px-6 py-20 sm:py-28 text-center">
      <div className="divider-ornament justify-center mb-4">
        <span className="font-heading tracking-[0.2em] text-xs text-wine/70">
          WITH LOVE
        </span>
      </div>
      <h2 className="font-script text-4xl sm:text-5xl text-wine-deep mb-5">
        {support.heading}
      </h2>
      <p className="font-body text-ink/75 leading-relaxed max-w-md mx-auto mb-10">
        {support.body}
      </p>

      <div className="bg-ivory border border-gold-soft/40 rounded-2xl p-8 mb-8 text-left max-w-sm mx-auto">
        <div className="flex items-center gap-2 mb-5 text-wine">
          <CreditCard size={20} />
          <span className="font-heading text-sm tracking-wide">
            Account Details
          </span>
        </div>
        <dl className="font-body text-sm space-y-3 mb-6">
          <div className="flex justify-between">
            <dt className="text-ink/60">Bank</dt>
            <dd className="text-ink/90">{support.bankName}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink/60">Account Name</dt>
            <dd className="text-ink/90">{support.accountName}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="text-ink/60">Account Number</dt>
            <dd className="text-ink/90 font-medium tracking-wide">
              {support.accountNumber}
            </dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={handleCopy}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-wine text-wine font-heading text-sm px-5 py-2.5 hover:bg-wine hover:text-cream transition-colors duration-200"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? support.copiedLabel : "Copy Account Number"}
        </button>
      </div>

      <a
        href={support.paymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-gold text-wine-deep font-heading text-sm sm:text-base px-8 py-3.5 hover:bg-gold-soft transition-colors duration-200"
      >
        {support.onlineLabel}
      </a>
    </section>
  );
}
