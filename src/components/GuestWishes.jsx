import { Heart } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function GuestWishes() {
  const { guestWishes } = weddingData;

  return (
    <section className="bg-cream-deep/60 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Heart size={28} className="text-gold mx-auto mb-5" fill="currentColor" />
        <h2 className="font-script text-4xl sm:text-5xl text-wine-deep mb-5">
          {guestWishes.heading}
        </h2>
        <p className="font-body text-ink/75 leading-relaxed max-w-md mx-auto mb-9">
          {guestWishes.body}
        </p>
        <a
          href={guestWishes.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-wine text-cream font-heading text-sm sm:text-base px-8 py-3.5 hover:bg-wine-deep transition-colors duration-200"
        >
          {guestWishes.ctaLabel}
        </a>
      </div>
    </section>
  );
}
