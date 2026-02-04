"use client";

import { useEffect, useRef } from "react";

interface WavesProps {
  color?: string;
  waveCount?: number;
  speed?: number;
  amplitude?: number;
  className?: string;
}

export default function Waves({
  color = "#6106DF",
  waveCount = 5,
  speed = 0.02,
  amplitude = 50,
  className = "",
}: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const mouse = mouseRef.current;

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < waveCount; i++) {
        const yBase = height * 0.5 + (i - waveCount / 2) * 30;
        const alpha = 0.1 + (i / waveCount) * 0.2;

        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 5) {
          // Mouse influence - create ripple effect
          let mouseEffect = 0;
          if (mouse.active) {
            const dx = (x / width) - mouse.x;
            const dist = Math.abs(dx);
            mouseEffect = Math.exp(-dist * 10) * amplitude * Math.sin(dist * 30 - time * 8) * mouse.y;
          }

          const y =
            yBase +
            Math.sin(x * 0.01 + time + i * 0.5) * amplitude +
            Math.sin(x * 0.02 + time * 1.5 + i) * (amplitude * 0.5) +
            mouseEffect;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, yBase - amplitude, 0, height);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.globalAlpha = mouse.active ? alpha * 1.5 : alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      time += speed;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, [color, waveCount, speed, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: "black" }}
    />
  );
}
