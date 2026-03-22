"use client";

import { useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface CardProps {
  children: React.ReactNode;
  accent?: boolean;
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  accent = false,
  hover = false,
  className = "",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { relX, relY, x, y, hovering } = useMousePosition(cardRef);

  if (!hover) {
    return (
      <div
        className={`${accent ? "surface-card-accent" : "surface-card"} ${className}`}
      >
        {children}
      </div>
    );
  }

  // 3D tilt: max 4 degrees rotation
  const rotateX = hovering ? relY * -4 : 0;
  const rotateY = hovering ? relX * 4 : 0;

  return (
    <div className="relative" ref={cardRef}>
      {/* Glowing border pseudo-element */}
      {hovering && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[var(--radius-xl)]"
          style={{
            background: `radial-gradient(circle 200px at ${x}px ${y}px, oklch(0.80 0.17 85 / 0.15), transparent 70%)`,
          }}
        />
      )}
      <div
        className={`${accent ? "surface-card-accent" : "surface-card"} card-hover relative ${className}`}
        style={{
          transform: hovering
            ? `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            : "perspective(800px) rotateX(0) rotateY(0)",
          transition: hovering
            ? "transform 100ms linear"
            : "transform 400ms var(--ease-spring)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
