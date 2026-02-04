"use client";

import { useEffect, useRef } from "react";

interface SquaresProps {
  color?: string;
  size?: number;
  speed?: number;
  direction?: "up" | "down" | "left" | "right" | "diagonal";
  className?: string;
}

export default function Squares({
  color = "#6106DF",
  size = 40,
  speed = 0.5,
  direction = "diagonal",
  className = "",
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let offset = { x: 0, y: 0 };

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
      const mouseX = mouse.x * width;
      const mouseY = mouse.y * height;

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      const cols = Math.ceil(width / size) + 2;
      const rows = Math.ceil(height / size) + 2;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const baseX = i * size + (offset.x % size);
          const baseY = j * size + (offset.y % size);

          // Mouse influence - push squares away
          let pushX = 0;
          let pushY = 0;
          if (mouse.active) {
            const dx = baseX - mouseX;
            const dy = baseY - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 150;
            if (dist < maxDist) {
              const force = (1 - dist / maxDist) * 20;
              pushX = (dx / dist) * force;
              pushY = (dy / dist) * force;
            }
          }

          const x = baseX + pushX;
          const y = baseY + pushY;

          const distFromCenter = Math.sqrt(
            Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
          );
          const maxDistCenter = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          let alpha = 0.1 + (1 - distFromCenter / maxDistCenter) * 0.3;

          // Brighten near mouse
          if (mouse.active) {
            const distFromMouse = Math.sqrt(Math.pow(baseX - mouseX, 2) + Math.pow(baseY - mouseY, 2));
            if (distFromMouse < 150) {
              alpha += (1 - distFromMouse / 150) * 0.4;
            }
          }

          ctx.strokeStyle = color;
          ctx.globalAlpha = Math.min(alpha, 1);
          ctx.lineWidth = 0.5;
          ctx.strokeRect(x, y, size - 2, size - 2);
        }
      }

      ctx.globalAlpha = 1;

      switch (direction) {
        case "up":
          offset.y -= speed;
          break;
        case "down":
          offset.y += speed;
          break;
        case "left":
          offset.x -= speed;
          break;
        case "right":
          offset.x += speed;
          break;
        case "diagonal":
          offset.x += speed;
          offset.y += speed;
          break;
      }

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
  }, [color, size, speed, direction]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: "black" }}
    />
  );
}
