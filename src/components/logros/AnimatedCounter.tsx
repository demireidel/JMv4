"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  label: string;
  sub: string;
  decimals?: number;
}

export function AnimatedCounter({
  target,
  suffix,
  label,
  sub,
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, display } = useAnimatedNumber({
    target,
    duration: 1800,
    decimals,
  });

  return (
    <div ref={ref} className="text-center">
      <p className="stat-number m-0 text-[length:var(--text-3xl)] leading-none">
        {display}
        <span className="text-[0.6em]">{suffix}</span>
      </p>
      <p className="m-0 mt-2 font-accent text-[length:var(--text-sm)] uppercase tracking-wide text-text-primary">
        {label}
      </p>
      <p className="m-0 mx-auto mt-1 max-w-64 text-[length:var(--text-xs)] text-text-tertiary">
        {sub}
      </p>
    </div>
  );
}
