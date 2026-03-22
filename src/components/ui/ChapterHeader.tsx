interface ChapterHeaderProps {
  numeral: string;
  title: string;
  subtitle?: string;
}

export function ChapterHeader({
  numeral,
  title,
  subtitle,
}: ChapterHeaderProps) {
  return (
    <div className="mb-2">
      <div className="mb-2 flex items-baseline gap-4">
        <span className="chapter-numeral">{numeral}</span>
        <h3 className="chapter-title">{title}</h3>
      </div>
      {subtitle && <p className="prose-body mb-8">{subtitle}</p>}
    </div>
  );
}
