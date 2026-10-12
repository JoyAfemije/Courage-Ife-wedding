import Reveal from "./Reveal.jsx";

/**
 * SectionHeading — shared editorial heading block for consistent rhythm.
 * align: "center" | "left"
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "ivory",
  className = "",
}) {
  const isCenter = align === "center";
  const titleColor = tone === "ivory" ? "text-ivory" : "text-obsidian";
  const introColor = tone === "ivory" ? "text-silver" : "text-ash";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={`display-lg ${titleColor}`}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p
            className={`font-body ${introColor} leading-relaxed max-w-xl mt-6 ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
