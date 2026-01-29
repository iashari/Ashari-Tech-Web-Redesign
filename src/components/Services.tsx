"use client";

import GlassSurface from "./GlassSurface";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      badge: t("services.badge1"),
      title: t("services.service1.title"),
      price: "2.5",
      unit: "Juta",
      link: "/layanan/website-company-profile",
      features: [
        t("services.service1.f1"),
        t("services.service1.f2"),
        t("services.service1.f3"),
        t("services.service1.f4"),
      ],
    },
    {
      badge: t("services.badge2"),
      title: t("services.service2.title"),
      price: "3",
      unit: "Juta/bulan",
      link: "/layanan/seo-content-marketing",
      features: [
        t("services.service2.f1"),
        t("services.service2.f2"),
        t("services.service2.f3"),
        t("services.service2.f4"),
      ],
      featured: true,
    },
    {
      badge: t("services.badge3"),
      title: t("services.service3.title"),
      price: "3",
      unit: "Juta/bulan",
      link: "/layanan/social-media-digital-ads",
      features: [
        t("services.service3.f1"),
        t("services.service3.f2"),
        t("services.service3.f3"),
        t("services.service3.f4"),
      ],
    },
  ];

  const steps = [
    { num: "01", title: t("services.step1.title"), desc: t("services.step1.desc") },
    { num: "02", title: t("services.step2.title"), desc: t("services.step2.desc") },
    { num: "03", title: t("services.step3.title"), desc: t("services.step3.desc") },
    { num: "04", title: t("services.step4.title"), desc: t("services.step4.desc") },
  ];

  return (
    <section id="services" className="py-28 scroll-mt-20 bg-black relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t("services.label")}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15] whitespace-pre-line">
              {t("services.title")}
            </h2>
            <a
              href="/pricing"
              className="text-sm text-white/60 hover:text-primary transition-colors font-medium"
            >
              {t("services.viewAll")} →
            </a>
          </div>
        </div>

        {/* Service Cards */}
        <div id="pricing" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-7 transition-all duration-300 ${
                s.featured
                  ? "bg-gradient-to-b from-primary/15 to-primary/5 border-2 border-primary/50 scale-[1.02]"
                  : "bg-white/[0.02] border border-white/10 hover:border-primary/30 hover:bg-primary/[0.04]"
              }`}
            >
              <span className={`inline-block text-xs uppercase tracking-[0.15em] font-medium mb-5 ${
                s.featured ? "text-primary bg-primary/20 px-3 py-1 rounded-full" : "text-white/50"
              }`}>
                {s.badge}
              </span>
              <h3 className="text-white text-xl font-semibold mb-4">{s.title}</h3>
              <div className="text-4xl font-bold text-white mb-6 tracking-tight">
                Rp {s.price}
                <span className="text-base font-normal text-white/50 ml-1">{s.unit}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <div className={`w-1.5 h-1.5 rounded-full ${s.featured ? "bg-primary" : "bg-primary/50"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={s.link}
                className="relative block w-full text-center rounded-full overflow-hidden hover:scale-[1.02] transition-transform"
              >
                <div className="absolute inset-0">
                  <GlassSurface
                    width="100%"
                    height="100%"
                    borderRadius={50}
                    borderWidth={0}
                    brightness={50}
                    opacity={0.93}
                    blur={4}
                    displace={0}
                    distortionScale={-300}
                    redOffset={-50}
                    greenOffset={-50}
                    blueOffset={-50}
                    className="!w-full !h-full"
                  />
                </div>
                <span className="relative z-10 block px-6 py-3 text-white text-sm font-medium">
                  {t("services.viewDetail")}
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="border-t border-white/10 pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-12">
            {t("services.process")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30" />
            {steps.map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-primary/50 flex items-center justify-center mx-auto mb-5 relative z-10">
                  <span className="text-sm text-primary font-bold">{step.num}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
