"use client";

import React, { useState, useEffect } from "react";
import { IconClose, IconCheck, IconWhatsApp, IconPhone, IconArrowUpRight } from "./Icons";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  initialService = "",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService || "Gypsum False Ceiling",
    location: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please enter your name and contact phone number.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      service: "Gypsum False Ceiling",
      location: "",
      details: "",
    });
    onClose();
  };

  const hasPhone = Boolean(siteConfig.contact.phoneNumber);
  const hasWhatsApp = Boolean(siteConfig.contact.whatsappNumber);

  const whatsAppInquiryMessage = `Hello QARAT, my name is ${formData.name || "Client"}. I would like to request an itemized quotation for ${formData.service}${formData.location ? ` in ${formData.location}` : ""
    }.${formData.details ? ` Details: ${formData.details}` : ""}`;

  const dynamicWhatsAppUrl = getWhatsAppUrl(whatsAppInquiryMessage);

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please enter your name and phone number.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.open(dynamicWhatsAppUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl card-plate p-5 sm:p-8 md:p-9 bg-[var(--color-plate)] text-[var(--color-ink)] border border-[var(--color-rule)] shadow-2xl rounded-sm max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors rounded-full hover:bg-[var(--color-paper-2)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] cursor-pointer"
          aria-label="Close dialog"
        >
          <IconClose className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <IconCheck className="w-7 h-7" />
            </div>
            <h3
              id="modal-title"
              className="text-2xl font-serif text-[var(--color-ink)]"
            >
              Quotation Request Received!
            </h3>
            <p className="text-[var(--color-muted)] text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              Thank you, <span className="font-semibold text-[var(--color-ink)]">{formData.name}</span>.
              Our interior supervisor will review your project requirements for{" "}
              <span className="font-semibold text-[var(--color-accent)]">{formData.service}</span>{" "}
              and connect with you directly on{" "}
              <span className="font-semibold text-[var(--color-ink)]">{formData.phone}</span>.
            </p>

            {hasWhatsApp && (
              <div className="pt-2 max-w-sm mx-auto">
                <a
                  href={dynamicWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-2.5 flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] hover:bg-[var(--color-whatsapp)]/90 text-white text-xs"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  <span>Forward Details via WhatsApp</span>
                </a>
              </div>
            )}

            <div className="pt-3">
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary text-xs py-2 px-6"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-accent)] block mb-1">
                Direct Technical Consultation
              </span>
              <h3
                id="modal-title"
                className="text-2xl font-serif text-[var(--color-ink)]"
              >
                Request an Itemized Quote
              </h3>
              <p className="text-[var(--color-muted)] text-xs sm:text-sm mt-1">
                Share your spatial specifications for tailored BOQ estimates and substrate recommendations.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-2.5 rounded-xs bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 text-[var(--color-error)] text-xs font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                    Your Name <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2.5 sm:py-2 bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-base sm:text-sm focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[var(--radius-card)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                    Phone Number <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2.5 sm:py-2 bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-base sm:text-sm focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[var(--radius-card)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                    Required Service <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3 py-2.5 sm:py-2 bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-base sm:text-sm focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[var(--radius-card)] cursor-pointer"
                  >
                    <option value="Gypsum False Ceiling">
                      01. Gypsum False Ceiling
                    </option>
                    <option value="Gypsum Partition Walls">
                      02. Gypsum Partition Walls
                    </option>
                    <option value="POP Murga Jali Ceiling">
                      03. POP Murga Jali Ceiling
                    </option>
                    <option value="Gypsum 2x2 Grid Ceiling">
                      04. Gypsum 2x2 Grid Ceiling
                    </option>
                    <option value="PVC Ceiling Installation">
                      05. PVC Ceiling Installation
                    </option>
                    <option value="Complete Ceiling & Partition Package">
                      Complete Ceiling &amp; Partition Package
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                    Project City / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Gomti Nagar, Lucknow"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3 py-2.5 sm:py-2 bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-base sm:text-sm focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[var(--radius-card)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-ink-2)] mb-1">
                  Project Scope or Room Details (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Approximate room dimensions, ceiling heights, or preferred materials..."
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  className="w-full px-3 py-2.5 sm:py-2 bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-base sm:text-sm focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[var(--radius-card)] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn-primary flex-1 py-3 text-xs sm:text-sm font-semibold cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="whitespace-nowrap">Submit Quote Request</span>
                  <IconArrowUpRight className="w-4 h-4 text-[var(--color-accent-ink)]" />
                </button>
                {hasWhatsApp && (
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                    title="Send quote specifications directly via WhatsApp"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                )}
              </div>
            </form>

            {(hasPhone || hasWhatsApp) && (
              <div className="mt-5 pt-4 border-t border-[var(--color-rule)] flex items-center justify-between text-xs text-[var(--color-muted)]">
                <span>Prefer instant chat?</span>
                <div className="flex items-center gap-3">
                  {hasWhatsApp && (
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--color-whatsapp)] hover:underline font-medium"
                    >
                      <IconWhatsApp className="w-3.5 h-3.5" /> WhatsApp Desk
                    </a>
                  )}
                  {hasPhone && (
                    <a
                      href={`tel:${siteConfig.contact.phoneNumber.replace(/[^0-9+]/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-[var(--color-ink)] hover:underline font-medium"
                    >
                      <IconPhone className="w-3.5 h-3.5" /> Call
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
