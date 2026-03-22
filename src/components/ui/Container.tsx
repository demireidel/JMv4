interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}

export function Container({
  children,
  wide = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-[var(--width-content)] px-4 sm:px-6 lg:px-8 ${wide ? "!max-w-[96rem]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
