import { Calendar, Clock, MapPin } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function Events() {
  const { events } = weddingData;

  return (
    <section id="events" className="bg-cream-deep/60 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="divider-ornament justify-center mb-4">
            <span className="font-heading tracking-[0.2em] text-xs text-wine/70">
              SAVE THE DATE
            </span>
          </div>
          <h2 className="font-script text-4xl sm:text-5xl text-wine-deep">
            Event Details
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-ivory rounded-2xl border border-gold-soft/40 p-7 flex flex-col shadow-sm"
            >
              <h3 className="font-heading text-lg text-wine-deep mb-5">
                {event.name}
              </h3>

              <div className="flex items-start gap-3 mb-3">
                <Calendar size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-ink/80">
                  {event.date}
                </span>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <Clock size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-ink/80">
                  {event.time}
                </span>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-ink/80">
                  {event.venue}
                  <br />
                  <span className="text-ink/60">{event.address}</span>
                </span>
              </div>

              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-full border border-wine text-wine font-heading text-sm px-5 py-2.5 hover:bg-wine hover:text-cream transition-colors duration-200"
              >
                View Location
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
