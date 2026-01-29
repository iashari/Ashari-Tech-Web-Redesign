"use client";

import GlassSurface from "./GlassSurface";
import Aurora from "./Aurora";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-28 bg-black relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-primary/35 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary/25 rounded-full blur-[180px] pointer-events-none" />

      {/* Aurora background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Aurora
          colorStops={["#6106DF", "#2d0a5e", "#6106DF"]}
          amplitude={1.5}
          blend={0.5}
          speed={0.5}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
        <div className="text-center max-w-[650px] mx-auto">
          {/* Section Header */}
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t("contact.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15] whitespace-pre-line">
            {t("contact.title")}
          </h2>
          <p className="text-base text-white/70 max-w-[480px] mx-auto mb-10 leading-relaxed">
            {t("contact.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/6285280452688"
              target="_blank"
              className="relative inline-flex items-center justify-center gap-2 rounded-full overflow-hidden hover:scale-105 transition-transform"
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
              <span className="relative z-10 flex items-center gap-2 px-8 py-4 text-white font-medium">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("contact.whatsapp")}
              </span>
            </a>
            <a
              href="mailto:contact@ashari.tech"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/80 rounded-full font-medium hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              contact@ashari.tech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
