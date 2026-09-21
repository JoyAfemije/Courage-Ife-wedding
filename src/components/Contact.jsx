import { Phone, MessageCircle, Mail } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function Contact() {
  const { contact } = weddingData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

  return (
    <section className="bg-cream-deep/60 py-20 sm:py-28">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="divider-ornament justify-center mb-4">
          <span className="font-heading tracking-[0.2em] text-xs text-wine/70">
            QUESTIONS?
          </span>
        </div>
        <h2 className="font-script text-4xl sm:text-5xl text-wine-deep mb-3">
          {contact.heading}
        </h2>
        <p className="font-body text-ink/70 mb-9">{contact.contactPerson}</p>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <a
            href={`tel:${contact.phoneNumber}`}
            className="flex flex-col items-center gap-2 rounded-xl border border-gold-soft/40 bg-ivory py-5 hover:border-wine transition-colors duration-200"
          >
            <Phone size={20} className="text-wine" />
            <span className="font-heading text-xs text-ink/75">Call</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-xl border border-gold-soft/40 bg-ivory py-5 hover:border-wine transition-colors duration-200"
          >
            <MessageCircle size={20} className="text-wine" />
            <span className="font-heading text-xs text-ink/75">WhatsApp</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center gap-2 rounded-xl border border-gold-soft/40 bg-ivory py-5 hover:border-wine transition-colors duration-200"
          >
            <Mail size={20} className="text-wine" />
            <span className="font-heading text-xs text-ink/75">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
