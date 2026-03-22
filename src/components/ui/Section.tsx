interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: "dark" | "navy" | "cream";
  className?: string;
}

const variantStyles: Record<string, React.CSSProperties> = {
  dark: { background: "var(--dark)", color: "var(--text-1)" },
  navy: { background: "var(--navy)", color: "var(--text-1)" },
  cream: { background: "var(--cream)", color: "var(--dark)" },
};

export function Section({
  children,
  id,
  variant = "dark",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{ paddingBlock: "var(--section-py)", ...variantStyles[variant] }}
    >
      {children}
    </section>
  );
}
