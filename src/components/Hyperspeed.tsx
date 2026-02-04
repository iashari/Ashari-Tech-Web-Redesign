"use client";

import { useEffect, useRef } from "react";

interface HyperspeedProps {
  speed?: number;
  starColor?: string;
  trailColor?: string;
  starCount?: number;
  className?: string;
}

export default function Hyperspeed({
  speed = 2,
  starColor = "#6106DF",
  trailColor = "#3B0A8C",
  starCount = 200,
  className = "",
}: HyperspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: { x: number; y: number; z: number; pz: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.offsetWidth - canvas.offsetWidth / 2,
          y: Math.random() * canvas.offsetHeight - canvas.offsetHeight / 2,
          z: Math.random() * canvas.offsetWidth,
          pz: 0,
        });
      }
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

      // Dynamic center based on mouse position
      const mouse = mouseRef.current;
      const targetCx = mouse.active ? mouse.x * width : width / 2;
      const targetCy = mouse.active ? mouse.y * height : height / 2;
      const cx = width / 2 + (targetCx - width / 2) * 0.3;
      const cy = height / 2 + (targetCy - height / 2) * 0.3;

      // Dynamic speed based on mouse
      const currentSpeed = mouse.active ? speed * 1.5 : speed;

      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.pz = star.z;
        star.z -= currentSpeed;

        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
          star.pz = star.z;
        }

        const sx = (star.x / star.z) * width + cx;
        const sy = (star.y / star.z) * height + cy;
        const px = (star.x / star.pz) * width + cx;
        const py = (star.y / star.pz) * height + cy;

        const size = (1 - star.z / width) * 3;

        ctx.beginPath();
        ctx.strokeStyle = trailColor;
        ctx.lineWidth = size;
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = starColor;
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    initStars();
    animate();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, [speed, starColor, trailColor, starCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: "black" }}
    />
  );
}
