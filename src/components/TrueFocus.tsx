"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
  textClassName?: string;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
  textClassName = "text-[3rem] font-black",
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex!);
    }
  };

  return (
    <div
      className={`relative flex gap-4 justify-center items-center flex-wrap ${className}`}
      ref={containerRef}
      style={{ outline: "none", userSelect: "none" }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`relative cursor-pointer ${textClassName}`}
            style={
              {
                filter: manualMode
                  ? isActive
                    ? `blur(0px)`
                    : `blur(${blurAmount}px)`
                  : isActive
                    ? `blur(0px)`
                    : `blur(${blurAmount}px)`,
                transition: `filter ${animationDuration}s ease`,
                outline: "none",
                userSelect: "none",
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{ zIndex: 9999 }}
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
      >
        {/* Top-left corner */}
        <div
          style={{
            position: "absolute",
            top: -10,
            left: -10,
            width: 16,
            height: 16,
            borderTop: `3px solid ${borderColor}`,
            borderLeft: `3px solid ${borderColor}`,
            borderRadius: "3px 0 0 0",
            filter: `drop-shadow(0 0 6px ${glowColor})`,
          }}
        />
        {/* Top-right corner */}
        <div
          style={{
            position: "absolute",
            top: -10,
            right: -10,
            width: 16,
            height: 16,
            borderTop: `3px solid ${borderColor}`,
            borderRight: `3px solid ${borderColor}`,
            borderRadius: "0 3px 0 0",
            filter: `drop-shadow(0 0 6px ${glowColor})`,
          }}
        />
        {/* Bottom-left corner */}
        <div
          style={{
            position: "absolute",
            bottom: -10,
            left: -10,
            width: 16,
            height: 16,
            borderBottom: `3px solid ${borderColor}`,
            borderLeft: `3px solid ${borderColor}`,
            borderRadius: "0 0 0 3px",
            filter: `drop-shadow(0 0 6px ${glowColor})`,
          }}
        />
        {/* Bottom-right corner */}
        <div
          style={{
            position: "absolute",
            bottom: -10,
            right: -10,
            width: 16,
            height: 16,
            borderBottom: `3px solid ${borderColor}`,
            borderRight: `3px solid ${borderColor}`,
            borderRadius: "0 0 3px 0",
            filter: `drop-shadow(0 0 6px ${glowColor})`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default TrueFocus;
