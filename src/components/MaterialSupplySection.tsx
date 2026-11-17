"use client";

import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";
import { IconCheck, IconPackage, IconArrowUpRight, IconWhatsApp } from "./Icons";

interface MaterialSupplyProps {
  onOpenConsultation?: (serviceTitle?: string) => void;
}

export function MaterialSupplySection({ onOpenConsultation }: MaterialSupplyProps) {
  const hasWhatsApp = Boolean(siteConfig.contact.whatsappNumber);

  return (
    <section
      id="materials"
      className="py-16 sm:py-20 lg:py-28 bg-[var(--color-paper-2)] text-[var(--color-ink)] border-b border-[var(--color-rule)] scroll-mt-20 relative"
    >
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 text-[var(--color-accent-ink)] text-xs font-semibold uppercase tracking-wider mb-3">
            <IconPackage className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Material Supply Division</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-[var(--color-ink)] font-normal leading-[1.15]">
            Industrial Substrates & Interior Material Supply
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
            In addition to turnkey interior contracting, QARAT operates a verified wholesale and retail
            material distribution network in Lucknow. We supply certified gypsum boards, heavy-gauge GI channels,
            waterproof PVC & WPC louvers, and luxury UV marble sheets directly to architects, contractors, and project owners.
          </p>
        </div>

        {/* 4 Material Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {siteConfig.materials.map((mat) => (
            <div
              key={mat.id}
              className="card-plate p-6 flex flex-col justify-between bg-[var(--color-plate)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] transition-all duration-300 rounded-sm shadow-xs hover:shadow-md"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--color-rule)] mb-4">
                  <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                    {mat.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[var(--color-paper-2)] text-[var(--color-ink)] border border-[var(--color-rule)]">
                    {mat.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-[var(--color-ink)] font-normal leading-snug">
                  {mat.title}
                </h3>
                <span className="text-xs font-medium text-[var(--color-accent)] block mt-0.5 mb-3">
                  {mat.subtitle}
                </span>

                <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-4">
                  {mat.description}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2 mb-4 pt-3 border-t border-[var(--color-rule)]/60">
                  <span className="text-[11px] font-semibold text-[var(--color-ink-2)] block uppercase tracking-wider">
                    Key Specifications:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--color-ink-2)]">
                    {mat.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <IconCheck className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="leading-tight">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brands & Grades */}
                <div className="pt-3 border-t border-[var(--color-rule)]/60">
                  <span className="text-[11px] font-semibold text-[var(--color-ink-2)] block uppercase tracking-wider mb-1.5">
                    Brands & Standard:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {mat.brandsAndGrades.map((bg, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 bg-[var(--color-paper-2)] text-[var(--color-muted)] rounded-xs"
                      >
                        {bg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[var(--color-rule)]">
                {onOpenConsultation ? (
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Material Supply: ${mat.title}`)}
                    className="w-full text-center py-2 px-3 text-xs font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] rounded-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Material Pricing</span>
                    <IconArrowUpRight className="w-3 h-3 text-[var(--color-accent)]" />
                  </button>
                ) : (
                  <a
                    href="#quote"
                    className="w-full text-center py-2 px-3 text-xs font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] rounded-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Inquire Rates</span>
                    <IconArrowUpRight className="w-3 h-3 text-[var(--color-accent)]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contractor & Wholesale Supply Callout */}
        <div className="mt-12 p-6 sm:p-8 card-plate bg-[var(--color-band)] text-[var(--color-band-ink)] border border-[var(--color-band-rule)] rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-serif text-[var(--color-band-ink)] font-normal">
              Bulk Contractor & Builder Supply Across Lucknow
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-band-muted)] leading-relaxed">
              Are you an architect, interior designer, or civil contractor seeking direct dispatch of Saint-Gobain Gyproc boards, heavy-gauge GI channels, or UV sheets with on-site delivery?
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {hasWhatsApp && (
              <a
                href={getWhatsAppUrl("Hello QARAT, I am looking for wholesale / contractor interior material supply in Lucknow.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[var(--color-whatsapp)] border-[var(--color-whatsapp)]/50 hover:bg-[var(--color-whatsapp)]/10 text-xs py-2.5 px-4"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Supply Desk</span>
              </a>
            )}

            {onOpenConsultation && (
              <button
                type="button"
                onClick={() => onOpenConsultation("Bulk Material Supply")}
                className="btn-primary text-xs py-2.5 px-5"
              >
                <span>Request Wholesale Catalog</span>
                <IconArrowUpRight className="w-4 h-4 text-[var(--color-accent-ink)]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
