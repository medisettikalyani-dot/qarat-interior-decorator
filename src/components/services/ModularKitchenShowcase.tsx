"use client";

import React from "react";
import { ServiceShowcaseSection, ServicePhoto } from "./ServiceShowcaseSection";

interface ServiceProps {
  onOpenConsultation: (serviceTitle: string) => void;
}

export function ModularKitchenShowcase({ onOpenConsultation }: ServiceProps) {
  const kitchenPhotos: ServicePhoto[] = [
    {
      src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp",
      alt: "QARAT bespoke modern modular kitchen cabinetry with central island and integrated under-cabinet lighting",
      caption: "Modular Kitchen & Island Layout",
    },
    {
      src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-02.webp",
      alt: "QARAT precision modular kitchen storage with moisture-resistant BWR marine-ply substrate",
      caption: "Precision Storage & Substrate",
    },
    {
      src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-03.webp",
      alt: "QARAT floor-to-ceiling modular cabinetry with built-in appliance housing",
      caption: "Tall Cabinetry & Appliance Housing",
    },
    {
      src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-05.webp",
      alt: "QARAT fitted cabinetry with premium soft-close mechanisms and sleek handle profiles",
      caption: "Soft-Close Hardware & Finish",
    },
  ];

  const kitchenOfferings = [
    "Ergonomic L-shaped, U-shaped, and island modular kitchen layouts",
    "Moisture-resistant BWR marine-ply carcass with anti-termite treatment",
    "Floor-to-ceiling fitted wardrobes, vanity units, and walk-in closets",
    "Precision soft-close drawer runners, tandem boxes, and hydraulic hinges",
  ];

  return (
    <div id="modular-kitchen" className="relative">
      <ServiceShowcaseSection
        id="modular-kitchen-furniture"
        disciplineNumber="03"
        label="Modular Kitchen & Furniture"
      heading="Kitchens Crafted for Everyday Life"
      description="Custom-engineered modular kitchens and fitted furniture built for enduring functionality. Every layout balances the ergonomic work triangle with moisture-resistant marine-ply substrates, smooth soft-close hardware, and pristine surface finishes."
      offerings={kitchenOfferings}
      ctaLabel="Consult on Kitchens"
      consultationTitle="Modular Kitchen & Furniture"
      photos={kitchenPhotos}
      theme="light"
      imagePosition="left"
      onOpenConsultation={onOpenConsultation}
    />
    </div>
  );
}
