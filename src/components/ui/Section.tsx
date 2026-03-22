interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: "dark" | "navy" | "cream";
  className?: string;
}

const variantClasses: Record<string, string> = {
  dark: "bg-dark text-text-primary",
  navy: "bg-navy text-text-primary",
  cream: "bg-cream text-dark",
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
      className={`py-[var(--spacing-section)] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
