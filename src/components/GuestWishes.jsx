import { ArrowUpRight } from "lucide-react";
import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

export default function GuestWishes() {
  const { guestWishes } = weddingData;

  return (
    <section className="relative bg-night section border-y border-graphite">
      <div className="wrap max-w-2xl text-center">
        <Reveal>
          <span
            className="font-display text-7xl leading-none text-champagne/60 block mb-4"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="eyebrow mb-6">With Love</p>
          <h2 className="display-md text-ivory mb-6">{guestWishes.heading}</h2>
          <p className="font-body text-silver leading-relaxed max-w-md mx-auto mb-10">
            {guestWishes.body}
          </p>
          <a
            href={guestWishes.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-ivory"
          >
            {guestWishes.ctaLabel}
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
