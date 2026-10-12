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

    // Graceful, single autoplay attempt. Most browsers block audible autoplay
    // without a gesture; if rejected we simply stay paused for a manual tap —
    // we never retry or fake a playing state.
    if (music?.src) {
      const attempt = audio.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => setStatus("paused"));
      }
    }

    return () => {
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
      audio.pause();
    } else {
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
      <audio ref={audioRef} src={music.src} loop preload="none" />
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
