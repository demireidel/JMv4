"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { target: 57, suffix: "% → 27%", label: "Reducción de pobreza" },
  { target: 2.4, suffix: "% mensual", label: "Inflación", decimals: 1 },
  { target: 14500, suffix: "+", label: "Desregulaciones" },
  { target: 497, suffix: " pts", label: "Riesgo país" },
];

function AnimatedStat({ stat, delay }: { stat: StatItem; delay: number }) {
  const { ref, display, progress } = useAnimatedNumber({
    target: stat.target,
    duration: 1800,
    decimals: stat.decimals,
  });

  // Scale pop during animation: starts at 0.85, springs to 1.0
  const scale = progress < 1 ? 0.85 + 0.15 * progress : 1;

  return (
    <ScrollReveal variant="scale-in" delay={delay}>
      <div className="text-center" ref={ref}>
        <p
          className="stat-number m-0 leading-snug"
          aria-live="polite"
          style={{
            transform: `scale(${scale})`,
            textShadow: "0 0 40px oklch(0.80 0.17 85 / 0.2)",
          }}
        >
          {display}
          <span className="text-[0.7em]">{stat.suffix}</span>
        </p>
        <p className="stat-label m-0 mt-2">{stat.label}</p>
      </div>
    </ScrollReveal>
  );
}

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-navy">
      <div className="mx-auto max-w-[var(--width-content)] px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
