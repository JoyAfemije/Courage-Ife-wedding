import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import weddingData from "../data/weddingData.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const { contact } = weddingData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

  const channels = [
    { Icon: Phone, label: "Call", value: contact.phoneNumber, href: `tel:${contact.phoneNumber}`, external: false },
    { Icon: MessageCircle, label: "WhatsApp", value: "Message us", href: whatsappUrl, external: true },
  ];

  return (
    <section className="relative bg-night section border-t border-graphite">
      <div className="wrap max-w-xl">
        <SectionHeading
          eyebrow="Questions?"
          title={contact.heading}
          intro={contact.contactPerson}
        />

        <div className="mt-14 border-t border-graphite">
          {channels.map(({ Icon, label, value, href, external }, index) => (
            <Reveal key={label} delay={index * 90}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5 border-b border-graphite py-6 transition-colors duration-300 hover:bg-charcoal/40"
              >
                <Icon
                  size={20}
                  className="ml-2 shrink-0 text-champagne transition-transform duration-300 group-hover:translate-x-0.5"
                />
                <span className="flex-1">
                  <span className="block font-body text-[0.65rem] uppercase tracking-[0.28em] text-silver/70">
                    {label}
                  </span>
                  <span className="block font-display text-xl text-ivory mt-0.5">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="mr-2 text-ash transition-all duration-300 group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
