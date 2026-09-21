import { useState } from "react";
import { ChevronDown } from "lucide-react";
import weddingData from "../data/weddingData.js";

export default function FAQ() {
  const { faq } = weddingData;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-2xl mx-auto px-6 py-20 sm:py-28">
      <div className="text-center mb-12">
        <div className="divider-ornament justify-center mb-4">
          <span className="font-heading tracking-[0.2em] text-xs text-wine/70">
            GOOD TO KNOW
          </span>
        </div>
        <h2 className="font-script text-4xl sm:text-5xl text-wine-deep">
          {faq.heading}
        </h2>
      </div>

      <div className="divide-y divide-gold-soft/40 border-y border-gold-soft/40">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading text-base text-wine-deep">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-body text-sm text-ink/70 leading-relaxed pb-5">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
