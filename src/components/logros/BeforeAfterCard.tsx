"use client";

import { useState } from "react";
import type { Logro } from "@/data/logros";

export function BeforeAfterCard({ logro }: { logro: Logro }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="rounded-xl overflow-hidden transition-all"
      style={{
        background: "var(--surface-1)",
        border: "1px solid var(--border)",
        transitionDuration: "var(--duration-fast)",
      }}
    >
      {/* Header with badge */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-xs)",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {logro.badge}
        </span>
      </div>

      {/* Title */}
      <div className="px-5 pt-4 pb-3">
        <h3
          className="m-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-lg)",
            color: "var(--text-1)",
            lineHeight: 1.3,
          }}
        >
          {logro.title}
        </h3>
      </div>

      {/* Before / After comparison */}
      <div className="grid grid-cols-2 gap-px mx-5 rounded-lg overflow-hidden mb-4">
        {/* Before */}
        <div
          className="p-4"
          style={{ background: "oklch(0.30 0.05 25 / 0.3)" }}
        >
          <span
            className="block mb-1"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-xs)",
              color: "var(--danger)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Antes
          </span>
          <span
            className="block"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-xl)",
              color: "var(--danger)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {logro.before.val}
          </span>
          <span
            className="block mt-1"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--text-2)",
              lineHeight: 1.4,
            }}
          >
            {logro.before.label}
          </span>
        </div>

        {/* After */}
        <div
          className="p-4"
          style={{ background: "oklch(0.30 0.05 145 / 0.3)" }}
        >
          <span
            className="block mb-1"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-xs)",
              color: "var(--success)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Ahora
          </span>
          <span
            className="block"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-xl)",
              color: "var(--success)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {logro.after.val}
          </span>
          <span
            className="block mt-1"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--text-2)",
              lineHeight: 1.4,
            }}
          >
            {logro.after.label}
          </span>
        </div>
      </div>

      {/* Callout */}
      <div className="px-5 pb-4">
        <p
          className="m-0 italic"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-sm)",
            color: "var(--text-2)",
            lineHeight: 1.5,
            borderLeft: "2px solid var(--gold)",
            paddingLeft: "0.75rem",
          }}
        >
          {logro.callout}
        </p>
      </div>

      {/* Expandable details */}
      {logro.paragraphs.length > 0 && (
        <>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-full px-5 py-3 flex items-center justify-between bg-transparent border-none cursor-pointer"
            style={{
              borderTop: "1px solid var(--border)",
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-xs)",
              color: "var(--text-2)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
            aria-expanded={expanded}
            aria-controls={`logro-detail-${logro.num}`}
          >
            {expanded ? "Cerrar detalle" : "Leer más"}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform"
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transitionDuration: "var(--duration-fast)",
              }}
            >
              <path
                d="M3 5l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            id={`logro-detail-${logro.num}`}
            className="overflow-hidden transition-all"
            style={{
              maxHeight: expanded ? "200rem" : "0",
              transitionDuration: "var(--duration-slow)",
              transitionTimingFunction: "var(--ease-standard)",
            }}
          >
            <div className="px-5 pb-5 space-y-3">
              {logro.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="m-0"
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--text-2)",
                    lineHeight: 1.7,
                  }}
                >
                  {p}
                </p>
              ))}

              {/* Before/After images */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logro.imgBefore}
                  alt={logro.altBefore}
                  className="rounded-md w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  loading="lazy"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logro.imgAfter}
                  alt={logro.altAfter}
                  className="rounded-md w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
