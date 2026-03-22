import type { Paper } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";

export function PapersSection({ papers }: { papers: Paper[] }) {
  return (
    <article id="papers" className="mb-16">
      <ChapterHeader numeral="IV" title="Papers académicos" />
      <div className="grid gap-4 sm:grid-cols-2">
        {papers.map((p, i) => (
          <Card key={i} className="p-4">
            <span className="badge-text mb-1 block !text-celeste">
              {p.topic}
            </span>
            <h4 className="m-0 mb-1 font-display text-[length:var(--text-sm)] leading-[1.3] text-text-primary">
              {p.title}
            </h4>
            {p.coauthors && (
              <p className="m-0 text-[length:var(--text-xs)] text-text-tertiary">
                Con {p.coauthors}
              </p>
            )}
            {p.venue && (
              <p className="m-0 text-[length:var(--text-xs)] text-text-tertiary">
                {p.venue}
              </p>
            )}
            {p.desc && (
              <p className="m-0 mt-1 text-[length:var(--text-xs)] leading-[1.5] text-text-secondary">
                {p.desc}
              </p>
            )}
          </Card>
        ))}
      </div>
    </article>
  );
}
