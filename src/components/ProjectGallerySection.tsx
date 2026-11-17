"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { IconClose, IconWhatsApp } from "./Icons";
import { getWhatsAppUrl } from "@/config/siteConfig";

export interface GallerySlide {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  description: string;
  src: string;
  alt: string;
  tag: string;
}

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  onOpenConsultation?: (serviceTitle?: string) => void;
}

// Curated false ceiling projects strictly from Qarat Interior Decorator repository
const DEFAULT_SLIDES: GallerySlide[] = [
  {
    id: "gypsum-cove-06",
    title: "Grand Multi-Tier Stepped Cove False Ceiling",
    category: "Gypsum False Ceiling",
    categoryLabel: "Stepped Cove Ceiling",
    location: "Gomti Nagar Extension, Lucknow",
    description:
      "Multi-tiered stepped gypsum ceiling profile with concealed 3000K warm LED trough lighting, perimeter profile lights, and seamless Saint-Gobain Gyproc jointing.",
    src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-06.webp",
    alt: "Grand multi-tier stepped cove false ceiling with warm ambient LED troughs",
    tag: "Stepped Cove Ceiling",
  },
  {
    id: "gypsum-tray-05",
    title: "Luxury Designer Tray False Ceiling with Chandelier",
    category: "False Ceilings",
    categoryLabel: "Designer Tray Ceiling",
    location: "Hazratganj, Lucknow",
    description:
      "Deep recessed architectural tray ceiling with central chandelier reinforcement, perimeter cove indirect illumination, and flawless acoustic level finish.",
    src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-05.webp",
    alt: "Luxury designer tray false ceiling with center chandelier illumination",
    tag: "Luxury Tray Ceiling",
  },
  {
    id: "gypsum-hall-07",
    title: "Grand Architectural False Ceiling in Drawing Hall",
    category: "Living Ceilings",
    categoryLabel: "Drawing Hall False Ceiling",
    location: "Vibhuti Khand, Lucknow",
    description:
      "Expansive drawing hall ceiling execution featuring floating island geometry, magnetic track lights, recessed spotlighting, and laser-straight alignment.",
    src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-07.webp",
    alt: "Grand architectural false ceiling with magnetic track lighting in luxury drawing hall",
    tag: "Drawing Hall Ceiling",
  },
  {
    id: "gypsum-perimeter-02",
    title: "Modern Living Room Cove Perimeter False Ceiling",
    category: "Living Ceilings",
    categoryLabel: "Perimeter Cove Ceiling",
    location: "Aliganj, Lucknow",
    description:
      "Clean perimeter floating drop with concealed curtain pelmet groove, indirect warm light washing, and zero-sag heavy galvanized GI channel framing.",
    src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp",
    alt: "Modern living room cove perimeter false ceiling with indirect warm light washing",
    tag: "Perimeter Cove",
  },
  {
    id: "pop-murga-jali-01",
    title: "POP Murga Jali Handcrafted Ornamental Ceiling",
    category: "POP Ceilings",
    categoryLabel: "POP Murga Jali Ceiling",
    location: "Indira Nagar, Lucknow",
    description:
      "Heavy-duty wire mesh (Murga Jali) framework plastered with pure Plaster of Paris, sculpted decorative cornices, and lifelong crack-free durability.",
    src: "/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp",
    alt: "POP Murga Jali handcrafted ornamental false ceiling with floral cornice detail",
    tag: "POP Murga Jali",
  },
  {
    id: "gypsum-recessed-01",
    title: "Minimalist Recessed Architectural Cove Ceiling",
    category: "False Ceilings",
    categoryLabel: "Recessed Cove Ceiling",
    location: "Sushant Golf City, Lucknow",
    description:
      "Minimalist shadow-line perimeter groove with flush downlights, anti-glare COB spotlights, and ultra-smooth skim coat finishing.",
    src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-01.webp",
    alt: "Minimalist recessed architectural cove false ceiling with flush spotlights",
    tag: "Minimalist Cove",
  },
  {
    id: "grid-ceiling-02",
    title: "Corporate 2x2 Modular Acoustic Grid Ceiling",
    category: "Commercial Ceilings",
    categoryLabel: "2x2 Modular Grid Ceiling",
    location: "Mahanagar, Lucknow",
    description:
      "Heavy-gauge galvanized T-bar suspension grid with washable acoustic mineral fiber tiles and integrated ultra-slim 2x2 LED light troffers.",
    src: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-02.webp",
    alt: "Corporate 2x2 modular drop grid acoustic ceiling with integrated LED panel lights",
    tag: "2x2 Commercial Grid",
  },
  {
    id: "pvc-ceiling-01",
    title: "Waterproof Designer PVC Tongue & Groove Ceiling",
    category: "PVC Ceilings",
    categoryLabel: "PVC Panel Ceiling",
    location: "Amar Shaheed Path, Lucknow",
    description:
      "100% moisture-proof, termite-proof interlocking PVC ceiling panels with luxury woodgrain texture, ideal for humid zones, balconies, and kitchens.",
    src: "/images/qarat/ceiling/qarat-pvc-panel-ceiling-01.webp",
    alt: "Waterproof designer PVC tongue and groove false ceiling with wood texture",
    tag: "Waterproof PVC",
  },
  {
    id: "gypsum-cove-04",
    title: "Stepped Square Cove LED Gypsum False Ceiling",
    category: "Gypsum False Ceiling",
    categoryLabel: "Stepped Square Cove",
    location: "Jankipuram, Lucknow",
    description:
      "Stepped square profile false ceiling with concealed warm white LED strips, high-output spotlight cutouts, and Saint-Gobain Gyproc board finishing.",
    src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp",
    alt: "Stepped square cove LED gypsum false ceiling detail",
    tag: "Stepped Cove LED",
  },
  {
    id: "gypsum-grid-01",
    title: "Commercial Office T-Grid Acoustic Drop Ceiling",
    category: "Commercial Ceilings",
    categoryLabel: "T-Grid Acoustic Drop Ceiling",
    location: "Vikas Nagar, Lucknow",
    description:
      "Modular T-grid drop ceiling system with PVC-laminated washable acoustic tiles, providing clean lines and rapid plenum access for electricals.",
    src: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-01.webp",
    alt: "Commercial office T-Grid acoustic drop ceiling",
    tag: "Acoustic Drop Ceiling",
  },
];

export function ProjectGallerySection({
  title = "False Ceiling Project Gallery",
  subtitle = "Precision craftsmanship, stepped LED coves, and architectural ceiling solutions across Lucknow.",
  onOpenConsultation,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<GallerySlide | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = DEFAULT_SLIDES.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  // Subtle auto-advance when not hovered or interacting
  useEffect(() => {
    if (isPaused || activeModalProject) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, activeModalProject, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalProject) return;
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalProject, handlePrev, handleNext]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 lg:py-24 bg-[#d9d1c6] text-[#1e140a] border-b border-[#cfc6ba] scroll-mt-20 relative overflow-hidden select-none"
      aria-label="Homes & Interior Portfolio Showcase"
    >
      <div id="our-work" className="sr-only" />

      {/* Main Centered Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Section Header: Exactly matching the reference image */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-[#1e140a] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#2c221a] font-normal tracking-wide">
            {subtitle}
          </p>
        </div>

        {/* 3D Coverflow Carousel Stage */}
        <div
          className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[300px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={
            {
              "--slide-offset-left": "calc(-50% - 28%)",
              "--slide-offset-right": "calc(-50% + 28%)",
            } as React.CSSProperties
          }
        >
          {/* Slides Track */}
          <div className="relative w-full h-[280px] sm:h-[390px] md:h-[450px] lg:h-[490px] flex items-center justify-center">
            {DEFAULT_SLIDES.map((slide, index) => {
              // Calculate circular offset relative to currentIndex
              let diff = (index - currentIndex) % totalSlides;
              if (diff > totalSlides / 2) diff -= totalSlides;
              if (diff < -totalSlides / 2) diff += totalSlides;

              const isActive = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;
              const isVisible = isActive || isLeft || isRight;

              // Compute inline styles for seamless 3D coverflow transition
              let transform = "translate(-50%, -50%) scale(0.7)";
              let zIndex = 0;
              let opacity = 0;
              let pointerEvents: "auto" | "none" = "none";

              if (isActive) {
                transform = "translate(-50%, -50%) scale(1)";
                zIndex = 20;
                opacity = 1;
                pointerEvents = "auto";
              } else if (isLeft) {
                transform = "translate(var(--slide-offset-left), -50%) scale(0.86)";
                zIndex = 10;
                opacity = 0.72;
                pointerEvents = "auto";
              } else if (isRight) {
                transform = "translate(var(--slide-offset-right), -50%) scale(0.86)";
                zIndex = 10;
                opacity = 0.72;
                pointerEvents = "auto";
              } else if (diff < -1) {
                transform = "translate(-130%, -50%) scale(0.7)";
              } else if (diff > 1) {
                transform = "translate(30%, -50%) scale(0.7)";
              }

              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    else if (isRight) handleNext();
                    else if (isActive) setActiveModalProject(slide);
                  }}
                  className={`absolute left-1/2 top-1/2 w-[86vw] max-w-[340px] sm:max-w-[540px] md:max-w-[660px] lg:max-w-[760px] xl:max-w-[800px] aspect-[16/10] sm:aspect-[16/10.2] rounded-[20px] sm:rounded-[28px] md:rounded-[34px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.9,0.3,1)] ${isActive
                      ? "border-[1.5px] sm:border-2 border-[#bfa780] shadow-[0_20px_50px_rgba(30,20,10,0.18)] cursor-pointer"
                      : "border border-black/5 shadow-md hover:opacity-90 cursor-pointer"
                    } ${!isVisible ? "pointer-events-none" : ""}`}
                  style={{
                    transform,
                    zIndex,
                    opacity,
                    pointerEvents,
                  }}
                  aria-hidden={!isActive}
                >
                  {/* Slide Image */}
                  <div className="relative w-full h-full bg-[#c9c1b5]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index < 3}
                      quality={95}
                      className="object-cover object-center transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 700px, 800px"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow Button: Floating circular button with chevron */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full bg-[#ede5dc]/95 hover:bg-white text-[#785e43] shadow-[0_4px_14px_rgba(40,30,20,0.08)] hover:shadow-[0_6px_20px_rgba(40,30,20,0.14)] border border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button: Floating circular button with chevron */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full bg-[#ede5dc]/95 hover:bg-white text-[#785e43] shadow-[0_4px_14px_rgba(40,30,20,0.08)] hover:shadow-[0_6px_20px_rgba(40,30,20,0.14)] border border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer"
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators: Essential for mobile visual progression */}
        <div className="flex items-center justify-center gap-1.5 mt-4 sm:mt-6">
          {DEFAULT_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? "w-6 bg-[#bfa780]"
                  : "w-1.5 bg-[#bfa780]/35 hover:bg-[#bfa780]/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal for High-Resolution View */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.alt}
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer border border-white/20 shadow-lg"
              aria-label="Close modal"
            >
              <IconClose className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Modal Image Frame with bottom WhatsApp inquiry overlay */}
            <div className="relative w-full h-[62vh] xs:h-[68vh] sm:h-auto sm:aspect-[16/10] max-h-[85vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black flex flex-col justify-end">
              <Image
                src={activeModalProject.src}
                alt={activeModalProject.alt}
                fill
                quality={100}
                className="object-contain sm:object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />

              {/* Bottom project bar with WhatsApp CTA */}
              <div className="relative z-10 p-3.5 sm:p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-white">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#baa867] block">
                    {activeModalProject.categoryLabel} • {activeModalProject.location}
                  </span>
                  <h4 className="text-sm sm:text-base font-serif font-medium line-clamp-1 text-white">
                    {activeModalProject.title}
                  </h4>
                </div>

                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <a
                    href={getWhatsAppUrl(
                      `Hello QARAT, I am interested in this design from your gallery: "${activeModalProject.title}" (${activeModalProject.categoryLabel}, ${activeModalProject.location}). Can you provide a quotation for my project?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold transition-transform hover:scale-105 active:scale-95 shadow-md"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  {onOpenConsultation && (
                    <button
                      type="button"
                      onClick={() => {
                        const title = activeModalProject.title;
                        setActiveModalProject(null);
                        onOpenConsultation(title);
                      }}
                      className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs sm:text-sm font-medium backdrop-blur-xs transition-colors cursor-pointer"
                    >
                      <span>Book Inspection</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
