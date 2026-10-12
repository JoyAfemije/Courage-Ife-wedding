import { ArrowUpRight } from "lucide-react";
import weddingData from "../data/weddingData.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Events() {
  const { events } = weddingData;

  return (
    <section id="events" className="relative bg-night section border-t border-graphite">
      <div className="wrap">
        <SectionHeading
          eyebrow="Save the Date"
          title="The Celebration"
          intro="Three moments, one unforgettable day. We would be honoured to have you with us for each of them."
        />

        <div className="mt-16 sm:mt-20 grid md:grid-cols-3 md:divide-x divide-graphite border-t border-graphite md:border-t-0">
          {events.map((event, index) => (
            <Reveal
              key={event.id}
              delay={index * 100}
              className="flex flex-col px-0 md:px-10 py-12 md:py-4 first:md:pl-0 last:md:pr-0"
            >
              <span className="font-display text-champagne text-lg mb-6">
                0{index + 1}
              </span>
              <h3 className="display-md text-ivory mb-8 leading-tight">
                {event.name}
              </h3>

              <dl className="space-y-5 font-body text-sm">
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-silver/70 mb-1.5">
                    Date
                  </dt>
                  <dd className="text-silver">{event.date}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-silver/70 mb-1.5">
                    Time
                  </dt>
                  <dd className="text-silver">{event.time}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-silver/70 mb-1.5">
                    Venue
                  </dt>
                  <dd className="text-ivory">{event.venue}</dd>
                  <dd className="text-silver mt-1">{event.address}</dd>
                </div>
              </dl>

              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-9 inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.24em] text-champagne"
              >
                View Location
                <ArrowUpRight size={14} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
