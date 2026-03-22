"use client";

import type { Logro } from "@/data/logros";
import { BeforeAfterCard } from "@/components/logros/BeforeAfterCard";
import { Container } from "@/components/ui/Container";

export function LogrosGrid({ logros }: { logros: Logro[] }) {
  return (
    <section style={{ background: "var(--dark)", paddingBlock: "var(--section-py)" }}>
      <Container>
        <p
          className="text-center mb-3 uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-sm)",
            color: "var(--gold)",
            letterSpacing: "0.2em",
          }}
        >
          {logros.length} batallas más
        </p>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            color: "var(--text-1)",
          }}
        >
          El antes y el después
        </h2>

        {/* Bento-style grid: first card large, rest in 2-col */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* First card spans full width on desktop */}
          {logros.length > 0 && (
            <div className="md:col-span-2">
              <BeforeAfterCard logro={logros[0]} />
            </div>
          )}

          {/* Remaining cards in 2-col grid */}
          {logros.slice(1).map((logro) => (
            <BeforeAfterCard key={logro.num} logro={logro} />
          ))}
        </div>
      </Container>
    </section>
  );
}
