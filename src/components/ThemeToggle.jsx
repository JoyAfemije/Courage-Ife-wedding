import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const KEY = "theme";

/**
 * ThemeToggle — a manual light/dark switch that overrides the device setting
 * and remembers the choice (localStorage). The <head> script reads the same
 * key, so the preference survives reloads; when nothing is stored the site
 * keeps following the device automatically.
 *
 * Rendered inside the pinned-dark navbar, so the icon reads light on both
 * themes and never depends on the flip.
 */
export default function ThemeToggle({ className = "" }) {
  // The <head> script has already resolved the theme before React mounts, so we
  // read it once during the initial render — no effect round-trip needed.
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme") || "dark"
      : "dark"
  );

  const isDark = theme !== "light";

  // Keep every mounted instance (desktop + mobile) and other tabs in sync when
  // the theme changes elsewhere. This only reacts to external events.
  useEffect(() => {
    const sync = () =>
      setTheme(document.documentElement.getAttribute("data-theme") || "dark");
    window.addEventListener("themechange", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("themechange", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode — the in-memory switch still applies */
    }
    const tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute("content", next === "dark" ? "#0B0B0B" : "#f5f2ea");
    setTheme(next);
    window.dispatchEvent(new Event("themechange"));
  };

  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={!isDark}
      title={label}
      className={`flex size-11 items-center justify-center rounded-full text-ivory transition-colors duration-300 hover:text-gold ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
