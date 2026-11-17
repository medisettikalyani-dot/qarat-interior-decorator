"use client";

import React from "react";
import { ServiceShowcaseSection, ServicePhoto } from "./ServiceShowcaseSection";

interface ServiceProps {
  onOpenConsultation: (serviceTitle: string) => void;
}

export function WallDecorativeShowcase({ onOpenConsultation }: ServiceProps) {
  const wallPhotos: ServicePhoto[] = [
    {
      src: "/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-01.webp",
      alt: "QARAT high-gloss UV marble sheet TV media wall with metallic profile trims and integrated lighting",
      caption: "High-Gloss UV Marble TV Wall",
    },
    {
      src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-02.webp",
      alt: "QARAT acoustic fluted WPC wall louvers and vertical slat feature cladding",
      caption: "Acoustic Fluted WPC Louvers",
    },
    {
      src: "/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp",
      alt: "QARAT UV marble sheet media wall installation with champagne metallic profile accents",
      caption: "UV Marble with Accent Profiles",
    },
    {
      src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp",
      alt: "QARAT vertical WPC fluted paneling precision edge alignment",
      caption: "Fluted Paneling Detail",
    },
    {
      src: "/images/qarat/pvc-panels/qarat-pvc-panel-wall-01.webp",
      alt: "QARAT waterproof PVC decorative tongue-and-groove wall cladding",
      caption: "Decorative Waterproof PVC Paneling",
    },
  ];

  const wallOfferings = [
    "High-gloss UV marble sheet TV media walls with champagne metallic profile trims",
    "Acoustic fluted WPC wall louvers and vertical slat feature cladding",
    "Waterproof PVC tongue-and-groove decorative paneling for moisture-prone spaces",
    "Concealed cabling infrastructure with integrated warm ambient backlighting",
  ];

  return (
    <ServiceShowcaseSection
      id="wall-decorative"
      disciplineNumber="02"
      label="Wall & Decorative Work"
      heading="Tactile Surfaces & Architectural Accents"
      description="Transforming plain vertical planes into rich architectural centerpieces. We specialize in precision installation of high-gloss UV marble sheets, acoustic fluted louvers, and bespoke TV unit backdrops engineered with seamless profiles and integrated lighting."
      offerings={wallOfferings}
      ctaLabel="Consult on Wall Work"
      consultationTitle="Wall & Decorative Work"
      photos={wallPhotos}
      theme="plum"
      imagePosition="right"
      onOpenConsultation={onOpenConsultation}
    />
  );
}
