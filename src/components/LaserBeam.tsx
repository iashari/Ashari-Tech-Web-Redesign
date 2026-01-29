"use client";

import { useEffect, useRef } from "react";

interface LaserBeamProps {
  direction?: "vertical" | "horizontal";
  length?: number;
  thickness?: number;
  color?: string;
  speed?: number;
  className?: string;
}

const LaserBeam: React.FC<LaserBeamProps> = ({
  direction = "vertical",
  length = 150,
  thickness = 2,
  color = "#6106DF",
  speed = 3,
  className = "",
}) => {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam) return;

    let position = -50;
    let animationId: number;

    const animate = () => {
      position += speed * 0.5;

      if (direction === "vertical") {
        if (position > 100 + 50) position = -50;
        beam.style.top = `${position}%`;
      } else {
        if (position > 100 + 50) position = -50;
        beam.style.left = `${position}%`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [direction, speed]);

  const isVertical = direction === "vertical";

  return (
    <div
      className={`absolute overflow-hidden pointer-events-none ${className}`}
      style={{
        width: isVertical ? thickness : length,
        height: isVertical ? length : thickness,
      }}
    >
      {/* Static glow line */}
      <div
        className="absolute inset-0"
        style={{
          background: isVertical
            ? `linear-gradient(to bottom, transparent, ${color}40, transparent)`
            : `linear-gradient(to right, transparent, ${color}40, transparent)`,
        }}
      />
      {/* Animated laser */}
      <div
        ref={beamRef}
        className="absolute"
        style={{
          width: isVertical ? "100%" : "30%",
          height: isVertical ? "30%" : "100%",
          background: isVertical
            ? `linear-gradient(to bottom, transparent, ${color}, ${color}, transparent)`
            : `linear-gradient(to right, transparent, ${color}, ${color}, transparent)`,
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}80, 0 0 60px ${color}40`,
          left: isVertical ? 0 : undefined,
          top: isVertical ? undefined : 0,
        }}
      />
    </div>
  );
};

export default LaserBeam;
