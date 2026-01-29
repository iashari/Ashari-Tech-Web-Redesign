"use client";

import { useEffect, useRef, useState } from "react";

interface ScrambledTextProps {
  children: string;
  radius?: number;
  duration?: number;
  scrambleChars?: string;
  className?: string;
}

interface CharState {
  original: string;
  current: string;
  isScrambling: boolean;
  progress: number;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  children,
  radius = 100,
  duration = 1.2,
  scrambleChars = ".:!@#$%^&*",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const [chars, setChars] = useState<CharState[]>([]);
  const animationsRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const text = typeof children === "string" ? children : "";
    setChars(
      text.split("").map((c) => ({
        original: c,
        current: c,
        isScrambling: false,
        progress: 1,
      }))
    );
  }, [children]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      charsRef.current.forEach((charEl, index) => {
        if (!charEl) return;
        const rect = charEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);

        if (dist < radius && !animationsRef.current.has(index)) {
          // Start scramble animation for this character
          const startTime = performance.now();
          const charDuration = duration * 1000 * (1 - dist / radius);

          const animate = () => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / charDuration, 1);

            setChars((prev) => {
              const next = [...prev];
              if (next[index]) {
                if (progress < 1) {
                  const randomChar =
                    scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                  next[index] = {
                    ...next[index],
                    current: randomChar,
                    isScrambling: true,
                    progress,
                  };
                } else {
                  next[index] = {
                    ...next[index],
                    current: next[index].original,
                    isScrambling: false,
                    progress: 1,
                  };
                }
              }
              return next;
            });

            if (progress < 1) {
              const id = requestAnimationFrame(animate);
              animationsRef.current.set(index, id);
            } else {
              animationsRef.current.delete(index);
            }
          };

          const id = requestAnimationFrame(animate);
          animationsRef.current.set(index, id);
        }
      });
    };

    container.addEventListener("pointermove", handlePointerMove);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      animationsRef.current.forEach((id) => cancelAnimationFrame(id));
      animationsRef.current.clear();
    };
  }, [radius, duration, scrambleChars]);

  return (
    <div ref={containerRef} className={className} style={{ cursor: "default" }}>
      <p className="inline">
        {chars.map((char, i) =>
          char.original === "\n" ? (
            <br key={i} />
          ) : (
            <span
              key={i}
              ref={(el) => {
                if (el) charsRef.current[i] = el;
              }}
              className={`inline-block ${char.isScrambling ? "text-white" : ""}`}
              style={{ whiteSpace: char.original === " " ? "pre" : undefined }}
            >
              {char.original === " " ? "\u00A0" : char.current}
            </span>
          )
        )}
      </p>
    </div>
  );
};

export default ScrambledText;
