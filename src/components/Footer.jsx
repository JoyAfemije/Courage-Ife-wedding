import { AtSign } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function Footer() {
  const { couple, hero, footer, socials } = weddingData;

  return (
    <footer className="bg-ivory py-12 text-center border-t border-gold-soft/30">
      <p className="font-script text-3xl text-wine mb-2">
        {couple.fullTitle}
      </p>
      <p className="font-heading text-sm text-ink/70 mb-4">
        {hero.dateDisplay}
      </p>

      <p className="font-heading text-sm tracking-[0.15em] text-gold mb-4">
  {weddingData.hashtag}
</p>

      {socials?.length > 0 && (
        <div className="flex justify-center gap-4 mb-5">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="text-wine/70 hover:text-wine transition-colors"
            >
              {social.platform === "Instagram" && <AtSign size={18} />}
            </a>
          ))}
        </div>
      )}

      <p className="font-body text-xs text-ink/50 italic">
        {footer.message}
      </p>
    </footer>
  );
}
