"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { WhatWeOfferSection } from "@/components/WhatWeOfferSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { ProjectGallerySection } from "@/components/ProjectGallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { IconArrowRight, IconAward, IconStar, IconUsers } from "@/components/Icons";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Gypsum False Ceiling");

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    } else {
      setSelectedService("Gypsum False Ceiling");
    }
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
  };

  const scrollToServices = () => {
    const el = document.getElementById("what-we-offer") || document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#ede6dc] text-[#241a15] flex flex-col selection:bg-[#baa867] selection:text-white">
      {/* 1. Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1 pt-20">
        {/* Page Hero Header with High-Clarity False Ceiling Photo */}
        <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center bg-[#180d19] text-white border-b border-[#3e1d3a] overflow-hidden isolate">
          {/* Full-Bleed Ceiling Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/qarat/ceiling/qarat-false-ceiling-hero.webp"
              alt="QARAT false ceiling design and execution in Lucknow"
              fill
              priority
              quality={95}
              className="object-cover object-center filter brightness-[0.42] contrast-[1.08]"
              sizes="100vw"
            />
            {/* Atmospheric Gradient Overlays for Readability and Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#180d19]/95 via-[#180d19]/80 to-[#180d19]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180d19] via-transparent to-[#180d19]/60" />
          </div>

          <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-[1400px] relative z-10 py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#baa867] border border-[#baa867]/35 text-xs font-semibold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#baa867] animate-pulse" />
                <span>INTERIOR WORK • LUCKNOW</span>
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight leading-[1.12] mb-4 sm:mb-5 text-white">
                False Ceiling Design &amp; Installation in Lucknow
              </h1>
              <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed max-w-2xl font-light mb-6 sm:mb-8">
                Professional turnkey false ceiling installation for homes, offices, showrooms, and commercial spaces. Expert craftsmen, genuine Gyproc materials, stepped LED cove profiles, and clean finishing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <button
                  type="button"
                  onClick={() => handleOpenConsultation("Gypsum False Ceiling")}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:py-3.5 rounded-full bg-[#baa867] hover:bg-[#a69453] text-[#1b120c] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg cursor-pointer active:scale-98"
                >
                  <span>Get Quote</span>
                  <IconArrowRight className="w-4 h-4 text-[#1b120c]" />
                </button>
                <button
                  type="button"
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/18 text-white border border-white/20 font-sans font-medium text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-200 cursor-pointer"
                >
                  <span>Our Services</span>
                </button>
              </div>

              {/* Glass Stat Counters from the Repository */}
              <div className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-nowrap items-center gap-3 sm:gap-8 p-3 sm:p-4 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-3 pr-2">
                  <div className="w-9 h-9 rounded-lg bg-[#baa867]/20 flex items-center justify-center text-[#baa867] shrink-0">
                    <IconAward className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-base sm:text-lg font-serif font-bold text-white">20+</span>
                    <span className="block text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider font-sans">Years Experience</span>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/20" />
                <div className="flex items-center gap-3 pr-2">
                  <div className="w-9 h-9 rounded-lg bg-[#baa867]/20 flex items-center justify-center text-[#baa867] shrink-0">
                    <IconStar className="w-5 h-5 text-[#baa867]" />
                  </div>
                  <div>
                    <span className="block text-base sm:text-lg font-serif font-bold text-white">4.9</span>
                    <span className="block text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider font-sans">Average Rating</span>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#baa867]/20 flex items-center justify-center text-[#baa867] shrink-0">
                    <IconUsers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-base sm:text-lg font-serif font-bold text-white">1,200+</span>
                    <span className="block text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider font-sans">Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Reference-Inspired Services Showcase */}
        <WhatWeOfferSection onOpenConsultation={handleOpenConsultation} />

        {/* 3. Engineering & Standards Deep Dive */}
        <WhoWeAreSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. Ceiling Project Gallery Carousel & Modal */}
        <ProjectGallerySection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Testimonials & Client Reviews */}
        <TestimonialsSection />

        {/* 6. Frequently Asked Questions */}
        <FAQSection onOpenConsultation={() => handleOpenConsultation("Ceiling Technical FAQ Inquiry")} />

        {/* 7. Contact & Consultation Request */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        key={`${selectedService}-${modalOpen}`}
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialService={selectedService}
      />

      {/* WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
