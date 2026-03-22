"use client";

import { Container } from "@/components/ui/Container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70dvh] items-center justify-center">
      <Container className="text-center">
        <p className="badge-text mb-4">Error</p>
        <h1 className="page-title mb-6">Algo salio mal</h1>
        <p className="prose-body mx-auto mb-10 max-w-md">
          Ocurrio un error inesperado. Intenta de nuevo.
        </p>
        <button
          onClick={reset}
          className="inline-block cursor-pointer rounded-xl bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-wider text-dark transition-opacity hover:opacity-90"
        >
          Reintentar
        </button>
      </Container>
    </section>
  );
}
