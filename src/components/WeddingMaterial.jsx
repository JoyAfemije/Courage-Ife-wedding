import { MessageCircle, Phone, Package } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function WeddingMaterial() {
  const { material } = weddingData;

  const whatsappUrl = `https://wa.me/${material.whatsappNumber}?text=${encodeURIComponent(
    material.whatsappMessage
  )}`;

  return (
    <section className="bg-wine text-cream py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-start">
          <div className="hidden sm:flex w-14 h-14 rounded-full bg-cream/10 items-center justify-center border border-gold-soft/40 shrink-0">
            <Package size={24} className="text-gold-soft" />
          </div>

          <div>
            <div className="divider-ornament mb-4">
              <span className="font-heading tracking-[0.2em] text-xs text-gold-soft">
                ASO-EBI
              </span>
            </div>
            <h2 className="font-script text-4xl sm:text-5xl mb-5">
              {material.heading}
            </h2>
            <p className="font-body text-cream/85 leading-relaxed mb-8">
              {material.body}
            </p>

            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 font-body text-sm">
              <div>
                <dt className="text-gold-soft mb-1">Material</dt>
                <dd className="text-cream/90">{material.materialType}</dd>
              </div>
              <div>
                <dt className="text-gold-soft mb-1">Colour</dt>
                <dd className="text-cream/90">{material.colour}</dd>
              </div>
              <div>
                <dt className="text-gold-soft mb-1">Pickup Location</dt>
                <dd className="text-cream/90">{material.pickupLocation}</dd>
              </div>
              <div>
                <dt className="text-gold-soft mb-1">Contact Person</dt>
                <dd className="text-cream/90">
                  {material.contactPerson} &middot; {material.phoneNumber}
                </dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold text-wine-deep font-heading text-sm px-6 py-3 hover:bg-gold-soft transition-colors duration-200"
              >
                <MessageCircle size={18} />
                {material.ctaLabel}
              </a>
              <a
                href={`tel:${material.phoneNumber}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream/60 text-cream font-heading text-sm px-6 py-3 hover:bg-cream/10 transition-colors duration-200"
              >
                <Phone size={18} />
                Call {material.contactPerson}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
