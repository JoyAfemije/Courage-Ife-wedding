import { useState } from "react";
import weddingData from "../data/weddingData.js";
import storyBg from "../assets/story-bg.jpg";
import Reveal from "./Reveal.jsx";

/** Story photograph — lazy-loaded, resolves from a shimmer then breathes into place. */
function StoryPhoto({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`story-photo anim-border aspect-[4/5] w-full sm:aspect-auto sm:h-full sm:min-h-[24rem] ${
        loaded ? "is-loaded" : ""
      }`}
    >
      <div className="story-photo__skeleton" aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
      {/* quiet editorial grade — keeps the photo in the site's palette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-obsidian/35 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

export default function OurStory() {
  const { story } = weddingData;

  return (
    <section id="story" className="relative overflow-hidden bg-obsidian">
      {/* Background photograph */}
      <img
        src={storyBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center contrast-[1.03]"
      />
      {/* Legibility scrims — heavy dark wash + edge fades so copy always reads */}
      <div className="absolute inset-0 bg-obsidian/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/55 to-obsidian" />

      {/* Content */}
      <div className="relative z-10 wrap section">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal from="zoom">
            <p className="eyebrow mb-6">Our Journey</p>
            <h2 className="display-lg text-ivory mb-8">{story.heading}</h2>
            <p className="font-display italic text-2xl sm:text-[1.75rem] leading-snug text-champagne-soft">
              “{story.intro}”
            </p>
          </Reveal>
        </div>

        {/* Chapter timeline — image and text alternate sides as you scroll */}
        <div className="relative mx-auto mt-20 max-w-5xl sm:mt-28">
          {/* Centre spine (desktop) / left spine (mobile) */}
          <span
            className="pointer-events-none absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-transparent via-ivory/20 to-transparent sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-16 sm:space-y-28">
            {story.milestones.map((milestone, index) => {
              const imageOnLeft = index % 2 === 0;

              return (
                <li
                  key={milestone.id ?? milestone.title}
                  className="story-chapter relative pl-10 sm:grid sm:grid-cols-2 sm:items-stretch sm:gap-x-16 sm:pl-0 sm:pr-0"
                >
                  {/* Node on the spine */}
                  <span
                    className="absolute left-0 top-2 h-[15px] w-[15px] rotate-45 border border-gold/70 bg-obsidian sm:left-1/2 sm:-ml-[7.5px]"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-[3px] bg-gold" />
                  </span>

                  {/* Photograph — glides in from its own side */}
                  <div
                    className={
                      imageOnLeft
                        ? "sm:col-start-1 sm:row-start-1"
                        : "sm:col-start-2 sm:row-start-1"
                    }
                  >
                    <Reveal
                      from={imageOnLeft ? "left" : "right"}
                      delay={120}
                      className="h-full"
                    >
                      <StoryPhoto
                        src={milestone.image}
                        alt={milestone.imageAlt}
                      />
                    </Reveal>
                  </div>

                  {/* Copy — glides in from the opposite side */}
                  <div
                    className={`mt-7 flex flex-col justify-center sm:mt-0 sm:row-start-1 ${
                      imageOnLeft
                        ? "sm:col-start-2 sm:row-start-1 sm:pl-0"
                        : "sm:col-start-1 sm:row-start-1 sm:text-right sm:pr-0"
                    }`}
                  >
                    <Reveal
                      from={imageOnLeft ? "right" : "left"}
                      className="h-full flex flex-col justify-center"
                    >
                      <span className="text-grad font-display text-4xl leading-none sm:text-5xl">
                        {milestone.year}
                      </span>
                      <h3 className="mt-3 font-display text-[1.75rem] text-ivory sm:text-4xl">
                        {milestone.title}
                      </h3>
                      <span
                        className={`my-5 hidden h-px w-16 bg-gradient-to-r from-gold/70 to-transparent sm:block ${
                          imageOnLeft ? "" : "ml-auto bg-gradient-to-l"
                        }`}
                        aria-hidden="true"
                      />
                      <p className="font-body leading-relaxed text-silver sm:max-w-md sm:inline-block">
                        {milestone.description}
                      </p>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
