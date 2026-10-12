import { useEffect, useRef, useState } from "react";
import weddingData from "../data/weddingData.js";

/**
 * Full-screen pre-intro. Types "Meet The Afemijes" letter by letter, then
 * dissolves to reveal the invitation. Skippable by tap / Enter / Escape, and it
 * never traps the visitor — the whole page is already mounted behind it.
 */
export default function IntroSplash() {
  const { splash } = weddingData;
  const full = splash.title;

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false); // typing complete
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  // ── Typewriter ──
  useEffect(() => {
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
    timer = setTimeout(tick, 350);
    return () => clearTimeout(timer);
  }, [full, reducedMotion]);

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

  const revealed = done || reducedMotion;

  return (
    <div
      className={`intro-splash ${leaving ? "is-leaving" : ""}`}
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label={`${full}. ${splash.subtitle}`}
    >
      <div className="intro-splash__inner">
        <span className="intro-splash__mono" aria-hidden="true">
          C&nbsp;&amp;&nbsp;I
        </span>
        <h1 className="intro-splash__title" aria-hidden="true">
          <span>{typed}</span>
          {!done && <span className="type-caret" />}
        </h1>
        <p className={`intro-splash__sub ${revealed ? "is-in" : ""}`}>
          {splash.subtitle}
        </p>
        <button
          type="button"
          className={`intro-splash__enter ${revealed ? "is-in" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
        >
          Enter the Invitation
        </button>
      </div>
      <span className="intro-splash__skip">Tap anywhere to skip</span>
    </div>
  );
}
