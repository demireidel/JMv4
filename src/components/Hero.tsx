"use client";

import Image from "next/image";
import { heroImage } from "@/data/photos";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
      {/* Background image */}
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 20%" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom,
              color-mix(in oklch, var(--overlay-dark), transparent 85%) 0%,
              color-mix(in oklch, var(--overlay-dark), transparent 65%) 40%,
              color-mix(in oklch, var(--overlay-dark), transparent 30%) 80%,
              color-mix(in oklch, var(--overlay-dark), transparent 10%) 100%
            )
          `,
        }}
      />

      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "var(--gold)" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 px-4">
        <p
          className="text-center mb-4 tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-sm)",
            color: "var(--text-2)",
            letterSpacing: "0.25em",
          }}
        >
          Presidente de la Nación Argentina
        </p>

        <h1 className="text-center leading-none">
          <span
            className="block"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-hero)",
              fontWeight: 400,
              color: "white",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Javier
          </span>
          <span
            className="block gold-shimmer"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-hero)",
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Milei
          </span>
        </h1>

        {/* Gold divider */}
        <div
          className="mx-auto mt-6 mb-4"
          style={{
            width: "3rem",
            height: "2px",
            background: "var(--gold)",
          }}
        />

        <p
          className="text-center italic"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-lg)",
            color: "var(--text-2)",
          }}
        >
          Argentina será el país más libre del mundo
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <div
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: "oklch(1 0 0 / 0.25)" }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{
                background: "var(--gold)",
                animation: "scrollDot 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
