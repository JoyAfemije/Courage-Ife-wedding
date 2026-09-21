import weddingData from "../data/weddingData.js";
import storyBg from "../assets/story-bg.jpg";

export default function OurStory() {
  const { story } = weddingData;

  return (
    <section id="story" className="relative py-20 sm:py-28 overflow-hidden">
      <img
        src={storyBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Light wash so the photo stays visible behind the cards */}
      <div className="absolute inset-0 bg-cream/35" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="divider-ornament justify-center mb-4">
            <span className="font-heading tracking-[0.2em] text-xs text-wine-deep bg-cream/70 px-3 py-1 rounded-full">
              OUR JOURNEY
            </span>
          </div>
          <h2 className="font-script text-4xl sm:text-5xl text-wine-deep mb-4 drop-shadow-sm">
            {story.heading}
          </h2>
          <p className="font-body text-ink/85 leading-relaxed bg-cream/70 inline-block px-4 py-1 rounded-full">
            {story.intro}
          </p>
        </div>

        <ol className="relative border-l-2 border-gold-soft/60 sm:border-l-0">
          <span className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-1 bottom-1 w-px bg-gold-soft/60" />
          {story.milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <li
                key={milestone.year}
                className="relative pl-8 sm:pl-0 pb-12 last:pb-0 sm:grid sm:grid-cols-2 sm:gap-10 sm:items-start"
              >
                <span className="absolute left-[-7px] top-1 sm:hidden w-3 h-3 rounded-full bg-wine border-2 border-cream" />
                <span className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-1 w-3.5 h-3.5 rounded-full bg-wine border-2 border-cream z-10" />

                <div className="sm:pr-10">
                  {isEven && <StoryCard milestone={milestone} align="right" />}
                </div>
                <div className="sm:pl-10">
                  {!isEven && <StoryCard milestone={milestone} align="left" />}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function StoryCard({ milestone, align }) {
  return (
    <div
      className={`relative rounded-xl border-[1.5px] border-gold/70 p-[5px] shadow-[0_10px_28px_-10px_rgba(20,83,45,0.4)] ${
        align === "right" ? "sm:ml-auto sm:max-w-md" : "sm:max-w-md"
      }`}
    >
      {/* inner hairline creates the classic double-frame invitation look */}
      <div className="relative rounded-[10px] border border-gold/40 bg-cream/92 px-7 py-7 overflow-visible">
        <FloralCorner className="absolute -top-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 text-gold" />
        <FloralCorner className="absolute -top-4 -right-4 w-12 h-12 sm:w-14 sm:h-14 text-gold -rotate-90 scale-x-[-1]" />
        <FloralCorner className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 text-gold rotate-90" />
        <FloralCorner className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-14 sm:h-14 text-gold rotate-180" />

        {/* small blossom drooping from the top edge, centered */}
        <TopBlossom className="absolute -top-5 left-1/2 -translate-x-1/2 w-9 h-9 text-gold" />

        <span className="font-heading text-sm text-gold tracking-wide">
          {milestone.year}
        </span>
        <h3 className="font-heading text-xl text-wine-deep mt-1 mb-2">
          {milestone.title}
        </h3>
        <p className="font-body text-ink/75 leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  );
}

function FloralCorner({ className }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
      {/* curling vine */}
      <path
        d="M3 3C3 16 6 26 20 29C9 32 3 40 3 57"
        stroke="currentColor"
        strokeWidth="1.3"
        opacity="0.85"
      />
      <path
        d="M3 3C14 3 25 5 28 16C31 7 40 3 57 3"
        stroke="currentColor"
        strokeWidth="1.3"
        opacity="0.85"
      />
      {/* small leaves along the vine */}
      <path d="M10 9C13 7 16 8 17 11C14 12 11 12 10 9Z" fill="currentColor" opacity="0.7" />
      <path d="M8 20C11 19 13 21 13 24C10 24 8 23 8 20Z" fill="currentColor" opacity="0.6" />
      <path d="M20 8C21 5 24 4 26 6C24 9 21 10 20 8Z" fill="currentColor" opacity="0.6" />
      {/* five-petal blossom where the vines meet */}
      <g transform="translate(20,29)">
        <circle cx="0" cy="-5" r="3.2" fill="currentColor" opacity="0.85" />
        <circle cx="4.7" cy="-1.5" r="3.2" fill="currentColor" opacity="0.85" />
        <circle cx="2.9" cy="4.7" r="3.2" fill="currentColor" opacity="0.85" />
        <circle cx="-2.9" cy="4.7" r="3.2" fill="currentColor" opacity="0.85" />
        <circle cx="-4.7" cy="-1.5" r="3.2" fill="currentColor" opacity="0.85" />
        <circle cx="0" cy="0" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

function TopBlossom({ className }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M20 2V13" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <g transform="translate(20,20)">
        <circle cx="0" cy="-7" r="4.2" fill="currentColor" opacity="0.9" />
        <circle cx="6.6" cy="-2.2" r="4.2" fill="currentColor" opacity="0.9" />
        <circle cx="4.1" cy="6.6" r="4.2" fill="currentColor" opacity="0.9" />
        <circle cx="-4.1" cy="6.6" r="4.2" fill="currentColor" opacity="0.9" />
        <circle cx="-6.6" cy="-2.2" r="4.2" fill="currentColor" opacity="0.9" />
        <circle cx="0" cy="0" r="2.6" fill="currentColor" />
      </g>
      <path d="M11 15C7 17 5 21 6 25" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M29 15C33 17 35 21 34 25" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}