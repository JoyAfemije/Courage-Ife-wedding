import { useEffect, useRef, useState } from "react";

/**
 * Reveal — lightweight scroll-triggered entrance built on IntersectionObserver.
 * Progressive: if the API is unavailable, content renders visible immediately.
 * Honors prefers-reduced-motion (CSS neutralizes the transform/opacity).
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  once = true,
  ...rest
}) {
  const ref = useRef(null);
  // If IntersectionObserver is unavailable, render content visible immediately.
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
