import { useEffect, useState } from "react";
import weddingData from "../data/weddingData.js";
import Reveal from "./Reveal.jsx";

function getTimeRemaining() {
  const target = new Date(weddingData.weddingDate).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { done: false, days, hours, minutes, seconds };
}

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const [time, setTime] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-night border-y border-graphite section">
      <div className="wrap text-center">
        <Reveal>
          <p className="eyebrow mb-6">Counting Down To</p>
          <h2 className="display-md text-ivory mb-14 sm:mb-16">
            Our Wedding Day
          </h2>
        </Reveal>

        {time.done ? (
          <Reveal>
            <p className="font-display text-4xl sm:text-5xl text-champagne">
              Today is the day.
            </p>
          </Reveal>
        ) : (
          <Reveal delay={120}>
            <div className="flex items-start justify-center divide-x divide-graphite">
              {units.map((unit) => (
                <div
                  key={unit.key}
                  className="flex w-20 flex-col items-center sm:w-40 px-2 sm:px-4"
                >
                  <span className="font-display font-light text-ivory tabular-nums leading-none text-[clamp(2.75rem,9vw,5.5rem)]">
                    {String(time[unit.key]).padStart(2, "0")}
                  </span>
                  <span className="mt-4 font-body text-[0.6rem] uppercase tracking-[0.28em] text-silver/70 sm:text-[0.7rem] sm:tracking-[0.32em]">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
