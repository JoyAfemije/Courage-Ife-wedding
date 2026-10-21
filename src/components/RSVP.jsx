import { ArrowUpRight, MessageCircle } from "lucide-react";
import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function RSVP() {
  const { rsvp } = weddingData;

  const whatsappUrl = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(
    rsvp.whatsappMessage
  )}`;

  return (
    <section id="rsvp" className="relative bg-obsidian section overflow-hidden">
      {/* soft transparent ash wash */}
      <div className="absolute inset-0 ash-veil pointer-events-none" />

      <div className="wrap relative max-w-2xl">
        <Reveal className="anim-border relative border border-graphite rounded-xl px-6 py-16 sm:px-14 sm:py-20 text-center bg-charcoal/40 backdrop-blur-sm">
          {/* corner ticks */}
          <span className="pointer-events-none absolute -top-px -left-px h-6 w-6 rounded-tl-xl border-t border-l border-champagne" />
          <span className="pointer-events-none absolute -top-px -right-px h-6 w-6 rounded-tr-xl border-t border-r border-champagne" />
          <span className="pointer-events-none absolute -bottom-px -left-px h-6 w-6 rounded-bl-xl border-b border-l border-champagne" />
          <span className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 rounded-br-xl border-b border-r border-champagne" />

          <p className="eyebrow mb-6">Kindly Respond</p>
          <h2 className="display-md text-ivory mb-6">{rsvp.heading}</h2>
          <p className="font-body text-silver leading-relaxed max-w-md mx-auto mb-10">
            {rsvp.body}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={rsvp.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              {rsvp.ctaLabel}
              <ArrowUpRight size={15} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-ivory"
            >
              <MessageCircle size={15} />
              RSVP via WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
