import { useEffect, useRef, useState } from "react";
import weddingData from "../data/weddingData.js";
import openingVideo from "../assets/openingvideo.mp4";

/**
 * Full-screen opening. The couple's video plays in slow motion, graded black
 * & white; as it ends it gently zooms and fades, "Meet The Afemijes" pops out
 * letter by letter, then the splash dissolves into the invitation.
 * Skippable by tap / Enter / Escape — the whole page is already mounted behind.
 */
const SLOW_MO_RATE = 0.55; // playbackRate < 1 → slow motion

export default function IntroSplash() {
  const { splash } = weddingData;
  const full = splash.title;

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // video → (zoom + fade) → title → site
  const [phase, setPhase] = useState("video"); // "video" | "title"
  const [videoFailed, setVideoFailed] = useState(false);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false); // typing complete
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  const videoRef = useRef(null);

  // ── Slow motion playback ──
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reducedMotion) return;
    v.playbackRate = SLOW_MO_RATE;
    v.play()?.catch(() => {
      /* autoplay blocked — the onEnd fallback timer below carries on */
    });
  }, [reducedMotion]);

  // Reduced motion or a broken video file: skip straight to the title.
  useEffect(() => {
    if (reducedMotion || videoFailed) setPhase("title");
  }, [reducedMotion, videoFailed]);

  // Safety net — if 'ended' never fires (decode hiccup), advance anyway.
  useEffect(() => {
    if (phase !== "video" || reducedMotion) return;
    const fallback = setTimeout(() => setPhase("title"), 16000);
    return () => clearTimeout(fallback);
  }, [phase, reducedMotion]);

  // ── Typewriter, started once the title phase begins ──
  useEffect(() => {
    if (phase !== "title") return;
    if (reducedMotion) {
      setTyped(full);
      setDone(true);
      return;
    }
    let i = 0;
    let timer;
    const tick = () => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        setDone(true);
        return;
      }
      const next = full[i];
      timer = setTimeout(tick, next === " " ? 120 : 68 + Math.random() * 55);
    };
    timer = setTimeout(tick, 450);
    return () => clearTimeout(timer);
  }, [phase, full, reducedMotion]);

  const dismissing = useRef(false);
  const dismiss = () => {
    if (dismissing.current) return;
    dismissing.current = true;
    setLeaving(true);
    setTimeout(() => setHidden(true), 900);
  };

  // ── Auto-advance a beat after the line finishes typing ──
  useEffect(() => {
    if (!done || leaving) return;
    const t = setTimeout(dismiss, reducedMotion ? 900 : 2000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done, leaving, reducedMotion]);

  // ── Lock scroll + allow keyboard skip while the splash is up ──
  useEffect(() => {
    if (hidden) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden]);

  if (hidden) return null;

  const titleActive = phase === "title" || videoFailed || reducedMotion;

  return (
    <div
      className={`intro-splash intro-splash--video ${
        leaving ? "is-leaving" : ""
      } ${titleActive ? "is-to-title" : ""}`}
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label={`${full}. ${splash.subtitle}`}
    >
      {/* Opening video — a recessed oval medallion, slow motion, black & white,
          framed by a gold/emerald ring that travels around it as the film plays */}
      {!reducedMotion && (
        <div
          className={`intro-splash__medallion ${titleActive ? "is-out" : ""}`}
          aria-hidden="true"
        >
          <div className="intro-splash__frame">
            {/* painted first, sits behind the video — only its 3px edge shows */}
            <span className="intro-splash__ring" />
            <video
              ref={videoRef}
              className="intro-splash__video"
              src={openingVideo}
              muted
              playsInline
              preload="auto"
              autoPlay
              onError={() => setVideoFailed(true)}
              onEnded={() => setPhase("title")}
            />
          </div>
        </div>
      )}
      {/* Soft cinematic veil so the type always reads over the film */}
      <div className="intro-splash__veil" aria-hidden="true" />

      <div className="intro-splash__inner">
        <span
          className={`intro-splash__mono ${titleActive ? "is-in" : ""}`}
          aria-hidden="true"
        >
          I&nbsp;&amp;&nbsp;C
        </span>
        <h1 className="intro-splash__title" aria-hidden="true">
          {titleActive ? (
            <>
              <span>{typed}</span>
              {!done && <span className="type-caret" />}
            </>
          ) : (
            <span className="intro-splash__ghost">·</span>
          )}
        </h1>
        <p className={`intro-splash__sub ${done ? "is-in" : ""}`}>
          {splash.subtitle}
        </p>
      </div>
      <span className="intro-splash__skip">Tap anywhere to skip</span>
    </div>
  );
}
