import Image from "next/image";
import type { Etapa } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";

export function LibrosSection({ etapas }: { etapas: Etapa[] }) {
  return (
    <article id="libros" className="mb-16">
      <ChapterHeader numeral="I" title="Libros" />
      <div className="space-y-10">
        {etapas.map((etapa) => (
          <div key={etapa.label}>
            <h3 className="badge-text mb-4 !text-gold">
              {etapa.label}{" "}
              <span className="text-text-tertiary">({etapa.desc})</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {etapa.books.map((book) => (
                <Card
                  key={book.title}
                  accent={book.highlight}
                  className="flex gap-4 p-4"
                >
                  {book.cover && (
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={64}
                      height={96}
                      className="shrink-0 rounded-md object-cover"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="m-0 text-[length:var(--text-xs)] text-text-tertiary">
                      {book.year}
                    </p>
                    <h4 className="m-0 mt-1 font-display text-[length:var(--text-sm)] leading-[1.3] text-text-primary">
                      {book.title}
                    </h4>
                    {book.publisher && (
                      <p className="m-0 mt-1 text-[length:var(--text-xs)] text-text-tertiary">
                        {book.publisher}
                      </p>
                    )}
                    {book.desc && (
                      <p className="m-0 mt-1 text-[length:var(--text-xs)] leading-[1.5] text-text-secondary">
                        {book.desc}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
