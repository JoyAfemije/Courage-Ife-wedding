import weddingData from "../data/weddingData.js";
import logoSrc from "../assets/wedding-logo.png";

/**
 * The couple's monogram logo (white artwork on a transparent field).
 * Renders with the same slow 3D "coin-spin" as the reference video;
 * `spin` can be turned off and `tint` recolours it dark for light surfaces.
 */
export default function WeddingLogo({
  className = "",
  spin = true,
  tint = false,
  alt = `${weddingData.couple.brideName} & ${weddingData.couple.groomName} monogram`,
}) {
  return (
    <img
      src={logoSrc}
      alt={alt}
      draggable={false}
      className={[
        "wedding-logo",
        spin ? "wedding-logo--spin" : "",
        tint ? "wedding-logo--tint" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
