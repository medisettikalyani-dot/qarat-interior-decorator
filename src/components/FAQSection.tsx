"use client";

import React, { useState } from "react";
import { IconChevronDown, IconArrowUpRight } from "./Icons";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  onOpenConsultation?: () => void;
}

export function FAQSection({ onOpenConsultation }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What types of false ceilings does QARAT install in Lucknow?",
      answer:
        "QARAT specializes in four core ceiling systems: 1) Designer Gypsum False Ceilings with multi-level stepped coves and concealed LED troughs, 2) Heavy-Duty POP Murga Jali (wire mesh) ceilings for curved domes and ornamental cornices, 3) Modular 2x2 T-Grid Ceilings with acoustic or washable tiles for commercial and corporate offices, and 4) 100% Waterproof PVC Panel Ceilings in realistic wood-grain and matte finishes for damp zones, balconies, and kitchens.",
    },
    {
      question: "How do you ensure false ceilings never sag or develop hairline cracks?",
      answer:
        "Sagging and surface cracks typically occur when contractors use thin, substandard metal channels or improper jointing compounds. QARAT strictly enforces heavy-gauge (0.50mm–0.70mm) galvanized iron (GI) perimeter and intermediate channels with precise hanger spacing, genuine Saint-Gobain Gyproc / USG Knauf boards, multi-pass fiberglass joint tape, and specialized crack-resistant joint compounds cured under daily supervision.",
    },
    {
      question: "What is POP Murga Jali and why choose it over standard gypsum?",
      answer:
        "POP Murga Jali false ceilings use a welded galvanized iron wire mesh framework (Murga Jali) onto which pure Plaster of Paris is hand-applied. It is exceptionally rigid, allowing for complex architectural curvatures, recessed domes, and ornate floral or stepped cornices that gypsum board cannot easily achieve. It offers superior impact resistance and decades of structural longevity.",
    },
    {
      question: "Which ceiling option is best for moisture-prone areas like balconies and kitchens?",
      answer:
        "For areas exposed to humidity, dampness, or steam, we recommend tongue-and-groove PVC panel ceilings or moisture-resistant (green) gypsum boards. PVC panels are 100% waterproof, washable, termite-proof, and require zero painting or ongoing maintenance.",
    },
    {
      question: "Do you construct drywall partition walls and commercial room dividers?",
      answer:
        "Yes. Along with false ceilings, we build structural drywall partitions using high-tensile galvanized metal studs, sound-insulating acoustic infill, and fire-resistant gypsum or cement boards. We also execute corporate glass and metal dividers for executive cabins, conference halls, clinics, and residences in Lucknow.",
    },
    {
      question: "How can I request an itemized quotation and site visit in Lucknow?",
      answer:
        "You can request an estimate by clicking 'Get a Quote' or contacting our team via WhatsApp (+91 93364 11421). Our execution supervisor will visit your site across Lucknow to conduct laser-guided measurements, evaluate substrate heights, and prepare a line-by-line Bill of Quantities (BOQ) with zero hidden escalations.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[var(--color-rule)] scroll-mt-20"
      aria-labelledby="faq-heading"
    >
      <div id="faq" className="sr-only" />
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-accent)] block mb-2">
            Clear Guidance
          </span>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[var(--color-ink)] font-normal leading-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
            Factual guidance on false ceiling types, structural GI channels, crack prevention, and site measurements across Lucknow.
          </p>
        </div>

        {/* Line-Divided Accordion Rows */}
        <div className="divide-y divide-[var(--color-rule)] border-t border-b border-[var(--color-rule)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={index} className="py-5 sm:py-6">
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left flex items-start justify-between gap-3 sm:gap-4 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] group cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <span className="text-xs font-mono font-semibold text-[var(--color-accent)] shrink-0 mt-0.5 sm:mt-1">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-serif text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors pr-1">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-6 h-6 flex items-center justify-center shrink-0 text-[var(--color-ink)] transition-transform duration-200 mt-0.5 ${isOpen ? "rotate-180 text-[var(--color-accent)]" : ""
                      }`}
                    aria-hidden="true"
                  >
                    <IconChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="pl-7 sm:pl-9 pt-3 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote Action */}
        <div className="mt-12 pt-6 border-t border-[var(--color-rule)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-serif text-[var(--color-ink)] font-normal">
              Have a specific architectural specification question?
            </h3>
            <p className="text-xs text-[var(--color-muted)] mt-0.5">
              Our site engineers and execution supervisors provide direct technical clarification.
            </p>
          </div>

          {onOpenConsultation ? (
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn-primary text-xs shrink-0"
            >
              <span>Get a Quote</span>
              <IconArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" />
            </button>
          ) : (
            <a
              href="#quote"
              className="btn-primary text-xs shrink-0"
            >
              <span>Get a Quote</span>
              <IconArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
