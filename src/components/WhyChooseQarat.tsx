"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { IconShield, IconArrowUpRight } from "./Icons";

interface WhyChooseProps {
  onOpenConsultation?: (title?: string) => void;
}

export function WhyChooseQarat({ onOpenConsultation }: WhyChooseProps) {
  const visualCards = [
    {
      number: "01",
      roman: "I",
      title: "Material Excellence",
      subtitle: "Verified Substrates & Direct Supply",
      description:
        "We eliminate counterfeit materials by sourcing directly from Saint-Gobain Gyproc, USG Knauf, and certified BWR marine plywood mills.",
      image: "/images/3d/material-excellence.jpg",
      alt: "3D luxury architectural material swatch composition with marble, fluted oak, limestone and champagne-gold metal",
    },
    {
      number: "02",
      roman: "II",
      title: "Skilled Craftsmanship",
      subtitle: "Disciplined In-House Artisans",
      description:
        "Zero subcontractor disconnect. Dedicated ceiling installers and master carpenters execute laser-level leveling and seamless joint taping.",
      image: "/images/3d/skilled-craftsmanship.jpg",
      alt: "3D architectural craftsmanship composition featuring precision mitered molding, gold calipers and artisan tools",
    },
    {
      number: "03",
      roman: "III",
      title: "Customized Designs",
      subtitle: "Bespoke Spatial Proportion",
      description:
        "Every stepped ceiling drop, acoustic louver run, and wardrobe dimension is custom-tailored to the architectural light and layout of your space.",
      image: "/images/3d/customized-designs.jpg",
      alt: "3D isometric architectural interior scale model with warm stepped cove lighting and modern partition",
    },
  ];

  return (
    <section
      id="why-qarat"
      className="py-16 sm:py-20 lg:py-28 bg-[var(--color-paper-2)] text-[var(--color-ink)] border-b border-[var(--color-rule)] scroll-mt-20 relative overflow-hidden"
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Centered Architectural Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-accent)] block mb-2.5">
              The Architectural Standard
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-[var(--color-ink)] font-normal leading-[1.15]">
              Why Choose QARAT
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
              We replace guesswork and subcontractor handover delays with disciplined execution,
              verified substrate integrity, and single-source accountability.
            </p>
          </div>

          {/* 3D Showcase - 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            {visualCards.map((feature) => (
              <div
                key={feature.number}
                className="flex flex-col group card-plate p-5 sm:p-6 bg-[var(--color-plate)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] transition-all duration-300 rounded-sm shadow-xs hover:shadow-md"
              >
                {/* 3D Illustration Stage */}
                <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-xs bg-[var(--color-paper)]/70 border border-[var(--color-rule)] shadow-2xs">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-contain object-center p-5 sm:p-6 transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 360px"
                    priority
                  />
                </div>

                {/* Feature Sequence & Hairline Divider */}
                <div className="flex items-center gap-3 mb-3 w-full">
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)]">
                    {feature.number}
                  </span>
                  <span className="h-[1px] flex-1 bg-[var(--color-rule)]" />
                  <span className="font-serif text-sm text-[var(--color-accent)] font-normal">
                    {feature.roman}
                  </span>
                </div>

                {/* Heading & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-ink)] font-normal mb-1 leading-snug">
                  {feature.title}
                </h3>
                <span className="text-[11px] font-medium text-[var(--color-accent)] block mb-2.5">
                  {feature.subtitle}
                </span>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Pillars of Execution Credibility */}
          <div className="pt-10 border-t border-[var(--color-rule)]">
            <h3 className="text-lg font-serif text-[var(--color-ink)] font-normal text-center mb-8">
              Verified Principles of Execution
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {siteConfig.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-4 rounded-sm border border-[var(--color-rule)] bg-[var(--color-paper)]/60 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <IconShield className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-xs font-mono font-semibold text-[var(--color-accent)]">
                      {pillar.number}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[var(--color-ink)]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {onOpenConsultation && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => onOpenConsultation("General Project Discussion")}
                  className="btn-primary w-full sm:w-auto text-xs py-2.5 px-6"
                >
                  <span>Discuss Your Project Standards</span>
                  <IconArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
