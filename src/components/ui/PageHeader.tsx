import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  titleEmphasis,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="pb-12 pt-28">
      <Container>
        <p className="page-eyebrow">{eyebrow}</p>
        <h1 className="page-title">
          {title}
          {titleEmphasis && (
            <>
              {" "}
              <span className="italic text-gold">{titleEmphasis}</span>
            </>
          )}
        </h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
        {children}
      </Container>
    </section>
  );
}
