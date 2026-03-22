import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArchivoContent } from "@/components/archivo/ArchivoContent";
import {
  archivoHeader,
  etapas,
  papers,
  discursos,
  entrevistas,
  influencias,
  reconocimientos,
} from "@/data/archivo";

export const metadata: Metadata = {
  title: "Archivo Intelectual",
  description:
    "Archivo intelectual: libros, artículos académicos, discursos y entrevistas del Presidente Milei.",
};

export default function ArchivoPage() {
  return (
    <>
      <section className="pt-28 pb-12" style={{ background: "var(--dark)" }}>
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
            {archivoHeader.sectionTitle}
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
            Obra Intelectual
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
            {archivoHeader.sectionIntro}
          </p>
        </Container>
      </section>

      <ArchivoContent
        etapas={etapas}
        papers={papers}
        discursos={discursos}
        entrevistas={entrevistas}
        influencias={influencias}
        reconocimientos={reconocimientos}
      />
    </>
  );
}
