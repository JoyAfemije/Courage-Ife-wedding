import weddingData from "../data/weddingData.js";
import heroImage from "../assets/hero-couple.jpg";

export default function Hero() {
  const { hero } = weddingData;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Ifeoluwa and Courage"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
        loading="eager"
      />
      {/* dark on the left, fading to transparent toward the right so the couple stays visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-wine-deep via-wine-deep/80 sm:via-wine-deep/70 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 text-cream">
        <div className="animate-fade-up max-w-xl">
          <p className="font-heading tracking-[0.2em] text-xs sm:text-sm text-gold-soft mb-4">
            WE ARE GETTING MARRIED
          </p>
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl leading-none mb-4">
            {hero.heading}
          </h1>
          <p className="font-body text-base sm:text-lg text-cream/90 italic mb-6">
            {hero.subheading}
          </p>
          <div className="divider-ornament justify-start mb-6">
            <span className="font-heading text-sm sm:text-base tracking-wide text-cream">
              {hero.dateDisplay} &middot; {hero.location}
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#rsvp"
              className="inline-flex items-center rounded-full bg-gold text-wine-deep font-heading text-sm sm:text-base font-medium px-7 py-3 hover:bg-gold-soft transition-colors duration-200"
            >
              {hero.ctaPrimary}
            </a>

            <a
              href="#story"
              className="inline-flex items-center rounded-full border border-cream/70 text-cream font-heading text-sm sm:text-base px-7 py-3 hover:bg-cream/10 transition-colors duration-200"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}