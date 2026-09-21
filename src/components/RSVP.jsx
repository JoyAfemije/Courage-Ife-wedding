import { MessageCircle, Send } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function RSVP() {
  const { rsvp } = weddingData;

  const whatsappUrl = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(
    rsvp.whatsappMessage
  )}`;

  return (
    <section id="rsvp" className="max-w-3xl mx-auto px-6 py-20 sm:py-28 text-center">
      <div className="divider-ornament justify-center mb-4">
        <span className="font-heading tracking-[0.2em] text-xs text-wine/70">
          KINDLY RESPOND
        </span>
      </div>
      <h2 className="font-script text-4xl sm:text-5xl text-wine-deep mb-5">
        {rsvp.heading}
      </h2>
      <p className="font-body text-ink/75 leading-relaxed max-w-lg mx-auto mb-10">
        {rsvp.body}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={rsvp.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-wine text-cream font-heading text-sm sm:text-base px-8 py-3.5 hover:bg-wine-deep transition-colors duration-200"
        >
          <Send size={18} />
          {rsvp.ctaLabel}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-wine text-wine font-heading text-sm sm:text-base px-8 py-3.5 hover:bg-wine hover:text-cream transition-colors duration-200"
        >
          <MessageCircle size={18} />
          RSVP via WhatsApp
        </a>
      </div>
    </section>
  );
}
