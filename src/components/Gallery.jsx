import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import weddingData from "../data/weddingData.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

// Auto-load every photo dropped into src/assets/gallery/,
// excluding the hero / story backgrounds that also live in /assets.
const assetModules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

const assetImages = Object.keys(assetModules)
  .filter((path) => !/\/(hero-couple|story-bg)\.[a-z]+$/i.test(path))
  .sort()
  .map((path, index) => ({
    src: assetModules[path].default,
    name: path.split("/").pop(),
    alt: `Ifeoluwa and Courage — wedding photograph ${index + 1}`,
  }));

// Every print shows in its natural colour now — a gentle cinematic grade is
// applied in CSS (.carousel-photo), no per-photo monochrome accents.

// Graceful autoplay: one scene every 6 seconds
const AUTOPLAY_MS = 6000;
// How far a card may sit from the centre before it leaves the composition
const MAX_STEP = 2;
// Horizontal drag distance (px) that counts as a swipe
const SWIPE_PX = 45;
// Rough px one carousel step spans during a drag (finger travel per print)
const DRAG_PX_PER_STEP = 150;

/**
 * Curved coverflow placement — each card is rotated on Y and pushed back in
 * Z around the active scene, like prints laid along a circle the visitor
 * stands inside. `offset` is continuous (fractional while dragging) so every
 * card eases smoothly; the centre print leans a breath toward the visitor.
 */
function cardTransform(offset) {
  const abs = Math.abs(offset);
  const sign = offset === 0 ? 0 : Math.sign(offset);
  const center = Math.max(0, 1 - abs); // 1 at centre, 0 once a full step away
  const x = sign * Math.min(abs, MAX_STEP + 0.6) * 54;
  const rot = sign * Math.min(abs, MAX_STEP) * 36;
  const z = -abs * 190 + center * 60;
  const scale = Math.max(1 - abs * 0.1, 0.62) + center * 0.04;
  return `translate(-50%, -50%) translate3d(${x}%, 0, ${z}px) rotateY(${-rot}deg) scale(${scale})`;
}

export default function Gallery() {
  const { gallery } = weddingData;

  // Prefer real photos in src/assets/gallery; fall back to weddingData placeholders
  const images = assetImages.length
    ? assetImages
    : gallery.images.map((img) => ({ src: img.src, alt: img.alt }));

  const total = images.length;

  const [pos, setPos] = useState(0); // unbounded reel position — single source of truth
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [settled, setSettled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [kbFocus, setKbFocus] = useState(false);

  // wrapped 0..total-1 index derived from the reel position
  const active = ((pos % total) + total) % total;

  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const activeCardRef = useRef(null);
  const pointerRef = useRef({ id: null, x: 0, y: 0, axis: null });
  const lastDragRef = useRef({ dx: 0, moved: false });

  // Wrap-around, shortest-path navigation — pure updater, StrictMode-safe
  const step = (delta) => setPos((p) => p + delta);
  const goTo = (index) =>
    setPos((p) => {
      const cur = ((p % total) + total) % total;
      const diff = (((index - cur) % total) + total) % total;
      const back = diff > total / 2 ? diff - total : diff;
      return p + back;
    });

  // ── Autoplay gating: pause on hover, drag, lightbox, focus, idle-resume,
  //    off-screen section and hidden tab; disabled for reduced motion ──
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const busy =
    dragging ||
    hovered ||
    isOpen ||
    kbFocus ||
    reducedMotion ||
    !inView ||
    !tabVisible;

  useEffect(() => {
    if (!playing || busy || total < 2) return;
    const id = setInterval(() => step(1), AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, busy, total, pos]);

  // Pause while the pointer rests inside the carousel
  useEffect(() => {
    const node = sceneRef.current;
    if (!node) return;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    node.addEventListener("pointerenter", enter);
    node.addEventListener("pointerleave", leave);
    return () => {
      node.removeEventListener("pointerenter", enter);
      node.removeEventListener("pointerleave", leave);
    };
  }, []);

  // Pause when the gallery scrolls out of the viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Pause when the browser tab is hidden
  useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Let the entrance stagger finish, then hand transforms back to React
  useEffect(() => {
    const id = setTimeout(() => setSettled(true), 2600);
    return () => clearTimeout(id);
  }, []);

  // ── Pointer drag / touch swipe (mouse + touch + pen, no dependencies) ──
  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pointerRef.current = { id: e.pointerId, x: e.clientX, y: e.clientY, axis: null };
    lastDragRef.current = { dx: 0, moved: false };
    setDragging(true);
  };
  const onPointerMove = (e) => {
    const p = pointerRef.current;
    if (p.id === null || e.pointerId !== p.id) return;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    if (!p.axis) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      p.axis = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
    }
    if (p.axis === "x") {
      lastDragRef.current = { dx, moved: true };
      setDragOffset(dx);
    }
  };
  const endDrag = () => {
    const p = pointerRef.current;
    if (p.id === null) return;
    pointerRef.current = { id: null, x: 0, y: 0, axis: null };
    const dx = dragOffset;
    setDragging(false);
    setDragOffset(0);
    if (Math.abs(dx) >= SWIPE_PX) {
      let steps = Math.round(-dx / DRAG_PX_PER_STEP);
      steps = Math.max(-MAX_STEP, Math.min(MAX_STEP, steps));
      // a deliberate swipe always advances at least one print
      if (steps === 0) steps = dx < 0 ? 1 : -1;
      step(steps);
    }
  };

  // A swipe that travelled more than a few px must not count as a click
  const handleCardClick = (index, wasActive) => {
    if (lastDragRef.current.moved && Math.abs(lastDragRef.current.dx) > 8) return;
    if (wasActive) setIsOpen(true);
    else goTo(index);
  };

  // ── Keyboard ──
  useEffect(() => {
    const onKey = (e) => {
      if (isOpen) {
        if (e.key === "Escape") setIsOpen(false);
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "ArrowRight") step(1);
        return;
      }
      const scene = sceneRef.current;
      if (!scene || !scene.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      if (e.key === "Enter" && document.activeElement === scene) setIsOpen(true);
      if (e.key === " ") { e.preventDefault(); setPlaying((v) => !v); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, total]);

  // Body scroll lock + focus handling for the lightbox
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Return focus to the print the visitor came from, without a scroll jump.
      // Query the genuinely-active card (aria-current, never aria-hidden) rather
      // than trusting activeCardRef — that ref moves between siblings and can
      // land on an aria-hidden print, which Chrome blocks with a console warning.
      const target =
        sceneRef.current?.querySelector('[aria-current="true"] button') ||
        activeCardRef.current;
      target?.focus({ preventScroll: true });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keep keyboard focus on the centred print: when the reel shifts (arrow keys or
  // next/prev while a print holds focus), move focus to the new active card so
  // focus never lingers inside an aria-hidden print — Chrome blocks that and
  // logs "Blocked aria-hidden … descendant retained focus".
  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const el = document.activeElement;
    if (!(el instanceof HTMLElement) || !scene.contains(el)) return;
    if (!el.closest(".carousel-card")) return; // only relocate from a print
    const center = scene.querySelector('[aria-current="true"] button');
    if (center && center !== el) center.focus({ preventScroll: true });
  }, [pos]);

  if (!total) return null;

  const liveDx = dragging ? dragOffset : 0;
  // While dragging, the reel tracks the finger continuously: posF is a
  // fractional position, so cardTransform interpolates depth/rotation smoothly
  // and there is no snap when a print crosses the centre.
  const posF = pos + (dragging ? -liveDx / DRAG_PX_PER_STEP : 0);
  const activeIndex = ((Math.round(posF) % total) + total) % total;
  const displayActive = activeIndex;

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-night section border-t border-graphite overflow-x-clip"
    >
      {/* soft transparent ash wash */}
      <div className="absolute inset-0 ash-veil pointer-events-none" />

      <div className="wrap relative">
        <SectionHeading
          eyebrow="Moments"
          title={gallery.heading}
          intro={gallery.intro}
        />

        {/* ── The curved reel ── */}
        <Reveal className="mt-14 sm:mt-16">
          <div
            ref={sceneRef}
            role="group"
            aria-roledescription="carousel"
            aria-label="Wedding photographs — drag, swipe or use arrow keys"
            tabIndex={0}
            onFocus={() => setKbFocus(true)}
            onBlur={() => setKbFocus(false)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onLostPointerCapture={endDrag}
            className={`carousel-scene select-none ${dragging ? "is-dragging" : ""} ${settled ? "is-settled" : ""}`}
          >
            {images.map((image, index) => {
              const raw = index - posF;
              const wrapped = ((raw % total) + total) % total;
              const offset = wrapped > total / 2 ? wrapped - total : wrapped;
              const abs = Math.abs(offset);
              const isActive = index === activeIndex;
              const visible = abs <= MAX_STEP + 0.6;
              return (
                <figure
                  key={image.src}
                  className={`carousel-card ${isActive ? "carousel-card--active" : ""}`}
                  style={{
                    transform: cardTransform(offset),
                    opacity: visible ? Math.max(1 - abs * 0.22, 0.3) : 0,
                    zIndex: 20 - Math.round(abs * 5),
                    pointerEvents: abs <= MAX_STEP + 0.5 ? "auto" : "none",
                    "--i": Math.min(index, 8),
                    cursor: isActive ? "zoom-in" : "pointer",
                  }}
                  aria-hidden={!visible}
                  aria-current={isActive ? "true" : undefined}
                >
                  <button
                    ref={isActive ? activeCardRef : null}
                    type="button"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleCardClick(index, isActive)}
                    aria-label={
                      isActive
                        ? `Open full size: ${image.alt}`
                        : `Show ${image.alt} in the centre`
                    }
                    className="absolute inset-0 size-full"
                  />
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={abs <= 2 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    className="carousel-photo"
                  />
                  {isActive && (
                    <span className="carousel-view-cue uppercase font-body">
                      View
                    </span>
                  )}
                </figure>
              );
            })}
          </div>
        </Reveal>

        {/* ── Controls: scrub, pause, indicator ── */}
        <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => step(-1)}
            className="flex size-11 items-center justify-center rounded-full border border-graphite text-silver transition-colors hover:border-gold-mut hover:text-gold-mut"
          >
            <ChevronLeft size={22} />
          </button>

          <span
            className="font-body text-[0.62rem] uppercase tracking-[0.3em] text-silver"
            aria-live="polite"
          >
            {String(displayActive + 1).padStart(2, "0")}
            <span className="mx-1.5 text-gold-mut/60">—</span>
            {String(total).padStart(2, "0")}
          </span>

          <button
            type="button"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            aria-pressed={playing}
            onClick={() => setPlaying((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full border border-graphite text-silver transition-colors hover:border-gold-mut hover:text-gold-mut"
          >
            {playing ? (
              <Pause size={16} />
            ) : (
              <Play size={16} className="ml-0.5" />
            )}
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={() => step(1)}
            className="flex size-11 items-center justify-center rounded-full border border-graphite text-silver transition-colors hover:border-gold-mut hover:text-gold-mut"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* quiet autoplay hairline — one gold refill per scene */}
        <div className="mx-auto mt-5 h-px w-40 overflow-hidden bg-graphite/70">
          {!busy && playing ? (
            <span
              key={pos}
              className="carousel-fill block h-full w-full bg-gold-mut/70"
            />
          ) : null}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="lightbox-overlay pin-dark fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 px-4 sm:px-20"
          onClick={() => setIsOpen(false)}
        >
          <span className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 font-body text-[0.65rem] uppercase tracking-[0.3em] text-silver">
            {String(active + 1).padStart(2, "0")}
            <span className="mx-1.5 text-gold-mut/60">—</span>
            {String(total).padStart(2, "0")}
          </span>

          <button
            type="button"
            aria-label="Close viewer"
            onClick={() => setIsOpen(false)}
            ref={(n) => n?.focus({ preventScroll: true })}
            className="absolute top-5 right-5 z-20 flex size-11 items-center justify-center text-silver transition-colors hover:text-gold-mut sm:right-8"
          >
            <X size={30} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-graphite bg-obsidian/60 text-silver backdrop-blur-sm transition-colors hover:border-gold-mut hover:text-gold-mut sm:left-6"
          >
            <ChevronLeft size={26} />
          </button>

          <figure
            className="lightbox-figure relative z-10 flex max-h-[82vh] max-w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={images[active].src}
              src={images[active].src}
              alt={images[active].alt}
              className="carousel-photo max-h-[78vh] w-auto max-w-full object-contain"
            />
            <figcaption className="sr-only">{images[active].alt}</figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-graphite bg-obsidian/60 text-silver backdrop-blur-sm transition-colors hover:border-gold-mut hover:text-gold-mut sm:right-6"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}
