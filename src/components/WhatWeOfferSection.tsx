"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconArrowRight } from "./Icons";

interface WhatWeOfferProps {
  onOpenConsultation?: (serviceTitle?: string) => void;
}

interface ServiceCardItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  tagline: string;
  hoverTitle: string;
  description: string;
  image: string;
  alt: string;
  quoteService: string;
}

const CEILING_SERVICES: ServiceCardItem[] = [
  {
    id: "gypsum-false-ceiling",
    number: "01",
    badge: "01 • FALSE CEILING",
    title: "GYPSUM FALSE CEILING",
    tagline: "Designer Coves & Stepped Drops",
    hoverTitle: "Gypsum False Ceiling Contractor",
    description:
      "Turnkey designer false ceilings with cove LED lighting, stepped profiles, and flawless fire-resistant gypsum board finishing for living rooms and commercial spaces.",
    image: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp",
    alt: "QARAT executed stepped cove gypsum false ceiling with warm indirect lighting in Lucknow",
    quoteService: "Gypsum False Ceiling",
  },
  {
    id: "pop-murga-jali-ceiling",
    number: "02",
    badge: "02 • POP MURGA JALI",
    title: "POP MURGA JALI CEILING",
    tagline: "Traditional Wire-Mesh Durability",
    hoverTitle: "POP Murga Jali False Ceiling Contractor",
    description:
      "Heavy-duty wire mesh (Murga Jali) and Plaster of Paris construction. Perfect for intricate ornamental cornices, domes, and lasting structural durability.",
    image: "/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp",
    alt: "QARAT heavy-duty wire mesh POP murga jali ceiling structure",
    quoteService: "POP Murga Jali Ceiling",
  },
  {
    id: "gypsum-2x2-grid-ceiling",
    number: "03",
    badge: "03 • 2x2 MODULAR GRID",
    title: "GYPSUM 2x2 GRID CEILING",
    tagline: "Modular Commercial Systems",
    hoverTitle: "Gypsum 2x2 Grid False Ceiling Contractor",
    description:
      "Modular T-grid ceiling systems with PVC-laminated washable or acoustic tiles. Standard for corporate offices, IT setups, and institutional halls.",
    image: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-01.webp",
    alt: "QARAT modular 2x2 T-grid ceiling system for commercial interiors",
    quoteService: "Gypsum 2x2 Grid Ceiling",
  },
  {
    id: "pvc-panel-ceiling",
    number: "04",
    badge: "04 • WATERPROOF PVC",
    title: "PVC PANEL CEILING",
    tagline: "Waterproof & Termite-Proof Cladding",
    hoverTitle: "PVC Panel Ceiling Contractor",
    description:
      "100% waterproof and termite-proof tongue-and-groove PVC panel ceiling cladding in luxury wood and matte textures. Ideal for damp zones, balconies, and kitchens.",
    image: "/images/qarat/ceiling/qarat-pvc-panel-ceiling-01.webp",
    alt: "QARAT waterproof tongue-and-groove PVC panel ceiling installation",
    quoteService: "PVC Ceiling Installation",
  },
];

export function WhatWeOfferSection({ onOpenConsultation }: WhatWeOfferProps) {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <section
      id="what-we-offer"
      className="py-14 sm:py-20 lg:py-24 bg-[#ede6dc] text-[#241a15] border-b border-[#dfd6c8] scroll-mt-20 relative z-10"
    >
      {/* Anchor alias for compatibility */}
      <div id="services" className="sr-only" />

      <div className="container px-4 sm:px-6 lg:px-10 mx-auto max-w-[1600px]">
        {/* Main Section Content: Left Column + 4 Big Image Cards */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-8 xl:gap-10">
          {/* Left Column (Vertically Centered Services Copy & CTA) */}
          <div className="w-full lg:w-[22%] xl:w-[20%] shrink-0 flex flex-col justify-center py-4 lg:py-8 self-center">
            <div className="flex flex-col">
              {/* Category Eyebrow */}
              <span className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.24em] text-[#8c6d37] block mb-3">
                OUR SERVICES
              </span>

              {/* Editorial Serif Heading */}
              <h2 className="text-3xl sm:text-4xl xl:text-[2.85rem] font-serif text-[#281326] font-normal leading-[1.12] tracking-tight">
                What We Offer
              </h2>

              {/* Services Description */}
              <p className="mt-4 sm:mt-5 text-xs sm:text-[13px] text-[#5a4d43] leading-relaxed max-w-sm">
                Specialized turnkey false ceiling execution in Lucknow. Engineered with heavy-gauge framing, precision laser alignment, and crack-free durability.
              </p>

              {/* Action CTA Button */}
              <div className="mt-7 sm:mt-8">
                <button
                  type="button"
                  onClick={() => onOpenConsultation?.("Gypsum False Ceiling")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#baa867] hover:bg-[#281326] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
                >
                  <span>Get a Quote</span>
                  <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Big Vertical Cards in a Row */}
          <div className="w-full lg:w-[78%] xl:w-[80%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
              {CEILING_SERVICES.map((card, idx) => {
                const isCardActive = activeCardId === card.id;

                return (
                  <article
                    key={card.id}
                    onClick={() => setActiveCardId(isCardActive ? null : card.id)}
                    className="group flex flex-col select-none cursor-pointer"
                  >
                    {/* Enlarged Image Container with Grand Vertical Proportions */}
                    <div className="relative aspect-[3/4] xs:aspect-[3/4.2] sm:aspect-[3/4.4] lg:aspect-[3/4.2] xl:aspect-[3/4.3] w-full min-h-[300px] xs:min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] xl:min-h-[520px] overflow-hidden bg-[#ded4c5] shadow-sm rounded-lg sm:rounded-none">
                      {/* High-Resolution Ceiling Image */}
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        quality={95}
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Subtle Ambient Bottom Shadow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />

                      {/* Mobile Touch Indicator Badge */}
                      <div className="lg:hidden absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-semibold text-[#baa867] border border-[#baa867]/30 flex items-center gap-1 shadow-sm">
                        <span>{isCardActive ? "Close" : "Details"}</span>
                      </div>

                      {/* HOVER / TAP OVERLAY: Displays the Services Content */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[#1b0d1a]/95 via-[#281326]/85 to-[#281326]/50 backdrop-blur-[2px] transition-all duration-400 ease-out p-5 sm:p-6 flex flex-col justify-between text-white z-20 ${
                          isCardActive
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                        }`}
                      >
                        {/* Overlay Top Bar: Badge & Number */}
                        <div className="flex items-center justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#baa867]">
                            {card.badge}
                          </span>
                          <span className="text-xs font-serif text-[#baa867] font-bold">
                            0{idx + 1}
                          </span>
                        </div>

                        {/* Overlay Center: Content from Image 2 */}
                        <div className="space-y-2.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75">
                          <h4 className="text-base sm:text-lg font-serif font-semibold text-white leading-snug">
                            {card.hoverTitle}
                          </h4>

                          <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-light">
                            {card.description}
                          </p>
                        </div>

                        {/* Overlay Bottom: Get Quote CTA */}
                        <div className="pt-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-150">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenConsultation?.(card.quoteService);
                            }}
                            className="w-full py-2.5 px-3 bg-[#baa867] hover:bg-[#a79654] text-white text-[11px] font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-98 cursor-pointer"
                          >
                            <span>Get Quote</span>
                            <IconArrowRight className="w-3.5 h-3.5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Beneath Image: 2-Line Reference Typography & Mobile Quick Action */}
                    <div className="mt-3.5 flex items-start justify-between gap-2 text-left">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs sm:text-[13px] font-sans font-bold tracking-[0.14em] uppercase text-[#281326] group-hover:text-[#8c6d37] transition-colors leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#706256] mt-1 font-normal tracking-wide">
                          {card.tagline}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenConsultation?.(card.quoteService);
                        }}
                        className="lg:hidden shrink-0 px-3 py-1.5 rounded-full bg-[#baa867] hover:bg-[#281326] text-white text-[10px] font-semibold uppercase tracking-wider transition-all shadow-2xs active:scale-95 cursor-pointer flex items-center gap-1"
                        aria-label={`Get quote for ${card.title}`}
                      >
                        <span>Quote</span>
                        <IconArrowRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
