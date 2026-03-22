"use client";

import { homeStats } from "@/data/home";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-navy">
      <div className="mx-auto max-w-[var(--width-content)] px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {homeStats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="scale-in" delay={i * 60}>
              <AnimatedNumber
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals}
                variant="strip"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
