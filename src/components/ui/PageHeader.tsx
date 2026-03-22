import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
}

export function PageHeader({
  eyebrow,
  title,
  titleEmphasis,
  subtitle,
  children,
  backgroundImage,
  backgroundAlt,
}: PageHeaderProps) {
  return (
    <section className={`pb-12 pt-28${backgroundImage ? " relative overflow-hidden" : ""}`}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt || ""}
            fill
            className="object-cover"
            style={{ opacity: 0.2 }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.10 0.01 270 / 0.55) 0%, oklch(0.10 0.01 270 / 0.95) 100%)",
            }}
          />
        </>
      )}
      <Container className={backgroundImage ? "relative z-10" : ""}>
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
