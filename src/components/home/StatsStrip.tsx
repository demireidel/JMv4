"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { target: 57, suffix: "% → 26.9%", label: "Reduccion de pobreza" },
  { target: 2.4, suffix: "% mensual", label: "Inflacion", decimals: 1 },
  { target: 14500, suffix: "+", label: "Desregulaciones" },
  { target: 652, suffix: " pts", label: "Riesgo pais" },
];

function AnimatedStat({ stat }: { stat: StatItem }) {
  const { ref, display } = useAnimatedNumber({
    target: stat.target,
    duration: 1800,
    decimals: stat.decimals,
  });

  return (
    <div className="text-center" ref={ref}>
      <p className="stat-number m-0 leading-snug" aria-live="polite">
        {display}
        <span className="text-[0.7em]">{stat.suffix}</span>
      </p>
      <p className="stat-label m-0 mt-2">{stat.label}</p>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-navy">
      <div className="mx-auto max-w-[var(--width-content)] px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
