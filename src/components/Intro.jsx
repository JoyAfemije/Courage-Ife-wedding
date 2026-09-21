import weddingData from "../data/weddingData.js";

export default function Intro() {
  const { intro } = weddingData;

  return (
    <section className="max-w-2xl mx-auto px-6 py-20 sm:py-28 text-center">
      <div className="divider-ornament justify-center mb-6">
        <span className="font-script text-2xl text-wine">Welcome</span>
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl text-wine-deep mb-5">
        {intro.heading}
      </h2>
      <p className="font-body text-base sm:text-lg leading-relaxed text-ink/80">
        {intro.body}
      </p>
    </section>
  );
}
