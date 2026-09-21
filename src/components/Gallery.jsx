import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import weddingData from "../data/weddingData.js";

const spanClasses = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

// Auto-load every image dropped into src/assets/gallery/
const assetModules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

const assetImages = Object.keys(assetModules)
  .sort()
  .map((path, index) => ({
    src: assetModules[path].default,
    alt: decodeURIComponent(path.split("/").pop())
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]/g, " "),
    span: index % 7 === 0 ? "tall" : index % 5 === 0 ? "wide" : "normal",
  }));

export default function Gallery() {
  const { gallery } = weddingData;

  // Prefer photos found in src/assets/gallery; fall back to weddingData placeholders
  const images = assetImages.length ? assetImages : gallery.images;

  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="divider-ornament justify-center mb-4">
          <span className="font-heading tracking-[0.2em] text-xs text-wine/70">
            MOMENTS
          </span>
        </div>
        <h2 className="font-script text-4xl sm:text-5xl text-wine-deep mb-4">
          {gallery.heading}
        </h2>
        <p className="font-body text-ink/70">{gallery.intro}</p>
      </div>

      <div className="columns-2 sm:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
  {images.map((image, index) => (
    <button
      key={image.src}
      type="button"
      onClick={() => setActiveIndex(index)}
      aria-label={image.alt || `Gallery image ${index + 1}`}
      className="relative overflow-hidden rounded-xl group block w-full mb-3 sm:mb-4 break-inside-avoid"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-wine-deep/0 group-hover:bg-wine-deep/20 transition-colors duration-300" />
    </button>
  ))}
</div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          className="fixed inset-0 z-[100] bg-wine-deep/95 flex items-center justify-center px-4"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-5 right-5 text-cream hover:text-gold-soft"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-8 text-cream hover:text-gold-soft"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-lg shadow-2xl animate-fade-up"
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-8 text-cream hover:text-gold-soft"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}