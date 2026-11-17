"use client";

import React from "react";
import Image from "next/image";
import {
  IconAward,
  IconClock,
  IconUsers,
  IconArrowUpRight,
} from "./Icons";

interface WhoWeAreProps {
  onOpenConsultation?: (title?: string) => void;
}

export function WhoWeAreSection({ onOpenConsultation }: WhoWeAreProps) {
  // 3 Core Pillars matching the exact content of Reference Image 2 with luxury editorial descriptors
  const highlights = [
    {
      id: "quality-work",
      title: "Quality Work",
      desc: "Premium Gyproc materials & flawless finishes",
      icon: IconAward,
    },
    {
      id: "on-time-delivery",
      title: "On-Time Delivery",
      desc: "Strict project milestones & reliable handover",
      icon: IconClock,
    },
    {
      id: "experienced-team",
      title: "Experienced Team",
      desc: "Skilled ceiling artisans & site supervisors",
      icon: IconUsers,
    },
  ];

  return (
    <section
      id="who-we-are"
      className="py-16 sm:py-20 lg:py-24 bg-[#faf8f5] text-[var(--color-ink)] border-b border-[var(--color-rule)] scroll-mt-20 relative overflow-hidden"
    >
      <div className="container">

        {/* Main Editorial Panoramic Card: Warm Ambient Depth & Luxury Frame */}
        <div className="relative bg-gradient-to-br from-[#ffffff] via-[#fcfbf9] to-[#f8f4ec] border border-[#e5dcce] rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-10 lg:p-12 xl:p-14 shadow-[0_12px_45px_-15px_rgba(40,19,38,0.07)] overflow-hidden">

          {/* Subtle warm ambient lighting accents in background */}
          <div
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-radial from-[#baa867]/15 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-radial from-[#baa867]/10 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

            {/* Left Column (4 Cols): Distinctive Organic Arched Photo Frame with Warm Halo Glow */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative group w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] lg:max-w-none">

                {/* Golden ambient halo glow behind the frame */}
                <div
                  className="absolute -inset-1 rounded-tl-[95px] xs:rounded-tl-[115px] sm:rounded-tl-[145px] rounded-tr-[24px] sm:rounded-tr-[28px] rounded-bl-[18px] sm:rounded-bl-[22px] rounded-br-[75px] xs:rounded-br-[90px] sm:rounded-br-[120px] bg-gradient-to-tr from-[#baa867]/30 via-[#baa867]/10 to-transparent blur-sm pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Primary Framed Photo with Organic Arches */}
                <div className="relative aspect-[4/5] rounded-tl-[90px] xs:rounded-tl-[110px] sm:rounded-tl-[140px] rounded-tr-[20px] sm:rounded-tr-[24px] rounded-bl-[16px] sm:rounded-bl-[18px] rounded-br-[70px] xs:rounded-br-[85px] sm:rounded-br-[115px] overflow-hidden bg-[#241a15] shadow-lg border border-[#baa867]/30">
                  <Image
                    src="/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp"
                    alt="Qarat Interior Decorator luxury living room false ceiling craftsmanship in Lucknow"
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle warm lighting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                  {/* Floating Architectural Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 bg-[#1a120b]/85 backdrop-blur-md rounded-xl py-2 px-2.5 sm:px-3 border border-[#baa867]/35 flex items-center justify-center gap-2 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#baa867] animate-pulse" />
                    <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-medium text-[#f5ebd7] tracking-[0.14em] sm:tracking-[0.16em] uppercase font-sans whitespace-nowrap">
                      Turnkey Craftsmanship in Lucknow
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column (5 Cols): Narrative Content from Image 2 & Engagement CTA */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-5 text-center lg:text-left">

              {/* Header Group: Single Heading with Architectural Badge */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#baa867]/12 border border-[#baa867]/30 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8c6721]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
                  Lucknow Interior Specialists
                </div>

                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-serif text-[var(--color-ink)] font-normal tracking-tight leading-[1.12]">
                  Who We Are
                </h2>
              </div>

              {/* Description Text */}
              <p className="text-xs xs:text-sm sm:text-[15px] text-[#4a423b] leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
                Qarat Interior Decorator provides professional ceiling and interior work services in Lucknow. We specialize in high-quality ceiling solutions and elegant interior finishes for residential and commercial spaces, focusing on quality workmanship, durable materials, and customer satisfaction.
              </p>

              {/* Interactive Consultation Trigger */}
              <div className="pt-2 flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => onOpenConsultation?.("Who We Are Consultation")}
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-[#281326] hover:bg-[#3d1e3a] text-[#baa867] hover:text-white border border-[#baa867]/40 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group"
                >
                  <span>Free Site Inspection</span>
                  <IconArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <span className="text-xs text-[var(--color-muted)] font-serif italic">
                  Residential &amp; Commercial Turnkey
                </span>
              </div>
            </div>

            {/* Right Column (3 Cols): 3-Pillar Stack with Luxury Styling */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#e5dcce] pt-6 lg:pt-0 lg:pl-8 xl:pl-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="p-3 sm:p-3.5 rounded-xl bg-white/60 hover:bg-white border border-[#e5dcce]/60 hover:border-[#baa867]/40 transition-all duration-300 shadow-2xs hover:shadow-xs group flex items-start gap-3 sm:gap-3.5"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#f8f5ee] to-[#ece3d0] text-[#8c6721] border border-[#d8cbb1] shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                      </div>
                      <div className="space-y-0.5 min-w-0 text-left">
                        <h4 className="text-xs sm:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase text-[var(--color-ink)] group-hover:text-[#8c6721] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-[var(--color-muted)] leading-tight font-sans">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
