import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { leaders, timeline, megaStats, tradeAgreements } from "@/data/mundo";
import { MundoContent } from "@/components/mundo/MundoContent";

export const metadata: Metadata = {
  title: "Internacional",
  description:
    "Argentina en el mundo: acuerdos comerciales, relaciones bilaterales y posicionamiento global.",
};

export default function MundoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-12 overflow-hidden"
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
            Argentina en el mundo
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
            De país paria a{" "}
            <span style={{ color: "var(--gold)" }}>líder global</span>
          </h1>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-2)",
              maxWidth: "44rem",
              lineHeight: 1.7,
            }}
          >
            En dos años, Argentina pasó de estar aislada del mundo a firmar los
            acuerdos comerciales más ambiciosos de su historia, atraer USD 55.000M
            en inversiones y construir alianzas con las principales potencias.
          </p>
        </Container>
      </section>

      <MundoContent
        leaders={leaders}
        timeline={timeline}
        megaStats={megaStats}
        tradeAgreements={tradeAgreements}
      />
    </>
  );
}
