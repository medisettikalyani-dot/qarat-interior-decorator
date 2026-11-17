"use client";

import React, { useState } from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";
import {
  IconCheck,
  IconWhatsApp,
  IconPhone,
  IconArrowUpRight,
  IconMail,
} from "./Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Gypsum False Ceiling",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please enter your name and phone number.");
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
      message: "",
    });
  };

  const hasPhone = Boolean(siteConfig.contact.phoneNumber);
  const hasWhatsApp = Boolean(siteConfig.contact.whatsappNumber);
  const hasEmail = Boolean(siteConfig.contact.email);

  const whatsAppMessage = `Hello QARAT, my name is ${formData.name || "Client"}. I am interested in ${formData.service}.${
    formData.message ? ` Note: ${formData.message}` : ""
  }`;

  const dynamicWhatsAppUrl = getWhatsAppUrl(whatsAppMessage);

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
    <section
      id="quote"
      className="py-16 sm:py-20 lg:py-24 bg-[#faf8f5] text-[var(--color-ink)] border-b border-[var(--color-rule)] scroll-mt-20 relative overflow-hidden"
    >
      {/* Anchor alias for backwards compatibility */}
      <div id="contact" className="sr-only" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="h-[1px] w-6 sm:w-10 bg-[#baa867]/60" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-[var(--color-accent)]">
              Get In Touch
            </span>
            <span className="h-[1px] w-6 sm:w-10 bg-[#baa867]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--color-ink)] font-normal tracking-tight">
            Contact Us
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-2 leading-relaxed">
            Have a question or planning ceiling and partition work in Lucknow?
            Call, chat, or leave us a message below.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column (5 cols): Direct Contact Info */}
          <div className="lg:col-span-5">
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[var(--color-rule)] shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-ink)] font-normal">
                    Direct Contact
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
                    Connect directly with our team for ceiling &amp; partition consultations.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {/* Phone */}
                  {hasPhone && (
                    <a
                      href={`tel:${siteConfig.contact.phoneNumber.replace(/[^0-9+]/g, "")}`}
                      className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#faf8f5] border border-[var(--color-rule)] hover:border-[var(--color-accent)] transition-all group shadow-2xs"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                        <IconPhone className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] text-[var(--color-muted)] block font-medium">Call Us Directly</span>
                        <span className="text-sm sm:text-base font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                          {siteConfig.contact.phoneNumber}
                        </span>
                      </div>
                      <IconArrowUpRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0" />
                    </a>
                  )}

                  {/* WhatsApp */}
                  {hasWhatsApp && (
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#faf8f5] border border-[var(--color-rule)] hover:border-[var(--color-whatsapp)] transition-all group shadow-2xs"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--color-whatsapp)]/10 text-[var(--color-whatsapp)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-whatsapp)] group-hover:text-white transition-colors">
                        <IconWhatsApp className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] text-[var(--color-muted)] block font-medium">WhatsApp Chat</span>
                        <span className="text-sm sm:text-base font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-whatsapp)] transition-colors">
                          +91 93364 11421
                        </span>
                      </div>
                      <IconArrowUpRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-whatsapp)] transition-colors shrink-0" />
                    </a>
                  )}

                  {/* Email */}
                  {hasEmail && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#faf8f5] border border-[var(--color-rule)] hover:border-[var(--color-accent)] transition-all group shadow-2xs"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                        <IconMail className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] text-[var(--color-muted)] block font-medium">Email</span>
                        <span className="text-xs sm:text-sm font-semibold text-[var(--color-ink)] truncate block group-hover:text-[var(--color-accent)] transition-colors">
                          {siteConfig.contact.email}
                        </span>
                      </div>
                      <IconArrowUpRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0" />
                    </a>
                  )}
                </div>
            </div>
          </div>

          {/* Right Column (7 cols): Simple & Neat Message Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[var(--color-rule)] shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-ink)] font-normal">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
                  Fill in your details and we will get back to you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-[var(--color-whatsapp)] flex items-center justify-center mx-auto border border-emerald-200">
                    <IconCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif text-[var(--color-ink)]">
                    Thank You!
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] max-w-sm mx-auto leading-relaxed">
                    We have received your message, <span className="font-semibold text-[var(--color-ink)]">{formData.name}</span>.
                    Our team will contact you at{" "}
                    <span className="font-semibold text-[var(--color-ink)]">{formData.phone}</span> shortly.
                  </p>

                  {hasWhatsApp && (
                    <div className="pt-3 max-w-xs mx-auto">
                      <a
                        href={dynamicWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full py-2.5 flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] hover:bg-[var(--color-whatsapp)]/90 text-white text-xs"
                      >
                        <IconWhatsApp className="w-4 h-4" />
                        <span>Chat on WhatsApp Now</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-[var(--color-accent)] hover:underline font-medium cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-md bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 text-[var(--color-error)] text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
                        Your Name <span className="text-[var(--color-accent)]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[var(--color-rule)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] text-base sm:text-sm text-[var(--color-ink)] rounded-lg placeholder:text-[var(--color-muted)]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
                        Phone Number <span className="text-[var(--color-accent)]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 93364 11421"
                        className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[var(--color-rule)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] text-base sm:text-sm text-[var(--color-ink)] rounded-lg placeholder:text-[var(--color-muted)]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[var(--color-rule)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] text-base sm:text-sm text-[var(--color-ink)] rounded-lg cursor-pointer transition-colors"
                    >
                      <option value="Gypsum False Ceiling">Gypsum False Ceiling</option>
                      <option value="POP Murga Jali Ceiling">POP Murga Jali Ceiling</option>
                      <option value="2x2 Grid Ceiling">2x2 Grid Ceiling</option>
                      <option value="PVC Ceiling Panels">PVC Ceiling Panels</option>
                      <option value="Drywall Partitions">Drywall Partitions</option>
                      <option value="Complete Ceiling & Partition Work">Complete Ceiling &amp; Partition Work</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5">
                      Message / Requirement <span className="text-[var(--color-muted)] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your room size, ceiling/partition style, or specific requirements..."
                      className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[var(--color-rule)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] text-base sm:text-sm text-[var(--color-ink)] rounded-lg placeholder:text-[var(--color-muted)]/50 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="btn-primary flex-1 py-3 text-xs sm:text-sm font-semibold cursor-pointer shadow-sm hover:shadow flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <IconArrowUpRight className="w-4 h-4 text-white" />
                    </button>
                    {hasWhatsApp && (
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                        title="Connect directly on WhatsApp with your inquiry pre-filled"
                      >
                        <IconWhatsApp className="w-4 h-4" />
                        <span>Chat via WhatsApp</span>
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
