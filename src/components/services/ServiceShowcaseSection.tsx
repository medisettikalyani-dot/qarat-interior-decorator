"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconArrowUpRight } from "../Icons";

export interface ServicePhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface ServiceShowcaseProps {
  id: string;
  disciplineNumber: string; // e.g. "01"
  label: string; // e.g. "Ceiling & Structural Partitioning"
  heading: string; // e.g. "Ceilings That Define the Space"
  description: string; // 2-3 lines max
  offerings: string[]; // 3-4 clean list items
  ctaLabel: string; // e.g. "Consult on Ceilings"
  consultationTitle: string;
  photos: ServicePhoto[];
  theme?: "light" | "plum"; // light = warm beige/ivory, plum = deep plum
  imagePosition?: "left" | "right"; // desktop orientation
  onOpenConsultation: (serviceTitle: string) => void;
}

export function ServiceShowcaseSection({
  id,
  disciplineNumber,
  label,
  heading,
  description,
  offerings,
  ctaLabel,
  consultationTitle,
  photos,
  theme = "light",
  imagePosition = "left",
  onOpenConsultation,
}: ServiceShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevImage();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextImage();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextImage();
      else prevImage();
    }
    touchStartX.current = null;
  };

  const isPlum = theme === "plum";

  // Section theme classes
  const sectionClass = isPlum
    ? "band-plum py-20 sm:py-24 lg:py-28 scroll-mt-20 border-b border-[var(--color-band-rule)]"
    : "bg-[var(--color-paper-2)] text-[var(--color-ink)] py-20 sm:py-24 lg:py-28 scroll-mt-20 border-b border-[var(--color-rule)]";

  const mutedTextClass = isPlum
    ? "text-[var(--color-band-muted)]"
    : "text-[var(--color-ink-2)]/85";

  const subheadClass = isPlum
    ? "text-[var(--color-band-ink)]/75"
    : "text-[var(--color-ink)]/70";

  const counterBg = "bg-black/60 text-white backdrop-blur-md border border-white/20";

  const totalStr = photos.length < 10 ? `0${photos.length}` : `${photos.length}`;
  const currentStr = currentIndex + 1 < 10 ? `0${currentIndex + 1}` : `${currentIndex + 1}`;

  return (
    <section id={id} className={`relative ${sectionClass} overflow-hidden`}>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* IMAGE CAROUSEL: Always first on mobile; Alternates on desktop */}
          <div
            className={`w-full ${
              imagePosition === "left"
                ? "lg:col-span-6 xl:col-span-6 order-1 lg:order-1"
                : "lg:col-span-6 xl:col-span-6 order-1 lg:order-2"
            }`}
          >
            <div className="relative max-w-[540px] mx-auto w-full">
              {/* Subtle Architectural Backing Accent Frame */}
              <div
                className={`absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-[4px] border ${
                  isPlum
                    ? "border-[var(--color-accent)]/25"
                    : "border-[var(--color-accent)]/35"
                } pointer-events-none -z-10`}
                aria-hidden="true"
              />

              {/* Main Carousel Square Frame */}
              <div
                role="region"
                aria-roledescription="carousel"
                aria-label={`${heading} Image Carousel`}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative aspect-square w-full rounded-[4px] overflow-hidden bg-black/10 border border-black/10 shadow-2xl shadow-black/15 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 select-none"
              >
                {/* Images Stack with Smooth Crossfade */}
                {photos.map((photo, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                      idx === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      priority={idx === 0}
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                    />
                    {/* Soft gradient bottom vignette for badge legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}

                {/* Left Arrow Button Directly Over Image */}
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous photograph"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-black/45 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg focus-visible:outline-2 focus-visible:outline-white"
                >
                  <IconChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Button Directly Over Image */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next photograph"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-black/45 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg focus-visible:outline-2 focus-visible:outline-white"
                >
                  <IconChevronRight className="w-5 h-5" />
                </button>

                {/* Caption Pill (Bottom-Left) */}
                {photos[currentIndex]?.caption && (
                  <div className="absolute bottom-4 left-4 z-20 max-w-[60%] sm:max-w-[65%] truncate bg-black/55 text-white backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/15 text-[11px] sm:text-xs font-medium shadow-md">
                    {photos[currentIndex].caption}
                  </div>
                )}

                {/* Elegant Image Counter (Bottom-Right) */}
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className={`absolute bottom-4 right-4 z-20 ${counterBg} px-3 py-1.5 rounded-sm text-xs font-mono tracking-widest font-medium shadow-md`}
                >
                  <span>{currentStr}</span>
                  <span className="opacity-50 mx-1">/</span>
                  <span className="opacity-80">{totalStr}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE CONTENT: Always second on mobile; Alternates on desktop */}
          <div
            className={`w-full flex flex-col justify-center ${
              imagePosition === "left"
                ? "lg:col-span-6 xl:col-span-6 order-2 lg:order-2"
                : "lg:col-span-6 xl:col-span-6 order-2 lg:order-1"
            }`}
          >
            {/* Small Discipline Number & Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-[var(--color-accent)]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.22em] font-medium text-[var(--color-accent)]">
                Discipline {disciplineNumber} &middot; {label}
              </span>
            </div>

            {/* Large Elegant Serif Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3rem] font-serif font-normal leading-[1.1] tracking-[-0.015em] mb-5">
              {heading}
            </h2>

            {/* Short Refined Description (2-3 lines max) */}
            <p className={`text-base sm:text-[17px] ${mutedTextClass} leading-[1.7] font-light mb-7 max-w-xl`}>
              {description}
            </p>

            {/* 3-4 Important Service Offerings in a Clean List */}
            <div className="mb-9 max-w-xl">
              <span className={`text-xs uppercase tracking-[0.16em] font-semibold ${subheadClass} block mb-3.5`}>
                Core Execution Capabilities
              </span>
              <ul className="space-y-3">
                {offerings.map((offering, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 text-sm sm:text-[15px] leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span className={mutedTextClass}>{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elegant Gold Consultation CTA Button */}
            <div>
              <button
                type="button"
                onClick={() => onOpenConsultation(consultationTitle)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-2)] text-[var(--color-accent-ink)] text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] cursor-pointer"
              >
                <span>{ctaLabel}</span>
                <IconArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
