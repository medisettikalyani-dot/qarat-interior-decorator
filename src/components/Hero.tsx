"use client";

import React from "react";
import Image from "next/image";
import { BotanicalLineArt } from "./ArchitecturalOrnaments";
import { IconArrowRight } from "./Icons";

interface HeroProps {
  onOpenConsultation: () => void;
  imageSrc?: string;
}

export function Hero({
  onOpenConsultation,
  imageSrc = "/images/qarat-hero-luxury-ceiling.jpg",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[580px] xs:min-h-[620px] sm:min-h-[660px] lg:min-h-[680px] xl:min-h-[720px] bg-[#160a17] overflow-hidden flex flex-col justify-between lg:flex-row lg:items-stretch"
      aria-label="QARAT False Ceilings & Architectural Interiors Hero"
    >
      {/* Refined SVG Clip Path: Proportional organic arc that hugs the content harmoniously */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="heroCurvedPanelClip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 0.90 0 C 0.98 0.16, 1.0 0.38, 1.0 0.50 C 1.0 0.68, 0.96 0.86, 0.86 1.0 L 0 1.0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Full-Bleed Background Architectural Photo Highlighting the False Ceiling */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Breathtaking luxury multi-tiered gypsum false ceiling with warm 3000K LED cove lighting and black architectural magnetic tracks by QARAT"
          fill
          priority
          className="object-cover object-[center_12%] sm:object-[center_20%] transition-transform duration-1000 ease-out"
          sizes="100vw"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== "/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp") {
              target.src = "/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp";
            }
          }}
        />

        {/* Soft atmospheric vignette for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 lg:bg-gradient-to-r lg:from-black/20 lg:via-transparent lg:to-black/35 pointer-events-none" />
      </div>

      {/* 2. Desktop: Beautifully Balanced Curved Content Panel */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[50%] xl:w-[45%] 2xl:w-[42%] max-w-[680px] z-20 pointer-events-none [filter:drop-shadow(20px_0_35px_rgba(0,0,0,0.18))]">
        <div className="w-full h-full bg-white/98 backdrop-blur-xs pointer-events-auto relative flex flex-col justify-center px-10 sm:px-12 xl:px-16 pt-24 pb-14 [clip-path:url(#heroCurvedPanelClip)]">
          
          <div className="max-w-[490px] xl:max-w-[530px]">
            {/* Eyebrow Script */}
            <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
              <p className="font-serif italic text-lg xl:text-xl text-[#8c715f] font-normal tracking-wide">
                Timeless Spaces. Thoughtfully Curated.
              </p>
            </div>

            {/* Main Headline: Editorial Serif */}
            <h1 className="font-serif text-[42px] xl:text-[52px] font-normal leading-[1.06] tracking-tight uppercase text-[#281326] mb-3.5 text-balance">
              Elevate Your
              <br />
              Everyday
            </h1>

            {/* Description: Generous width and relaxed leading */}
            <p className="font-sans text-[13.5px] xl:text-[14.5px] leading-relaxed text-[#55473d] mb-5">
              We design and execute luxury false ceilings, stepped LED coves, and curated architectural interiors that feel like you—beautiful, serene, and timeless.
            </p>

            {/* Technical Specification Badges: Fills space with substance */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f2ec] border border-[#e8dfd5] text-[#55473d] text-[11px] xl:text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
                Stepped LED Coves
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f2ec] border border-[#e8dfd5] text-[#55473d] text-[11px] xl:text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
                Heavy-Gauge GI Framing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f2ec] border border-[#e8dfd5] text-[#55473d] text-[11px] xl:text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
                Saint-Gobain Gyproc
              </span>
            </div>

            {/* Action Buttons */}
            <div className="relative z-30 flex items-center gap-3.5 mb-6">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-7 xl:px-8 py-3.5 rounded-full bg-[#baa867] hover:bg-[#a59354] text-white text-xs xl:text-[13px] font-sans font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:translate-y-px"
              >
                Explore Our Work
              </button>
              <a
                href="#gallery"
                className="inline-flex items-center gap-1 px-4 py-3 text-xs xl:text-[13px] font-sans font-semibold tracking-wider uppercase text-[#281326] hover:text-[#baa867] transition-colors"
              >
                <span>View Projects</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Stats Bar: Anchors the bottom of the card with authentic credibility */}
            <div className="pt-5 border-t border-[#ede7df] flex items-center gap-5 xl:gap-7">
              <div>
                <p className="font-serif text-lg xl:text-xl font-bold text-[#281326] leading-none">12+ Years</p>
                <p className="text-[10px] xl:text-[11px] font-sans text-[#7a6b60] uppercase tracking-wider mt-0.5">Lucknow Craft</p>
              </div>
              <div className="w-px h-7 bg-[#e8dfd5]" />
              <div>
                <p className="font-serif text-lg xl:text-xl font-bold text-[#281326] leading-none">500+</p>
                <p className="text-[10px] xl:text-[11px] font-sans text-[#7a6b60] uppercase tracking-wider mt-0.5">Ceilings Done</p>
              </div>
              <div className="w-px h-7 bg-[#e8dfd5]" />
              <div>
                <p className="font-serif text-lg xl:text-xl font-bold text-[#281326] leading-none">10-Year</p>
                <p className="text-[10px] xl:text-[11px] font-sans text-[#7a6b60] uppercase tracking-wider mt-0.5">GI Warranty</p>
              </div>
            </div>
          </div>

          {/* Botanical Line Art in Bottom-Left Corner (Subtle Accent) */}
          <div className="absolute bottom-4 left-4 pointer-events-none opacity-30">
            <BotanicalLineArt className="w-18 h-18 xl:w-22 xl:h-22 text-[#c5a767]" />
          </div>
        </div>
      </div>

      {/* 3. Mobile / Tablet View: Visible Ceiling Backdrop + Architectural Bottom-Anchored Card */}
      {/* Top Floating Badge identifying False Ceiling Craftsmanship directly over the illuminated ceiling */}
      <div className="lg:hidden relative z-20 pt-20 sm:pt-24 px-4 flex justify-center pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#baa867]/40 text-[#f5ebd7] text-[10px] sm:text-xs font-medium tracking-wider uppercase shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#baa867] animate-pulse" />
          <span>Lucknow False Ceiling Specialists</span>
        </div>
      </div>

      {/* Mobile Card: Elegantly anchored at the bottom to showcase the glowing ceiling above */}
      <div className="lg:hidden relative z-20 w-full mt-auto px-3.5 sm:px-6 pb-4 sm:pb-8">
        <div className="relative w-full max-w-lg mx-auto bg-white/96 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.35)] border border-[#baa867]/35 sm:border-white/60 overflow-hidden">
          {/* Ambient warm gold corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#baa867]/15 to-transparent blur-2xl pointer-events-none" />

          {/* Eyebrow Script */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
            <p className="font-serif italic text-sm sm:text-base text-[#8c715f] font-normal tracking-wide">
              Timeless Spaces. Thoughtfully Curated.
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-[27px] xs:text-[32px] sm:text-4xl font-normal leading-[1.08] tracking-tight uppercase text-[#281326] mb-2 sm:mb-2.5">
            Elevate Your
            <br />
            Everyday
          </h1>

          {/* Description */}
          <p className="font-sans text-xs sm:text-[13.5px] leading-relaxed text-[#55473d] mb-3.5 sm:mb-4">
            We design and execute luxury false ceilings, stepped LED coves, and curated architectural interiors across Lucknow that feel like you—serene and timeless.
          </p>

          {/* Technical Specification Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f6f2ec] border border-[#e8dfd5] text-[#55473d] text-[10px] sm:text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
              Stepped LED Coves
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f6f2ec] border border-[#e8dfd5] text-[#55473d] text-[10px] sm:text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
              Saint-Gobain Gyproc
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f6f2ec] border border-[#e8dfd5] text-[#55473d] text-[10px] sm:text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#baa867]" />
              Heavy GI Framing
            </span>
          </div>

          {/* Action Buttons: Full width / touch friendly */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#baa867] hover:bg-[#a59354] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md active:scale-98"
            >
              Explore Our Work
            </button>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-[#baa867]/35 xs:border-transparent text-xs font-sans font-semibold tracking-wider uppercase text-[#281326] hover:text-[#baa867] transition-colors"
            >
              <span>View Projects</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Trust Counter in a Clean 3-Column Grid */}
          <div className="pt-3.5 border-t border-[#ede7df] grid grid-cols-3 divide-x divide-[#ede7df] text-center">
            <div className="pr-1">
              <p className="font-serif text-base sm:text-lg font-bold text-[#281326] leading-none">12+ Yrs</p>
              <p className="text-[9px] sm:text-[10px] font-sans text-[#7a6b60] uppercase tracking-wider mt-1">Lucknow Craft</p>
            </div>
            <div className="px-1">
              <p className="font-serif text-base sm:text-lg font-bold text-[#281326] leading-none">500+</p>
              <p className="text-[9px] sm:text-[10px] font-sans text-[#7a6b60] uppercase tracking-wider mt-1">Ceilings Done</p>
            </div>
            <div className="pl-1">
              <p className="font-serif text-base sm:text-lg font-bold text-[#281326] leading-none">10-Year</p>
              <p className="text-[9px] sm:text-[10px] font-sans text-[#7a6b60] uppercase tracking-wider mt-1">GI Warranty</p>
            </div>
          </div>

          {/* Corner Botanical Line Art Accent */}
          <div className="absolute bottom-2 right-2 pointer-events-none opacity-15">
            <BotanicalLineArt className="w-14 h-14 text-[#c5a767]" />
          </div>
        </div>
      </div>
    </section>
  );
}
