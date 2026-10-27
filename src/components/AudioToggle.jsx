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

  // Once a visitor deliberately pauses, the first-gesture autoplay must not
  // override them for the rest of the visit.
  const userPausedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = music?.defaultVolume ?? 0.25;

    // Skip the first few seconds of the track — the intro isn't wanted — and
    // resume from that point on every loop.
    const START_AT = 10;
    const skipIntro = () => {
      if (audio.currentTime < START_AT - 0.5) {
        try {
          audio.currentTime = START_AT;
        } catch {
          /* metadata not ready yet */
        }
      }
    };
    const onLoadedMetadata = () => skipIntro();
    const onTimeUpdate = () => {
      if (!audio.paused) skipIntro();
    };

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
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);

    // Autoplay intent: the soundtrack should start the moment the visitor opens
    // the site, then loop continuously until they leave.
    //
    // Browsers only permit audible autoplay once the visitor has shown
    // engagement, so we attempt it immediately (works for returning visitors)
    // and otherwise arm a one-shot start on the very first tap / keypress —
    // dismissing the intro splash counts as that gesture. We never fake a
    // playing state: the UI is driven purely by the audio element's events.
    const attemptPlay = () => {
      if (!music?.src || audio.error || userPausedRef.current) return;
      if (!audio.paused) return;
      const p = audio.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => setStatus("paused"));
      }
    };

    attemptPlay();

    const unlock = (e) => {
      // Let the toggle button handle its own clicks (so a first tap on the
      // button isn't played-then-immediately-paused by two handlers).
      if (e.target instanceof Element && e.target.closest(".audio-toggle")) return;
      attemptPlay();
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
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
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
      audio.pause();
    } else {
      userPausedRef.current = false;
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
      <audio ref={audioRef} src={music.src} loop preload="metadata" />
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
