import { useEffect, useState } from "react";
import weddingData from "../data/weddingData.js";

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
    const interval = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-wine-deep text-cream py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-heading tracking-[0.2em] text-xs sm:text-sm text-gold-soft mb-3">
          COUNTING DOWN TO
        </p>
        <h2 className="font-script text-4xl sm:text-5xl mb-10">
          Our Wedding Day
        </h2>

        {time.done ? (
          <p className="font-heading text-2xl sm:text-3xl text-gold-soft">
            Today is the day!
          </p>
        ) : (
          <div className="flex justify-center gap-3 sm:gap-6">
            {units.map((unit) => (
              <div
                key={unit.key}
                className="flex flex-col items-center bg-cream/5 border border-gold-soft/30 rounded-xl w-16 sm:w-24 py-4 sm:py-6"
              >
                <span className="font-heading text-2xl sm:text-4xl font-semibold tabular-nums">
                  {String(time[unit.key]).padStart(2, "0")}
                </span>
                <span className="font-body text-[10px] sm:text-xs mt-1 text-cream/70">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
