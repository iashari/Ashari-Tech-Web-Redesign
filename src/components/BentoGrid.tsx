"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import { gsap } from "gsap";
import { motion, useMotionValue, useSpring, SpringOptions } from "motion/react";

// Brand color: #6106DF = rgb(97, 6, 223)
const DEFAULT_GLOW_COLOR = "97, 6, 223";
const DEFAULT_SPOTLIGHT_RADIUS = 250;
const MOBILE_BREAKPOINT = 768;

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  cols?: 2 | 3 | 4;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  enableTilt?: boolean;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export function BentoGrid({
  children,
  className = "",
  cols = 3,
  enableSpotlight = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}: BentoGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMobileDetection();

  const colClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  useEffect(() => {
    if (isMobile || !gridRef.current || !enableSpotlight) return;

    // Create spotlight element
    const spotlight = document.createElement("div");
    spotlight.className = "bento-global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.12) 0%,
        rgba(${glowColor}, 0.06) 20%,
        rgba(${glowColor}, 0.03) 35%,
        rgba(${glowColor}, 0.01) 50%,
        transparent 60%
      );
      z-index: 50;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current;
      const rect = section.getBoundingClientRect();
      const mouseInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll(".bento-card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((card) => {
          (card as HTMLElement).style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll(".bento-card").forEach((card) => {
        (card as HTMLElement).style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [isMobile, enableSpotlight, spotlightRadius, glowColor]);

  return (
    <>
      <style jsx global>{`
        .bento-card {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          --glow-radius: 200px;
        }

        .bento-card--border-glow::after {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: radial-gradient(
            var(--glow-radius) circle at var(--glow-x) var(--glow-y),
            rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
            rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
            transparent 60%
          );
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .bento-card--border-glow:hover {
          box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.15);
        }
      `}</style>

      <div
        ref={gridRef}
        className={`
          relative grid grid-cols-1 gap-4
          ${colClasses[cols]}
          ${className}
        `}
      >
        {children}
      </div>
    </>
  );
}

export function BentoCard({
  children,
  className = "",
  size = "md",
  enableTilt = true,
  rotateAmplitude = 1.5,
  scaleOnHover = 1.01,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();

  // Motion values for tilt effect
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const sizeClasses = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 row-span-1 md:col-span-1",
    lg: "col-span-1 row-span-1 md:col-span-2",
    xl: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableTilt || isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Clamp values between -1 and 1 to prevent over-rotation at corners
    const clampedX = Math.max(-1, Math.min(1, offsetY / (rect.height / 2)));
    const clampedY = Math.max(-1, Math.min(1, offsetX / (rect.width / 2)));

    const rotationX = clampedX * -rotateAmplitude;
    const rotationY = clampedY * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseEnter = () => {
    if (!enableTilt || isMobile) return;
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    if (!enableTilt || isMobile) return;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        bento-card bento-card--border-glow
        relative overflow-hidden rounded-2xl
        border border-white/10 bg-white/[0.02]
        backdrop-blur-sm
        transition-colors duration-300 ease-out
        hover:border-primary/30 hover:bg-white/[0.04]
        ${sizeClasses[size]}
        ${className}
      `}
      style={{
        ["--glow-x" as string]: "50%",
        ["--glow-y" as string]: "50%",
        ["--glow-intensity" as string]: "0",
        ["--glow-radius" as string]: "200px",
        transformStyle: "preserve-3d",
        perspective: "800px",
        rotateX,
        rotateY,
        scale,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

// Helper components
interface BentoIconProps {
  children: ReactNode;
  className?: string;
}

export function BentoIcon({ children, className = "" }: BentoIconProps) {
  return (
    <div
      className={`
        w-12 h-12 rounded-xl
        bg-primary/10 border border-primary/20
        flex items-center justify-center
        text-primary
        transition-all duration-300
        group-hover:bg-primary/20 group-hover:border-primary/40
        group-hover:shadow-[0_0_20px_rgba(97,6,223,0.3)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface BentoTitleProps {
  children: ReactNode;
  glow?: boolean;
  className?: string;
}

export function BentoTitle({ children, glow = false, className = "" }: BentoTitleProps) {
  return (
    <h3
      className={`
        text-white font-semibold text-lg
        ${glow ? "drop-shadow-[0_0_10px_rgba(97,6,223,0.5)]" : ""}
        ${className}
      `}
    >
      {children}
    </h3>
  );
}

interface BentoDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function BentoDescription({ children, className = "" }: BentoDescriptionProps) {
  return <p className={`text-sm text-white/60 leading-relaxed ${className}`}>{children}</p>;
}
