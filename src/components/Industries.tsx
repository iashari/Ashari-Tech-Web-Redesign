"use client";

import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";
import { BentoGrid, BentoCard } from "./BentoGrid";

export default function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      title: t("industries.ind1"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: t("industries.ind2"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: t("industries.ind3"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: t("industries.ind4"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: t("industries.ind5"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      title: t("industries.ind6"),
    },
  ];

  const stats = [
    { value: "50+", label: t("industries.stat1") },
    { value: "30+", label: t("industries.stat2") },
    { value: "95%", label: t("industries.stat3") },
  ];

  return (
    <section id="portfolio" className="py-28 scroll-mt-20 bg-black relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 pb-16 border-b border-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                className="text-5xl md:text-6xl font-bold text-primary tracking-tight mb-3"
              />
              <div className="text-sm text-white/60 font-medium uppercase tracking-[0.15em]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t("industries.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-[1.15]">
            {t("industries.title")}
          </h2>
          <p className="text-base text-white/70 max-w-[500px] leading-relaxed">
            {t("industries.description")}
          </p>
        </div>

        {/* Industry Grid with Bento */}
        <BentoGrid cols={3} className="gap-4">
          {industries.map((ind) => (
            <BentoCard key={ind.title} className="p-5 group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(97,6,223,0.3)] transition-all shrink-0">
                  {ind.icon}
                </div>
                <h4 className="text-white/90 group-hover:text-white font-medium transition-colors">{ind.title}</h4>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
