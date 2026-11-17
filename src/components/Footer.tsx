import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";
import { IconWhatsApp, IconPhone, IconMail } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Gypsum False Ceiling", href: "/#what-we-offer" },
    { label: "POP Murga Jali False Ceiling", href: "/#what-we-offer" },
    { label: "Gypsum 2x2 Grid Ceiling", href: "/#what-we-offer" },
    { label: "PVC Ceiling Panels", href: "/#what-we-offer" },
    { label: "Drywall & Space Partitions", href: "/#what-we-offer" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/#what-we-offer" },
    { label: "Who We Are", href: "/#who-we-are" },
    { label: "Project Gallery", href: "/#gallery" },
    { label: "Customer Reviews", href: "/#reviews" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#f4efe6] pt-14 pb-8 border-t border-[var(--color-rule)] text-[var(--color-ink)]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[var(--color-rule)]">
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div>
              <span className="text-2xl font-serif text-[var(--color-ink)] font-normal tracking-tight block">
                {siteConfig.company.name}
              </span>
              <span className="text-[11px] text-[var(--color-accent)] font-semibold uppercase tracking-widest block mt-1">
                Ceiling &amp; Partition Specialists
              </span>
            </div>

            <p className="text-xs text-[var(--color-muted)] leading-relaxed max-w-sm">
              Specialized contractor delivering turnkey false ceilings and drywall partitions across Lucknow. Precision craftsmanship in designer gypsum coves, heavy-duty POP murga jali, and modular grid systems.
            </p>

            <div className="text-[11px] text-[var(--color-muted)] pt-1">
              <span>{siteConfig.company.legalName}</span>
            </div>
          </div>

          {/* Column 2: Ceiling Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-[var(--color-ink)] block uppercase tracking-wider">
              Ceiling Services
            </span>
            <ul className="space-y-2 text-xs text-[var(--color-muted)]">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[var(--color-ink)] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold text-[var(--color-ink)] block uppercase tracking-wider">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[var(--color-muted)]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--color-ink)] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-[var(--color-ink)] block uppercase tracking-wider">
              Get In Touch
            </span>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Planning ceiling or partition work in Lucknow? Connect directly with our team:
            </p>

            <div className="space-y-2.5 text-xs pt-1">
              <a
                href={`tel:${siteConfig.contact.phoneNumber.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2.5 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <IconPhone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-[var(--color-ink)]">{siteConfig.contact.phoneNumber}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[var(--color-muted)] hover:text-emerald-700 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <IconWhatsApp className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-[var(--color-ink)] group-hover:text-emerald-700">WhatsApp Chat</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors group truncate"
              >
                <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <IconMail className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-[var(--color-ink)] truncate">{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Designer Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-muted)] text-center sm:text-left">
          <p>
            © {currentYear} {siteConfig.company.legalName}. All rights reserved.
          </p>

          <p>
            Website designed by{" "}
            <a
              href="https://www.edonesolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-accent)] transition-colors"
            >
              Edone Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
