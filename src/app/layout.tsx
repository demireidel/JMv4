import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const fraunces = localFont({
  src: [
    {
      path: "../../public/fonts/fraunces-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/fraunces-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
});

const oswald = localFont({
  src: "../../public/fonts/oswald-latin-wght-normal.woff2",
  variable: "--font-oswald",
  display: "swap",
  weight: "200 700",
});

const inter = localFont({
  src: "../../public/fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Javier Milei — Presidente de la Nación Argentina",
    template: "%s | Javier Milei",
  },
  description:
    "Sitio oficial de Javier Milei, Presidente de la Nación Argentina. Visión, logros, reformas y archivo intelectual.",
  metadataBase: new URL("https://javiermilei.com"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Javier Milei — Presidente",
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "Visión, logros, reformas y archivo intelectual del Presidente Javier Milei.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "Visión, logros, reformas y archivo intelectual del Presidente Javier Milei.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${oswald.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preload" as="video" href="/videos/hero.webm" type="video/webm" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Javier Milei",
              jobTitle: "Presidente de la Nación Argentina",
              nationality: "Argentine",
              affiliation: {
                "@type": "Organization",
                name: "La Libertad Avanza",
              },
              worksFor: {
                "@type": "GovernmentOrganization",
                name: "Presidencia de la Nación Argentina",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Balcarce 50",
                  addressLocality: "Buenos Aires",
                  addressCountry: "AR",
                },
              },
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
