"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { IconCheck, IconClock, IconArrowUpRight } from "./Icons";

interface HowItWorksProps {
  onOpenConsultation?: () => void;
}

export function HowItWorksSection({ onOpenConsultation }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 lg:py-28 bg-[var(--color-paper-2)] text-[var(--color-ink)] border-b border-[var(--color-rule)] scroll-mt-20 relative"
    >
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-accent)] block mb-2.5">
            Structured Execution Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-[var(--color-ink)] font-normal leading-[1.15]">
            How We Execute Your Space
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
            From preliminary laser measurements to final joint inspection, our four-step execution protocol
            guarantees timeline predictability, direct substrate transparency, and crack-free longevity.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative">
          {siteConfig.process.map((step, idx) => (
            <div
              key={step.number}
              className="card-plate p-6 flex flex-col justify-between bg-[var(--color-plate)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] transition-all duration-300 rounded-sm shadow-xs relative group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--color-rule)] mb-4">
                  <span className="font-mono text-2xl font-normal text-[var(--color-accent)]">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-muted)] bg-[var(--color-paper-2)] px-2.5 py-0.5 rounded-full border border-[var(--color-rule)]">
                    <IconClock className="w-3 h-3 text-[var(--color-accent)]" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-serif text-[var(--color-ink)] font-normal leading-snug group-hover:text-[var(--color-accent)] transition-colors mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Checkpoints */}
                <div className="space-y-2 pt-3 border-t border-[var(--color-rule)]/60">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-ink-2)] block">
                    Execution Checkpoints:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--color-ink-2)]">
                    {step.checkpoints.map((cp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <IconCheck className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="leading-tight">{cp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step indicator arrow */}
              <div className="mt-6 pt-3 border-t border-[var(--color-rule)] flex items-center justify-between text-xs text-[var(--color-muted)]">
                <span>Phase {idx + 1} of 4</span>
                <span className="font-mono text-[var(--color-accent)]">Step 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Banner */}
        <div className="mt-12 p-6 rounded-sm bg-[var(--color-paper)] border border-[var(--color-rule)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg font-semibold text-[var(--color-accent)] px-3 py-1 bg-[var(--color-paper-2)] rounded-xs border border-[var(--color-rule)]">
              BOQ
            </span>
            <div>
              <h4 className="text-sm font-semibold text-[var(--color-ink)]">
                Zero Cost Escalation Guarantee
              </h4>
              <p className="text-xs text-[var(--color-muted)]">
                Once spatial dimensions and substrate specs are finalized, your itemized estimate remains fixed.
              </p>
            </div>
          </div>

          {onOpenConsultation ? (
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn-primary text-xs py-2 px-5 shrink-0"
            >
              <span>Schedule Step 01 Site Audit</span>
              <IconArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" />
            </button>
          ) : (
            <a href="#quote" className="btn-primary text-xs py-2 px-5 shrink-0">
              <span>Book Site Measurement</span>
              <IconArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
