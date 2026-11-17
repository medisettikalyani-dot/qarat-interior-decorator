"use client";

import React from "react";
import { getWhatsAppUrl } from "@/config/siteConfig";
import { IconWhatsApp } from "./Icons";

export function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 print:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with QARAT false ceiling supervisor on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0" />

        {/* WhatsApp Icon */}
        <IconWhatsApp className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform group-hover:rotate-6" />

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#281326] text-white text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md border border-[#baa867]/30">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
