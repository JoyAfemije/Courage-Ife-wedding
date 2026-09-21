import weddingData from "../data/weddingData.js";

export default function WeddingColours() {
  const { colours } = weddingData;

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
      <div className="divider-ornament justify-center mb-4">
        <span className="font-heading tracking-[0.2em] text-xs text-wine/70">
          DRESS CODE
        </span>
      </div>
      <h2 className="font-script text-4xl sm:text-5xl text-wine-deep mb-12">
        {colours.heading}
      </h2>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 mb-10">
        {colours.palette.map((colour) => (
          <div key={colour.name} className="flex flex-col items-center gap-3">
            <span
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-ivory shadow-md"
              style={{ backgroundColor: colour.hex }}
              aria-hidden="true"
            />
            <span className="font-heading text-sm text-ink/80">
              {colour.name}
            </span>
          </div>
        ))}
      </div>

      <p className="font-body italic text-ink/70 max-w-md mx-auto">
        {colours.note}
      </p>
    </section>
  );
}
