"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Gypsum False Ceiling");

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] flex flex-col selection:bg-[var(--color-accent)] selection:text-[var(--color-accent-ink)]">
      <Header onOpenConsultation={handleOpenConsultation} />
      <main className="flex-1 pt-16 sm:pt-20">
        <ContactSection />
      </main>
      <Footer />
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialService={selectedService}
      />
      <FloatingWhatsApp />
    </div>
  );
}
