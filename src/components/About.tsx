"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BentoGrid, BentoCard, BentoIcon, BentoTitle, BentoDescription } from "./BentoGrid";

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: t("about.value1.title"),
      desc: t("about.value1.desc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: t("about.value2.title"),
      desc: t("about.value2.desc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: t("about.value3.title"),
      desc: t("about.value3.desc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: t("about.value4.title"),
      desc: t("about.value4.desc"),
    },
  ];

  const benefits = [
    { num: "01", title: t("about.benefit1.title"), desc: t("about.benefit1.desc") },
    { num: "02", title: t("about.benefit2.title"), desc: t("about.benefit2.desc") },
    { num: "03", title: t("about.benefit3.title"), desc: t("about.benefit3.desc") },
    { num: "04", title: t("about.benefit4.title"), desc: t("about.benefit4.desc") },
  ];

  return (
    <section id="about" className="py-28 scroll-mt-20 bg-black relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t("about.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-[1.15] whitespace-pre-line">
            {t("about.title")}
          </h2>
          <p className="text-base text-white/70 max-w-[500px] leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Value Cards Grid with Bento */}
        <BentoGrid cols={2} className="mb-20">
          {values.map((v) => (
            <BentoCard key={v.title} className="p-6 group">
              <BentoIcon>{v.icon}</BentoIcon>
              <BentoTitle className="mt-5 mb-2">{v.title}</BentoTitle>
              <BentoDescription>{v.desc}</BentoDescription>
            </BentoCard>
          ))}
        </BentoGrid>

        {/* Why Choose Us */}
        <div className="border-t border-white/10 pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-12">
            {t("about.why")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.num}>
                <div className="text-4xl font-bold text-primary tracking-tighter mb-4">
                  {b.num}
                </div>
                <h4 className="text-white font-semibold mb-2">{b.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
