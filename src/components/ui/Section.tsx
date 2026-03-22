interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: "dark" | "navy" | "cream";
  bleedTop?: boolean;
  bleedBottom?: boolean;
  className?: string;
}

const variantClasses: Record<string, string> = {
  dark: "bg-dark text-text-primary",
  navy: "bg-navy text-text-primary",
  cream: "bg-cream text-dark",
};

const variantBg: Record<string, string> = {
  dark: "var(--color-dark)",
  navy: "var(--color-navy)",
  cream: "var(--color-cream)",
};

export function Section({
  children,
  id,
  variant = "dark",
  bleedTop = false,
  bleedBottom = false,
  className = "",
}: SectionProps) {
  const bleedClasses = [
    bleedTop ? "section-bleed-top" : "",
    bleedBottom ? "section-bleed-bottom" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={`py-[var(--spacing-section)] ${variantClasses[variant]} ${bleedClasses} ${className}`}
      style={
        bleedTop || bleedBottom
          ? ({ "--section-bg": variantBg[variant] } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </section>
  );
}
