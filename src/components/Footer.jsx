import { ArrowUp } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function Footer() {
  const { hero, footer } = weddingData;

  return (
    <footer className="relative bg-obsidian border-t border-graphite">
      <div className="wrap py-16 text-center">
        <a
          href="#home"
          className="font-display text-3xl tracking-[0.28em] text-ivory"
          aria-label="Back to top"
        >
          I&nbsp;<span className="text-gold font-light italic">&amp;</span>&nbsp;C
        </a>

        <p className="mt-5 font-body text-[0.7rem] uppercase tracking-[0.3em] text-ash">
          {hero.dateDisplay}
        </p>

        <p className="mt-8 font-body text-xs uppercase tracking-[0.32em] text-champagne">
          {weddingData.hashtag}
        </p>

        <div className="my-10 hairline" />

        <div className="flex flex-col items-center gap-4">
          <p className="font-display italic text-lg text-silver">
            {footer.message}
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-ash transition-colors duration-300 hover:text-champagne"
          >
            <ArrowUp size={14} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
