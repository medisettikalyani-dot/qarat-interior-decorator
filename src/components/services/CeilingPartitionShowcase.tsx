"use client";

import React from "react";
import { ServiceShowcaseSection, ServicePhoto } from "./ServiceShowcaseSection";

interface ServiceProps {
  onOpenConsultation: (serviceTitle: string) => void;
}

export function CeilingPartitionShowcase({ onOpenConsultation }: ServiceProps) {
  const ceilingPhotos: ServicePhoto[] = [
    {
      src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp",
      alt: "QARAT executed stepped cove gypsum false ceiling with warm ambient cove lighting and recessed downlights",
      caption: "Stepped Gypsum Cove Ceiling",
    },
    {
      src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp",
      alt: "QARAT stepped gypsum ceiling cove detail with concealed warm LED trough illumination",
      caption: "Perimeter Trough & Indirect Light",
    },
    {
      src: "/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp",
      alt: "QARAT heavy-duty wire mesh POP murga jali ceiling structure",
      caption: "Wire Mesh POP (Murga Jali) Structure",
    },
    {
      src: "/images/qarat/ceiling/qarat-pvc-panel-ceiling-01.webp",
      alt: "QARAT waterproof tongue-and-groove PVC panel ceiling installation",
      caption: "Waterproof PVC Panel Ceiling",
    },
    {
      src: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-01.webp",
      alt: "QARAT modular 2x2 T-grid ceiling system for commercial and office interiors",
      caption: "Modular 2×2 Grid Ceiling",
    },
  ];

  const ceilingOfferings = [
    "Designer gypsum false ceilings with stepped ambient cove lighting",
    "Heavy-duty wire mesh POP (Murga Jali) structural ceilings",
    "Modular 2×2 grid ceiling systems for commercial and office interiors",
    "Precision metal-stud drywall framing & acoustic space-dividing partitions",
  ];

  return (
    <ServiceShowcaseSection
      id="ceiling-partition"
      disciplineNumber="01"
      label="Ceiling & Partition Work"
      heading="Ceilings That Define the Space"
      description="We engineer custom false ceilings and structural partitions that balance volume, lighting, and spatial proportion. From stepped coves with concealed ambient illumination to commercial acoustic grids, every installation guarantees structural flatness and millimeter precision."
      offerings={ceilingOfferings}
      ctaLabel="Consult on Ceilings"
      consultationTitle="Ceiling & Partition Work"
      photos={ceilingPhotos}
      theme="light"
      imagePosition="left"
      onOpenConsultation={onOpenConsultation}
    />
  );
}
