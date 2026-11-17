"use client";

import React from "react";
import { ServiceShowcaseSection, ServicePhoto } from "./ServiceShowcaseSection";

interface ServiceProps {
  onOpenConsultation: (serviceTitle: string) => void;
}

export function CommercialTurnkeyShowcase({ onOpenConsultation }: ServiceProps) {
  const commercialPhotos: ServicePhoto[] = [
    {
      src: "/images/qarat/commercial/qarat-corporate-office-interior-01.webp",
      alt: "QARAT corporate office reception area with architectural ceiling and vertical wall louvers",
      caption: "Corporate Reception & Paneling",
    },
    {
      src: "/images/qarat/commercial/qarat-corporate-office-interior-02.webp",
      alt: "QARAT executive conference and workspace interior with acoustic ceilings and concealed lighting",
      caption: "Executive Workspace Fitout",
    },
    {
      src: "/images/qarat/commercial/qarat-corporate-office-interior-04.webp",
      alt: "QARAT commercial office layout with precision glass and drywall partitioning",
      caption: "Commercial Drywall & Partitions",
    },
    {
      src: "/images/qarat/residential/qarat-residential-turnkey-bedroom-01.webp",
      alt: "QARAT turnkey residential luxury bedroom interior with stepped cove false ceiling and wall accents",
      caption: "Turnkey Residential Interior",
    },
    {
      src: "/images/qarat/residential/qarat-residential-turnkey-bedroom-02.webp",
      alt: "QARAT turnkey residential bedroom joinery and warm ambient cove lighting",
      caption: "Fitted Residential Joinery",
    },
  ];

  const commercialOfferings = [
    "Corporate office fitouts with acoustic partitions and modular ceiling grids",
    "High-traffic retail showroom interiors and bespoke display cladding",
    "Complete turnkey residential interior fitouts from bare shell to final finish",
    "Single-point execution supervision, site scheduling, and quality assurance",
  ];

  return (
    <ServiceShowcaseSection
      id="commercial-turnkey"
      disciplineNumber="04"
      label="Commercial & Turnkey Execution"
      heading="Comprehensive Turnkey Project Delivery"
      description="End-to-end interior execution for corporate offices, retail spaces, and private residences. We orchestrate the complete build sequence—from civil framing and ceiling infrastructure to decorative surfaces, modular joinery, and ready-to-occupy handover."
      offerings={commercialOfferings}
      ctaLabel="Consult on Turnkey Projects"
      consultationTitle="Commercial & Turnkey Execution"
      photos={commercialPhotos}
      theme="plum"
      imagePosition="right"
      onOpenConsultation={onOpenConsultation}
    />
  );
}
