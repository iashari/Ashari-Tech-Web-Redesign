"use client";

import { useEffect, useRef } from "react";

interface GridMotionProps {
  color?: string;
  gridSize?: number;
  speed?: number;
  className?: string;
}

export default function GridMotion({
  color = "#6106DF",
  gridSize = 50,
  speed = 0.02,
  className = "",
}: GridMotionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

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
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
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

      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const baseX = i * gridSize;
          const baseY = j * gridSize;

          const distX = (baseX - width / 2) / width;
          const distY = (baseY - height / 2) / height;
          const dist = Math.sqrt(distX * distX + distY * distY);

          let offsetX = Math.sin(time + dist * 10) * 10;
          let offsetY = Math.cos(time + dist * 10) * 10;

          // Mouse influence - ripple from cursor
          if (mouse.active) {
            const dx = baseX - mouse.x;
            const dy = baseY - mouse.y;
            const mouseDist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 200;

            if (mouseDist < maxDist) {
              const force = (1 - mouseDist / maxDist);
              const angle = Math.atan2(dy, dx);
              offsetX += Math.cos(angle) * force * 30 + Math.sin(time * 5 + mouseDist * 0.1) * force * 15;
              offsetY += Math.sin(angle) * force * 30 + Math.cos(time * 5 + mouseDist * 0.1) * force * 15;
            }
          }

          let alpha = 0.2 + Math.sin(time + dist * 5) * 0.15;
          let dotSize = 2;

          // Brighten and enlarge near mouse
          if (mouse.active) {
            const dx = baseX - mouse.x;
            const dy = baseY - mouse.y;
            const mouseDist = Math.sqrt(dx * dx + dy * dy);
            if (mouseDist < 150) {
              const influence = 1 - mouseDist / 150;
              alpha += influence * 0.5;
              dotSize += influence * 3;
            }
          }

          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.globalAlpha = Math.min(alpha, 1);
          ctx.arc(baseX + offsetX, baseY + offsetY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw grid lines
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 0.5;

      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, height);
        ctx.stroke();
      }

      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * gridSize);
        ctx.lineTo(width, j * gridSize);
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
  }, [color, gridSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: "black" }}
    />
  );
}
