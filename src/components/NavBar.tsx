"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { Wordmark } from "@/components/ui/Wordmark";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
          hamburgerRef.current?.focus();
        }
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[var(--height-nav)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] ${
          scrolled
            ? "border-b border-border bg-nav-bg backdrop-blur-[12px] backdrop-saturate-[1.2]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-full max-w-[var(--width-content)] items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Navegacion principal"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center no-underline"
            aria-label="Inicio — Javier Milei"
          >
            <Wordmark className="text-xl tracking-[0.1em]" />
          </Link>

          {/* Desktop links */}
          <ul className="m-0 hidden list-none items-center gap-1 p-0 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 font-body text-sm font-medium no-underline transition-colors duration-[var(--duration-fast)] ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  {...(isActive(link.href) ? { "aria-current": "page" as const } : {})}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-3 bottom-0 h-0.5 bg-gold" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMenu}
            className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-1.5 border-none bg-transparent md:hidden"
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-[var(--duration-fast)] ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-[var(--duration-fast)] ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-[var(--duration-fast)] ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-nav-bg-mobile backdrop-blur-[24px] transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menu movil">
          <ul className="m-0 flex list-none flex-col items-center gap-2 p-0">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-[opacity,transform] duration-[var(--duration-normal)] ease-[var(--ease-decelerate)] ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={`block px-6 py-3 text-center font-accent text-[length:var(--text-2xl)] uppercase tracking-wider no-underline transition-colors duration-[var(--duration-fast)] ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-text-primary hover:text-gold"
                  }`}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
