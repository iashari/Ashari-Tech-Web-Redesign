"use client";

import { useRef, useEffect } from "react";
import RotatingText from "./RotatingText";
import ScrambledText from "./ScrambledText";
import GlassSurface from "./GlassSurface";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 0.5;
    const tryPlay = () => {
      video.play().catch(() => setTimeout(() => video.play(), 500));
    };
    video.addEventListener("canplay", tryPlay);
    if (video.readyState >= 3) tryPlay();
    return () => video.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <section id="home" className="relative min-h-screen scroll-mt-16 flex flex-col justify-between overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Top section */}
      <div className="relative z-[2] pt-28 md:pt-36 px-6 md:px-16 pointer-events-none">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
          {t("hero.label")}
        </p>
      </div>

      {/* Center - Large rotating text as focal point */}
      <div className="relative z-[2] flex-1 flex items-center px-6 md:px-16 pointer-events-none">
        <div className="w-full">
          <p className="text-xl md:text-2xl text-white/80 font-light mb-3">
            {t("hero.prefix")}
          </p>
          <div className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold leading-[0.95] tracking-tighter">
            <RotatingText
              texts={["AI Chatbot.", "Otomasi.", "Analytics.", "Vision."]}
              rotationInterval={2200}
              staggerDuration={0.03}
              staggerFrom="first"
              splitBy="characters"
              mainClassName="text-white"
              elementLevelClassName="drop-shadow-[0_0_20px_rgba(97,6,223,0.3)]"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="relative z-[2] pb-12 md:pb-16 px-6 md:px-16 pointer-events-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="pointer-events-auto">
            <ScrambledText
              radius={50}
              duration={0.4}
              scrambleChars="._"
              className="text-base text-white max-w-sm whitespace-pre-line leading-relaxed font-mono"
            >
              {t("hero.description")}
            </ScrambledText>
          </div>
          <div className="flex items-center gap-5 pointer-events-auto">
            <a
              href="mailto:contact@ashari.tech"
              className="relative inline-flex rounded-full overflow-hidden hover:scale-105 transition-transform"
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
              <span className="relative z-10 px-6 py-3 text-white font-medium">
                {t("hero.cta")} →
              </span>
            </a>
            <a
              href="/portfolio"
              className="text-sm text-white/60 hover:text-primary font-medium transition-colors"
            >
              {t("hero.portfolio")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
