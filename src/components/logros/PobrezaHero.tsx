"use client";

import type { PobrezaData } from "@/data/logros";
import { AnimatedCounter } from "@/components/logros/AnimatedCounter";
import { Container } from "@/components/ui/Container";

export function PobrezaHero({ data }: { data: PobrezaData }) {
  return (
    <section style={{ background: "var(--navy)", paddingBlock: "var(--section-py)" }}>
      <Container>
        {/* Badge */}
        <p
          className="mb-2"
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-xs)",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          {data.badge}
        </p>

        {/* Kicker */}
        <p
          className="mb-8"
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-2)",
            maxWidth: "44rem",
            lineHeight: 1.6,
          }}
        >
          {data.kicker}
        </p>

        {/* Headline */}
        <h2
          className="mb-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-3xl)",
            color: "var(--text-1)",
          }}
        >
          {data.headline}
          <span style={{ color: "var(--gold)" }}>{data.headlineEm}</span>
          {" "}de argentinos salieron de la pobreza
        </h2>

        {/* Animated counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {data.counters.map((c) => (
            <AnimatedCounter
              key={c.label}
              target={c.target}
              suffix={c.suffix}
              label={c.label}
              sub={c.sub}
              decimals={c.decimals}
            />
          ))}
        </div>

        {/* Before → After flow */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* Before */}
          <div
            className="rounded-xl p-6"
            style={{
              background: "var(--tint-before)",
              border: "1px solid var(--border-before)",
            }}
          >
            <span
              className="block mb-2"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                color: "var(--danger)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {data.flowBefore.tag}
            </span>
            <span
              className="block mb-3"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-3xl)",
                color: "var(--danger)",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {data.flowBefore.big}
            </span>
            <p
              className="m-0"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--text-2)",
                lineHeight: 1.6,
              }}
            >
              {data.flowBefore.desc}
            </p>
          </div>

          {/* After */}
          <div
            className="rounded-xl p-6"
            style={{
              background: "var(--tint-after)",
              border: "1px solid var(--border-after)",
            }}
          >
            <span
              className="block mb-2"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                color: "var(--success)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {data.flowAfter.tag}
            </span>
            <span
              className="block mb-3"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-3xl)",
                color: "var(--success)",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {data.flowAfter.big}
            </span>
            <p
              className="m-0"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--text-2)",
                lineHeight: 1.6,
              }}
            >
              {data.flowAfter.desc}
            </p>
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {data.pills.map((pill) => (
            <div
              key={pill.lbl}
              className="px-4 py-2 rounded-full"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-sm)",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                {pill.val}
              </span>{" "}
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--text-2)",
                }}
              >
                {pill.lbl}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative */}
        {data.narrative.length > 0 && (
          <div className="mb-10" style={{ maxWidth: "52rem" }}>
            {data.narrative.map((p, i) => (
              <p
                key={i}
                className={i < data.narrative.length - 1 ? "mb-5" : "m-0"}
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--text-2)",
                  lineHeight: 1.8,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Quote */}
        <blockquote
          className="m-0"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "var(--text-lg)",
            color: "var(--text-2)",
            borderLeft: "3px solid var(--gold)",
            paddingLeft: "1.25rem",
            maxWidth: "44rem",
          }}
        >
          {data.quote}
          <footer
            className="mt-2 not-italic"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--text-3)",
              fontFamily: "var(--font-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {data.quoteAttr}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
