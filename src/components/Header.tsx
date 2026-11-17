"use client";

import React, { useState, useEffect } from "react";
import { IconMenu, IconClose, IconArrowUpRight, IconWhatsApp } from "./Icons";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";

interface HeaderProps {
  onOpenConsultation: (service?: string) => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Services", href: "/#what-we-offer" },
    { label: "Who We Are", href: "/#who-we-are" },
    { label: "Project Gallery", href: "/#gallery" },
    { label: "Reviews", href: "/#reviews" },
    { label: "FAQs", href: "/#faqs" },
  ];

  const hasWhatsApp = Boolean(siteConfig.contact.whatsappNumber);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#281326]/95 backdrop-blur-md border-b border-[#3e1d3a] ${
        scrolled ? "py-2.5 shadow-md" : "py-3.5"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Brand Identity Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 focus-visible:outline-2 focus-visible:outline-[#baa867] group"
            aria-label="QARAT Interior Decorator - Return to top"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif tracking-tight text-white font-semibold leading-none group-hover:text-[#baa867] transition-colors">
                QARAT
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs text-[#baa867] mt-0.5 sm:mt-1 font-sans tracking-wider uppercase font-semibold whitespace-nowrap">
                Ceiling &amp; Partition Specialists
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm text-white/80 hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#baa867] font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            {hasWhatsApp && (
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 rounded-full transition-colors"
                title="Chat with QARAT on WhatsApp"
              >
                <IconWhatsApp className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-[#baa867] hover:bg-[#a79654] text-white text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Get a Quote</span>
              <IconArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#baa867] hover:bg-[#a79654] text-white text-xs font-semibold tracking-wide shrink-0 transition-all shadow-sm"
            >
              Quote
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#baa867] focus-visible:outline-2 focus-visible:outline-[#baa867] rounded-sm shrink-0 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <IconClose className="w-6 h-6" />
              ) : (
                <IconMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-xs z-30 xl:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="relative z-40 xl:hidden bg-[#281326] border-b border-[#3e1d3a] px-5 sm:px-6 py-6 shadow-2xl max-h-[calc(100vh-62px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/90 hover:text-[#baa867] py-2.5 border-b border-[#3e1d3a] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-full bg-[#baa867] hover:bg-[#a79654] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Get a Quote</span>
                <IconArrowUpRight className="w-4 h-4 text-white" />
              </button>

              {hasWhatsApp && (
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-semibold flex items-center justify-center gap-2 hover:bg-emerald-500/10 transition-colors"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
