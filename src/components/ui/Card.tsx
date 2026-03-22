interface CardProps {
  children: React.ReactNode;
  accent?: boolean;
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  accent = false,
  hover = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`${accent ? "surface-card-accent" : "surface-card"} ${
        hover ? "card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
