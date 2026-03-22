"use client";

import type {
  Etapa,
  Paper,
  Discurso,
  Entrevista,
} from "@/data/archivo";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { LibrosSection } from "./LibrosSection";
import { DiscursosSection } from "./DiscursosSection";
import { EntrevistasSection } from "./EntrevistasSection";
import { PapersSection } from "./PapersSection";

const sections = [
  { id: "discursos", num: "I", title: "Discursos" },
  { id: "entrevistas", num: "II", title: "Entrevistas" },
  { id: "libros", num: "III", title: "Libros" },
  { id: "papers", num: "IV", title: "Papers" },
  { id: "premios", num: "V", title: "Premios" },
];

export function ArchivoContent({
  etapas,
  papers,
  discursos,
  entrevistas,
  reconocimientos,
}: {
  etapas: Etapa[];
  papers: Paper[];
  discursos: Discurso[];
  entrevistas: Entrevista[];
  reconocimientos: string[];
}) {
  return (
    <SidebarLayout label="Secciones del archivo" items={sections} variant="navy">
      <DiscursosSection discursos={discursos} />
      <Divider className="mb-12" />

      <EntrevistasSection entrevistas={entrevistas} />
      <Divider className="mb-12" />

      <LibrosSection etapas={etapas} />
      <Divider className="mb-12" />

      <PapersSection papers={papers} />
      <Divider className="mb-12" />

      {/* V — Premios */}
      <article id="premios">
        <ChapterHeader numeral="V" title="Premios y reconocimientos" />
        <ul className="m-0 list-none space-y-2 p-0">
          {reconocimientos.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-3 border-b border-border py-2"
            >
              <span className="mt-0.5 text-gold">&#9670;</span>
              <span className="text-[length:var(--text-sm)] text-text-secondary">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </SidebarLayout>
  );
}
