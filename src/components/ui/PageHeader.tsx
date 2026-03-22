"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useScrollProgress } from "@/hooks/useScrollProgress";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
}

export function PageHeader({
  eyebrow,
  title,
  titleEmphasis,
  subtitle,
  children,
  backgroundImage,
  backgroundAlt,
}: PageHeaderProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    // Slight delay to trigger entrance animations
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Parallax for background image
  const parallaxY = reducedMotion ? 0 : scrollProgress * -30;

  // Split title into words for staggered reveal
  const titleWords = title.split(" ");
  const totalWords = titleWords.length + (titleEmphasis ? titleEmphasis.split(" ").length : 0);
  const baseDelay = 200; // ms delay for first word after mount
  const stagger = 60; // ms between words

  return (
    <section
      ref={sectionRef}
      className={`pb-12 pt-36 md:pt-40${backgroundImage ? " relative overflow-hidden" : ""}`}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt || ""}
            fill
            sizes="100vw"
            className="object-cover"
            style={{
              opacity: 0.2,
              transform: `translateY(${parallaxY}px) scale(1.05)`,
              willChange: scrollProgress > 0 ? "transform" : undefined,
            }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.10 0.01 270 / 0.55) 0%, oklch(0.10 0.01 270 / 0.95) 100%)",
            }}
          />
        </>
      )}
      <Container className={backgroundImage ? "relative z-10" : ""}>
      {/* Force light-on-dark text for pages with background images */}
      <div style={backgroundImage ? { "--color-text-primary": "oklch(1 0 0 / 0.92)", "--color-text-secondary": "oklch(1 0 0 / 0.56)", "--color-text-tertiary": "oklch(1 0 0 / 0.40)", "--color-gold": "oklch(0.80 0.17 85)" } as React.CSSProperties : undefined}>
        {/* Eyebrow — slide in from right */}
        <p
          className="page-eyebrow"
          style={
            reducedMotion
              ? {}
              : {
                  animation: mounted
                    ? "anim-slide-right 600ms var(--ease-out-expo) 100ms both"
                    : undefined,
                  opacity: mounted ? undefined : 0,
                }
          }
        >
          {eyebrow}
        </p>

        {/* Title — word-by-word reveal */}
        <h1 className="page-title">
          {titleWords.map((word, i) => (
            <span
              key={i}
              className="inline-block"
              style={
                reducedMotion
                  ? {}
                  : {
                      animation: mounted
                        ? `anim-fade-up 500ms var(--ease-out-expo) ${baseDelay + i * stagger}ms both`
                        : undefined,
                      opacity: mounted ? undefined : 0,
                    }
              }
            >
              {word}
              {i < titleWords.length - 1 || titleEmphasis ? "\u00A0" : ""}
            </span>
          ))}
          {titleEmphasis && (
            <>
              {titleEmphasis.split(" ").map((word, i) => (
                <span
                  key={`em-${i}`}
                  className="inline-block italic text-gold"
                  style={
                    reducedMotion
                      ? {}
                      : {
                          animation: mounted
                            ? `anim-fade-up 500ms var(--ease-out-expo) ${baseDelay + (titleWords.length + i) * stagger}ms both`
                            : undefined,
                          opacity: mounted ? undefined : 0,
                        }
                  }
                >
                  {word}
                  {i < titleEmphasis.split(" ").length - 1 ? "\u00A0" : ""}
                </span>
              ))}
            </>
          )}
        </h1>

        {/* Subtitle — fade in after title completes */}
        {subtitle && (
          <p
            className="page-subtitle"
            style={
              reducedMotion
                ? {}
                : {
                    animation: mounted
                      ? `anim-fade-up 600ms var(--ease-out-expo) ${baseDelay + totalWords * stagger + 200}ms both`
                      : undefined,
                    opacity: mounted ? undefined : 0,
                  }
            }
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
      </Container>
    </section>
  );
}
