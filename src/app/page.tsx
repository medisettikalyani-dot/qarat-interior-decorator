"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatWeOfferSection } from "@/components/WhatWeOfferSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { ProjectGallerySection } from "@/components/ProjectGallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

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

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] flex flex-col selection:bg-[var(--color-accent)] selection:text-[var(--color-accent-ink)]">
      {/* 1. Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* 2. False Ceiling & Partition Hero */}
        <Hero onOpenConsultation={() => handleOpenConsultation("Gypsum False Ceiling")} />

        {/* 3. What We Offer */}
        <WhatWeOfferSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. Who We Are */}
        <WhoWeAreSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Project Gallery */}
        <ProjectGallerySection onOpenConsultation={handleOpenConsultation} />

        {/* 6. Customer Reviews */}
        <TestimonialsSection />

        {/* 7. FAQs */}
        <FAQSection onOpenConsultation={() => handleOpenConsultation("Ceiling Technical FAQ Inquiry")} />

        {/* 8. Final Enquiry CTA */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Consultation & Quotation Modal */}
      <ConsultationModal
        key={`${selectedService}-${modalOpen}`}
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialService={selectedService}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
