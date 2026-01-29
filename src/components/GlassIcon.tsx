"use client";

import React from "react";

interface GlassIconProps {
  icon: React.ReactElement;
  size?: string;
}

const GlassIcon: React.FC<GlassIconProps> = ({ icon, size = "2.8em" }) => {

  return (
    <div
      className="relative shrink-0 group"
      style={{ width: size, height: size }}
    >
      {/* Brand gradient shadow layer */}
      <span
        className="absolute inset-0 rounded-xl opacity-60 blur-[6px] transition-all duration-300 group-hover:opacity-80 group-hover:blur-[8px]"
        style={{ background: "linear-gradient(135deg, #6106DF, #4A05A8)" }}
      />
      {/* Glass surface */}
      <span
        className="absolute inset-0 rounded-xl bg-white/[0.12] backdrop-blur-md flex transition-all duration-300 group-hover:bg-white/[0.18] group-hover:scale-105"
        style={{
          boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.2) inset, 0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        <span className="m-auto flex items-center justify-center text-white">
          {icon}
        </span>
      </span>
    </div>
  );
};

export default GlassIcon;
