"use client";

import { useRef, useEffect, useState, type ElementType, type ReactNode } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "clip-reveal"
  | "slide-left"
  | "slide-right"
  | "blur-in"
  | "none";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: ElementType;
}

const variantMap: Record<AnimationVariant, { animation: string; initial: string }> = {
  "fade-up": {
    animation: "anim-fade-up",
    initial: "opacity:0;transform:translateY(24px)",
  },
  "fade-in": {
    animation: "anim-fade-in",
    initial: "opacity:0",
  },
  "scale-in": {
    animation: "anim-scale-in",
    initial: "opacity:0;transform:scale(0.92)",
  },
  "clip-reveal": {
    animation: "anim-clip-reveal-up",
    initial: "clip-path:inset(100% 0 0 0)",
  },
  "slide-left": {
    animation: "anim-slide-left",
    initial: "opacity:0;transform:translateX(-40px)",
  },
  "slide-right": {
    animation: "anim-slide-right",
    initial: "opacity:0;transform:translateX(40px)",
  },
  "blur-in": {
    animation: "anim-blur-in",
    initial: "opacity:0;filter:blur(8px)",
  },
  none: {
    animation: "",
    initial: "",
  },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  once = true,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const config = variantMap[variant];

  // Build style: initial hidden state or animation
  const style: React.CSSProperties = {};

  if (variant === "none") {
    // no-op wrapper, just provides intersection trigger
  } else if (!visible) {
    // Parse initial styles
    const parts = config.initial.split(";").filter(Boolean);
    for (const part of parts) {
      const [prop, val] = part.split(":").map((s) => s.trim());
      if (prop === "opacity") style.opacity = 0;
      if (prop === "transform") style.transform = val;
      if (prop === "clip-path") style.clipPath = val;
      if (prop === "filter") style.filter = val;
    }
  } else {
    // Animate in
    style.animation = `${config.animation} ${duration}ms var(--ease-out-expo) ${delay}ms both`;
  }

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
