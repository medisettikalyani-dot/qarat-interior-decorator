"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { IconArrowRight, IconArrowUpRight } from "./Icons";

interface ServicesIntroProps {
  onOpenConsultation?: (serviceTitle?: string) => void;
}

export function ServicesIntro({ onOpenConsultation }: ServicesIntroProps) {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-28 bg-[var(--color-paper)] text-[var(--color-ink)] border-b border-[var(--color-rule)] scroll-mt-20 relative"
    >
      {/* Anchor alias for backwards compatibility */}
      <div id="disciplines" className="sr-only" />
      <div className="container">
        {/* Section Head Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-accent)] block mb-2.5">
              Core Capabilities & Execution
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-[var(--color-ink)] font-normal leading-[1.12]">
              Our Specialized Interior Services
            </h2>
          </div>

          <div className="lg:col-span-6 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
            <p>
              QARAT concentrates craftsmanship and engineering across four foundational disciplines.
              Every contract guarantees structural flatness, industrial-grade substrates, precision laser leveling,
              and lasting finish integrity.
            </p>
          </div>
        </div>

        {/* 4 Prominent Architectural Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {siteConfig.services.map((service, idx) => (
            <article
              key={service.id}
              className="card-plate flex flex-col justify-between group overflow-hidden border border-[var(--color-rule)] hover:border-[var(--color-accent)] hover:shadow-xl transition-all duration-300 rounded-sm bg-[var(--color-plate)]"
            >
              <div>
                {/* Prominent Service Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-paper-2)] border-b border-[var(--color-rule)]">
                  <Image
                    src={service.heroImage.src}
                    alt={service.heroImage.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Service Number Tag */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xs border border-white/20 text-white font-mono text-[11px] tracking-wider font-semibold">
                    0{idx + 1}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-serif text-[var(--color-ink)] font-normal leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Feature Pills */}
                  {service.tags && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-[var(--color-paper-2)] text-[var(--color-ink-2)] border border-[var(--color-rule)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-5 sm:p-6 pt-0 mt-2">
                <div className="pt-3 border-t border-[var(--color-rule)] flex items-center justify-between gap-2">
                  <a
                    href={`#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span>Explore Service</span>
                    <IconArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] transition-transform group-hover:translate-x-1" />
                  </a>

                  {onOpenConsultation && (
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(service.title)}
                      className="text-[11px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors underline underline-offset-2"
                      title={`Get quote for ${service.title}`}
                    >
                      Get Quote
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Reassurance Banner under cards */}
        <div className="mt-12 p-5 sm:p-6 rounded-sm bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <p className="text-xs sm:text-sm text-[var(--color-ink)] font-medium">
              Looking for a combined package (False Ceilings + Modular Kitchen + TV Unit)?
            </p>
          </div>
          <div className="flex items-center gap-3">
            {onOpenConsultation ? (
              <button
                type="button"
                onClick={() => onOpenConsultation("Full Turnkey Interior")}
                className="btn-primary text-xs py-2 px-4"
              >
                <span>Request Turnkey Package Quote</span>
                <IconArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" />
              </button>
            ) : (
              <a href="#quote" className="btn-primary text-xs py-2 px-4">
                <span>Request Package Quote</span>
                <IconArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
