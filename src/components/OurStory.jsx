import weddingData from "../data/weddingData.js";
import storyBg from "../assets/story-bg.jpg";
import Reveal from "./Reveal.jsx";

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
        className="absolute inset-0 h-full w-full object-cover object-center grayscale contrast-[1.05]"
      />
      {/* Legibility scrims — heavy dark wash + edge fades so copy always reads */}
      <div className="absolute inset-0 bg-obsidian/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/55 to-obsidian" />

      {/* Content */}
      <div className="relative z-10 wrap section">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-6">Our Journey</p>
            <h2 className="display-lg text-ivory mb-8">{story.heading}</h2>
            <p className="font-display italic text-2xl sm:text-[1.75rem] leading-snug text-champagne-soft">
              “{story.intro}”
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <ol className="relative mx-auto mt-16 max-w-2xl border-l border-ivory/20 pl-8 sm:mt-20 sm:pl-12">
          {story.milestones.map((milestone, index) => (
            <li key={milestone.year} className="relative pb-14 last:pb-0">
              <span
                className="absolute -left-[calc(2rem+4.5px)] top-2 h-[9px] w-[9px] rotate-45 bg-champagne sm:-left-[calc(3rem+4.5px)]"
                aria-hidden="true"
              />
              <Reveal delay={index * 60}>
                <span className="font-display text-3xl text-ivory/60 sm:text-4xl">
                  {milestone.year}
                </span>
                <h3 className="mt-2 font-display text-2xl text-ivory sm:text-3xl">
                  {milestone.title}
                </h3>
                <p className="mt-3 font-body leading-relaxed text-silver">
                  {milestone.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
