"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { IconStar, IconChevronLeft, IconChevronRight } from "./Icons";

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = siteConfig.testimonials;

  // Track scroll position for arrow buttons & active dot
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstCard = el.querySelector<HTMLElement>("[data-review-card]");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), testimonials.length - 1));
    }
  }, [testimonials.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Scroll one card left or right
  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 360;

    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 360;

    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="reviews"
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24 text-white scroll-mt-20 border-b border-[#baa867]/20 bg-[#160f18]"
    >
      <div id="testimonials" className="sr-only" />

      {/* Background Image with Clean Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/qarat/ceiling/qarat-false-ceiling-hero.webp"
          alt="QARAT architectural false ceiling installation ambiance"
          fill
          quality={95}
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.22] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140b17]/95 via-[#1a111e]/90 to-[#120814]/95" />
      </div>

      <div className="container relative z-10">
        {/* Header: Title on Left, Simple Arrows on Right */}
        <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#baa867] block mb-2">
              Client Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-normal leading-tight">
              Customer Reviews
            </h2>
          </div>

          {/* Simple Left / Right Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous review"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${!canScrollLeft
                ? "border-white/10 text-white/20 cursor-not-allowed bg-black/20"
                : "border-white/20 text-[#baa867] hover:bg-[#baa867] hover:text-[#160f18] hover:border-[#baa867] bg-white/5 cursor-pointer active:scale-95"
                }`}
            >
              <IconChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next review"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${!canScrollRight
                ? "border-white/10 text-white/20 cursor-not-allowed bg-black/20"
                : "border-white/20 text-[#baa867] hover:bg-[#baa867] hover:text-[#160f18] hover:border-[#baa867] bg-white/5 cursor-pointer active:scale-95"
                }`}
            >
              <IconChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reviews in ONE SINGLE ROW */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-1 pb-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((test) => (
            <div
              key={test.id}
              data-review-card
              className="w-[85vw] max-w-[340px] sm:max-w-none sm:w-[350px] lg:w-[370px] shrink-0 snap-start flex flex-col justify-between bg-white/[0.06] hover:bg-white/[0.09] backdrop-blur-md border border-white/10 hover:border-[#baa867]/40 rounded-xl p-5 sm:p-6 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#baa867] mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <IconStar
                      key={i}
                      className="w-3.5 h-3.5 fill-[#baa867] text-[#baa867]"
                    />
                  ))}
                </div>

                {/* Clean Quote */}
                <p className="text-sm text-white/90 leading-relaxed font-light italic mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Client Name */}
              <div className="pt-3 border-t border-white/10">
                <h4 className="text-sm font-medium text-white">
                  {test.clientName}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${activeIndex === idx
                ? "w-6 h-1.5 bg-[#baa867]"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
