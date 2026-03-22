"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { heroImage } from "@/data/photos";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [step, setStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const scrollProgress = useScrollProgress(sectionRef);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      videoRef.current?.pause();
      setShowFallback(true);
      setReducedMotion(true);
      setStep(99); // show everything instantly
      return;
    }

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (conn?.saveData || conn?.effectiveType === "2g") {
      setShowFallback(true);
    }

    // Choreographed entrance sequence
    const timers = [
      setTimeout(() => setStep(1), 100),   // gold top line
      setTimeout(() => setStep(2), 400),   // eyebrow
      setTimeout(() => setStep(3), 600),   // "Javier"
      setTimeout(() => setStep(4), 800),   // "Milei"
      setTimeout(() => setStep(5), 1200),  // gold divider
      setTimeout(() => setStep(6), 1500),  // subtitle
      setTimeout(() => setStep(7), 1900),  // scroll indicator
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Scroll-driven parallax exit (0..0.5 of scroll range)
  const exitProgress = Math.min(scrollProgress * 2, 1);
  const contentTranslateY = reducedMotion ? 0 : exitProgress * -80;
  const mediaScale = reducedMotion ? 1 : 1 + exitProgress * 0.05;
  const contentOpacity = reducedMotion ? 1 : 1 - exitProgress;

  return (
    <section ref={sectionRef} className="relative h-dvh w-full overflow-hidden">
      {/* Background video */}
      {!showFallback && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImage.src}
          onError={() => setShowFallback(true)}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          style={{
            transform: `scale(${mediaScale})`,
            willChange: "transform",
          }}
        />
      )}

      {/* Fallback static image */}
      {showFallback && (
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${mediaScale})`,
            willChange: "transform",
          }}
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%]"
          />
        </div>
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            color-mix(in oklch, var(--color-overlay-dark), transparent 85%) 0%,
            color-mix(in oklch, var(--color-overlay-dark), transparent 65%) 40%,
            color-mix(in oklch, var(--color-overlay-dark), transparent 30%) 80%,
            color-mix(in oklch, var(--color-overlay-dark), transparent 10%) 100%
          )`,
        }}
      />

      {/* Gold accent line at top — animates scaleX from center */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-gold"
        style={{
          transform: step >= 1 ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: "transform 800ms var(--ease-out-expo)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12"
        style={{
          transform: `translateY(${contentTranslateY}px)`,
          opacity: contentOpacity,
          willChange: scrollProgress > 0 ? "transform, opacity" : undefined,
        }}
      >
        {/* Eyebrow */}
        <p
          className="mb-4 text-center font-accent text-[length:var(--text-sm)] uppercase tracking-[0.25em] text-text-secondary"
          style={{
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 600ms var(--ease-out-expo), transform 600ms var(--ease-out-expo)",
          }}
        >
          Presidente de la Nacion Argentina
        </p>

        <h1 className="text-center leading-none">
          {/* "Javier" — clip-path reveal from bottom */}
          <span
            className="block font-accent text-[length:var(--text-hero)] font-normal uppercase tracking-[0.08em] text-white"
            style={{
              clipPath: step >= 3 ? "inset(0)" : "inset(100% 0 0 0)",
              transition: "clip-path 800ms var(--ease-out-expo)",
            }}
          >
            Javier
          </span>
          {/* "Milei" — clip-path reveal, then shimmer starts */}
          <span
            className={`block font-accent text-[length:var(--text-hero)] font-normal uppercase tracking-[0.08em] ${step >= 4 ? "gold-shimmer" : ""}`}
            style={{
              clipPath: step >= 4 ? "inset(0)" : "inset(100% 0 0 0)",
              transition: "clip-path 800ms var(--ease-out-expo)",
              // Before shimmer class is applied, show gold color
              ...(!step || step < 4
                ? { color: "var(--color-gold)" }
                : {}),
            }}
          >
            Milei
          </span>
        </h1>

        {/* Gold divider — expands from center */}
        <div
          className="mx-auto mb-4 mt-6 h-0.5 w-12 bg-gold"
          style={{
            transform: step >= 5 ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 600ms var(--ease-out-expo)",
          }}
        />

        {/* Subtitle */}
        <p
          className="text-center font-display text-[length:var(--text-lg)] italic text-text-secondary"
          style={{
            opacity: step >= 6 ? 1 : 0,
            transform: step >= 6 ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 600ms var(--ease-out-expo), transform 600ms var(--ease-out-expo)",
          }}
        >
          Argentina sera el pais mas libre del mundo
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
          style={{
            opacity: step >= 7 ? 1 : 0,
            transition: "opacity 400ms var(--ease-standard)",
          }}
        >
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/25 pt-1.5">
            <div className="h-2 w-1 animate-[scroll-dot_2s_ease-in-out_infinite] rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
