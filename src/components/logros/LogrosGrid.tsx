"use client";

import type { Logro } from "@/data/logros";
import { BeforeAfterCard } from "@/components/logros/BeforeAfterCard";
import { Container } from "@/components/ui/Container";

interface LogroBlock {
  title: string;
  subtitle: string;
  nums: string[]; // logro.num values to include
}

const blocks: LogroBlock[] = [
  {
    title: "ESTABILIZACIÓN MACROECONÓMICA",
    subtitle: "Se evitó la hiperinflación, se pulverizó la inflación, se eliminó el déficit y se levantó el cepo",
    nums: ["02", "04", "05", "10"],
  },
  {
    title: "CRECIMIENTO Y PRODUCCIÓN",
    subtitle: "La economía creció, las exportaciones batieron récords, el campo y la minería explotaron",
    nums: ["09", "11", "18", "15"],
  },
  {
    title: "ORDEN Y SEGURIDAD",
    subtitle: "Se terminaron los piquetes, bajaron los homicidios y se liberó la economía",
    nums: ["03", "07", "08"],
  },
  {
    title: "CREDIBILIDAD Y CONFIANZA",
    subtitle: "Argentina volvió al mapa financiero: riesgo país, blanqueo, inversiones y mercados",
    nums: ["06", "17", "19"],
  },
  {
    title: "BOLSILLO Y CALIDAD DE VIDA",
    subtitle: "Salarios reales, crédito hipotecario, menos impuestos, más vuelos y más consumo",
    nums: ["13", "12", "16", "14"],
  },
];

export function LogrosGrid({ logros }: { logros: Logro[] }) {
  return (
    <section style={{ background: "var(--dark)", paddingBlock: "var(--section-py)" }}>
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-sm)",
              color: "var(--gold)",
              letterSpacing: "0.2em",
            }}
          >
            {logros.length} logros más
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              color: "var(--text-1)",
            }}
          >
            El antes y el después
          </h2>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-2)",
              maxWidth: "44rem",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Cada transformación documentada con datos verificados. Hacé click en «Leer más» para ver el detalle completo.
          </p>
        </div>

        {/* Themed blocks */}
        <div className="space-y-16">
          {blocks.map((block) => {
            const blockLogros = block.nums
              .map((num) => logros.find((l) => l.num === num))
              .filter(Boolean) as Logro[];

            if (blockLogros.length === 0) return null;

            return (
              <div key={block.title}>
                {/* Block header */}
                <div
                  className="mb-8 pb-4"
                  style={{ borderBottom: "1px solid var(--gold-dim, oklch(0.55 0.12 75 / 0.3))" }}
                >
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "var(--text-base)",
                      color: "var(--gold)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      fontWeight: 600,
                    }}
                  >
                    {block.title}
                  </h3>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-2)",
                      lineHeight: 1.5,
                    }}
                  >
                    {block.subtitle}
                  </p>
                </div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 gap-5">
                  {blockLogros.map((logro) => (
                    <BeforeAfterCard key={logro.num} logro={logro} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
