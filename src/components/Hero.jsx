import { useEffect, useRef, useState } from "react";
import weddingData from "../data/weddingData.js";
import heroImage from "../assets/hero-couple.jpg";

export default function Hero() {
  const { hero, couple } = weddingData;
  const [firstName, secondName] = [couple.brideName, couple.groomName];

  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Lazy-load reveal: hold the hero copy until the photograph is in (or a short
  // fallback fires so the section is never blocked), then rise it in.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
    const fallback = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <section
      id="home"
      className="pin-dark relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-obsidian"
    >
      {/* Photograph — shimmer placeholder that resolves once the image loads */}
      <div className={`hero-media absolute inset-0 ${loaded ? "is-loaded" : ""}`}>
        <div className="hero-skeleton" aria-hidden="true" />
        <img
          ref={imgRef}
          src={heroImage}
          alt="Courage placing a ring on Ifeoluwa's hand"
          onLoad={() => setLoaded(true)}
          className="h-full w-full object-cover object-[center_38%] grayscale contrast-[1.05] anim-hero-zoom"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Restrained dark veil for legibility — kept light so the image breathes */}
      <div className="absolute inset-0 bg-obsidian/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-obsidian/60" />

      {/* Content */}
      <div
        className={`relative z-10 wrap text-center text-ivory py-32 hero-copy ${loaded ? "is-ready" : ""}`}
      >
        <p
          className="eyebrow anim-rise mb-8 sm:mb-10"
          style={{ animationDelay: "0.35s" }}
        >
          {hero.eyebrow}
        </p>

        <h1 className="display-xl anim-rise" style={{ animationDelay: "0.55s" }}>
          {firstName}
          <span className="mx-3 sm:mx-5 font-light italic text-gold">&amp;</span>
          <br className="sm:hidden" />
          {secondName}
        </h1>

        <div
          className="anim-rise flex justify-center my-9 sm:my-11"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="ornament" aria-hidden="true">
            <span className="block h-1 w-1 rotate-45 bg-champagne" />
          </span>
        </div>

        <p
          className="anim-rise font-body text-sm sm:text-base uppercase tracking-[0.28em] text-silver"
          style={{ animationDelay: "1.05s" }}
        >
          {hero.dateDisplay}
        </p>
        <p
          className="anim-rise font-display italic text-xl sm:text-2xl text-ivory/90 mt-3"
          style={{ animationDelay: "1.15s" }}
        >
          {hero.location}
        </p>

        <div
          className="anim-rise mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "1.35s" }}
        >
          <a href="#rsvp" className="btn btn-solid w-full sm:w-auto">
            {hero.ctaPrimary}
          </a>
          <a href="#story" className="btn btn-outline w-full sm:w-auto text-ivory">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
