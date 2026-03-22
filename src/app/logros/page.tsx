import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { pobrezaData, logros, logrosSectionHeader } from "@/data/logros";
import { PobrezaHero } from "@/components/logros/PobrezaHero";
import { LogrosGrid } from "@/components/logros/LogrosGrid";

export const metadata: Metadata = {
  title: "Logros",
  description:
    "Los logros concretos del gobierno del Presidente Javier Milei: reducción de pobreza, desinflación, equilibrio fiscal y más.",
};

export default function LogrosPage() {
  return (
    <>
      {/* Section header */}
      <section
        className="pt-28 pb-12"
        style={{ background: "var(--dark)" }}
      >
        <Container>
          <p
            className="uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-sm)",
              color: "var(--gold)",
              letterSpacing: "0.2em",
            }}
          >
            {logrosSectionHeader.sectionTitle}
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-3xl)",
              color: "var(--text-1)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Resultados Concretos
          </h1>
          <p
            className="m-0"
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-2)",
              maxWidth: "52rem",
              lineHeight: 1.7,
            }}
          >
            {logrosSectionHeader.sectionIntro}
          </p>
        </Container>
      </section>

      {/* Pobreza hero — the biggest achievement */}
      <PobrezaHero data={pobrezaData} />

      {/* Remaining achievements organized by theme */}
      <LogrosGrid logros={logros} />
    </>
  );
}
