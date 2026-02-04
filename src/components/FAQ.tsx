"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
  ];

  return (
    <section id="faq" className="py-28 scroll-mt-20 bg-black relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t("faq.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
            {t("faq.title")}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="w-full">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-white/10 rounded-lg px-4 ${activeIndex === i ? "bg-white/[0.02]" : ""} transition-colors`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-base text-white/90 group-hover:text-white font-medium pr-4 transition-colors">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  activeIndex === i
                    ? "border-primary bg-primary/20 rotate-180"
                    : "border-white/20 group-hover:border-primary/50"
                }`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-4 h-4 transition-colors ${
                      activeIndex === i ? "text-primary" : "text-white/50"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === i ? "max-h-[300px] pb-6" : "max-h-0"
                }`}
              >
                <p className="text-base text-white/70 leading-relaxed pr-12">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
