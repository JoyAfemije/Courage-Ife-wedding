import { useEffect, useRef, useState } from "react";
import { Music } from "lucide-react";
import weddingData from "../data/weddingData.js";

/**
 * AudioToggle — a single, persistent, visitor-controlled background
 * soundtrack. It lives at the app root so it never remounts between
 * sections, never duplicates, and stays fully independent of the gallery.
 *
 * Playback state is derived from the real <audio> element events, so the
 * animation never lies about whether music is actually playing.
 */
export default function AudioToggle() {
  const audioRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | playing | paused | error
  const music = weddingData.music;

  // Once a visitor deliberately pauses, the autoplay unlock must not
  // override them for the rest of the visit.
  const userPausedRef = useRef(false);
  // True while the soundtrack is running muted (auto-started before any
  // gesture). The first tap / keypress un-mutes it.
  const mutedAutoplayRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = music?.defaultVolume ?? 0.25;

    const onPlay = () => setStatus("loading");
    const onPlaying = () => setStatus("playing");
    const onPause = () =>
      setStatus((s) => (s === "error" ? "error" : "paused"));
    const onWaiting = () => setStatus("loading");
    const onEnded = () => setStatus("paused");
    const onError = () => setStatus("error");

    audio.addEventListener("play", onPlay);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    // Autoplay intent: the soundtrack must be running from the opening video
    // on every load, with no click required first.
    //
    // Browsers refuse audible autoplay before any gesture, but they always
    // allow MUTED playback — so we start muted instantly, and the very first
    // tap / keypress (the splash "Enter" tap itself) un-mutes with a gentle
    // volume ramp. If the visitor never touches anything, the music still
    // plays silently. We never fake a playing state: the UI is driven purely
    // by the audio element's events.
    const targetVolume = music?.defaultVolume ?? 0.25;

    const rampTo = (level) => {
      audio.volume = 0;
      const startedAt = performance.now();
      const ramp = () => {
        const t = Math.min((performance.now() - startedAt) / 600, 1);
        audio.volume = level * t;
        if (t < 1) requestAnimationFrame(ramp);
      };
      requestAnimationFrame(ramp);
    };

    const tryStart = (withSound) => {
      if (!music?.src || audio.error || userPausedRef.current) return;
      if (!audio.paused) return;
      audio.muted = !withSound;
      const p = audio.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => setStatus("paused"));
      }
    };

    // Immediate muted auto-start — runs while the opening video is on screen.
    tryStart(false);
    mutedAutoplayRef.current = true;

    const unlock = (e) => {
      // Let the toggle button handle its own clicks (so a first tap on the
      // button isn't played-then-immediately-paused by two handlers).
      if (e.target instanceof Element && e.target.closest(".audio-toggle")) return;
      if (!mutedAutoplayRef.current) return;
      mutedAutoplayRef.current = false;
      audio.muted = false;
      if (audio.paused) {
        // Muted playback failed outright (rare) — start audibly instead.
        const p = audio.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => setStatus("paused"));
        }
      }
      rampTo(targetVolume);
    };
    window.addEventListener("pointerdown", unlock, { capture: true, passive: true });
    window.addEventListener("keydown", unlock, { capture: true });
    window.addEventListener("wheel", unlock, { capture: true, passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlock, { capture: true });
      window.removeEventListener("keydown", unlock, { capture: true });
      window.removeEventListener("wheel", unlock, { capture: true });
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !music?.src) return;
    if (status === "error") return;
    if (status === "playing" || status === "loading") {
      // An explicit pause is respected for the rest of the visit.
      userPausedRef.current = true;
      mutedAutoplayRef.current = false;
      audio.pause();
    } else {
      userPausedRef.current = false;
      // Playing deliberately always means audible.
      mutedAutoplayRef.current = false;
      audio.muted = false;
      audio.volume = music?.defaultVolume ?? 0.25;
      setStatus("loading");
      const p = audio.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => setStatus("paused"));
      }
    }
  };

  if (!music?.src) return null;

  const isPlaying = status === "playing";
  const isLoading = status === "loading";
  const isError = status === "error";
  const label = isError
    ? "Soundtrack unavailable"
    : isPlaying
      ? music.pauseLabel || "Pause music"
      : music.label || "Play music";

  return (
    <>
      <audio ref={audioRef} src={music.src} loop muted preload="metadata" />
      <button
        type="button"
        className="audio-toggle"
        data-state={status}
        aria-pressed={isPlaying}
        aria-label={label}
        title={label}
        onClick={toggle}
        disabled={isError}
      >
        {isError ? (
          <Music size={18} aria-hidden="true" />
        ) : isLoading ? (
          <span className="audio-loading" aria-hidden="true" />
        ) : isPlaying ? (
          <>
            <span className="eq" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="sr-only">Playing</span>
          </>
        ) : (
          <Music size={18} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
