"use client";

import { useEffect, useRef } from "react";

interface ThreadsProps {
  color?: string;
  amplitude?: number;
  frequency?: number;
  speed?: number;
  lineCount?: number;
  className?: string;
}

export default function Threads({
  color = "#6106DF",
  amplitude = 50,
  frequency = 0.02,
  speed = 0.02,
  lineCount = 30,
  className = "",
}: ThreadsProps) {
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

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < lineCount; i++) {
        const yOffset = (height / lineCount) * i;
        const phase = i * 0.5;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3 + (i / lineCount) * 0.4;

        for (let x = 0; x < width; x += 5) {
          // Mouse influence
          let mouseEffect = 0;
          if (mouse.active) {
            const dx = x / width - mouse.x;
            const dy = (yOffset / height) - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            mouseEffect = Math.exp(-dist * 5) * amplitude * 2 * Math.sin(time * 5);
          }

          const y =
            yOffset +
            Math.sin(x * frequency + time + phase) * amplitude +
            Math.sin(x * frequency * 0.5 + time * 0.7) * (amplitude * 0.5) +
            mouseEffect;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
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
  }, [color, amplitude, frequency, speed, lineCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: "black" }}
    />
  );
}
