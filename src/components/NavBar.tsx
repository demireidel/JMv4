"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";

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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open + escape key
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
        className="fixed top-0 left-0 right-0 z-50 transition-all"
        style={{
          height: "var(--nav-height)",
          background: scrolled
            ? "var(--nav-bg)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px) saturate(1.2)" : "none",
          WebkitBackdropFilter: scrolled
            ? "blur(12px) saturate(1.2)"
            : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--ease-standard)",
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8"
          style={{ maxWidth: "var(--max-width)" }}
          aria-label="Navegación principal"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-0 no-underline"
            aria-label="Inicio — Javier Milei"
          >
            <span
              className="font-accent text-xl tracking-wider text-white"
              style={{
                fontFamily: "var(--font-accent)",
                letterSpacing: "0.1em",
              }}
            >
              JAVIER{" "}
            </span>
            <span
              className="font-accent text-xl tracking-wider"
              style={{
                fontFamily: "var(--font-accent)",
                letterSpacing: "0.1em",
                color: "var(--gold)",
              }}
            >
              MILEI
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-3 py-2 text-sm no-underline transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    color: isActive(link.href)
                      ? "var(--gold)"
                      : "var(--text-2)",
                    transitionDuration: "var(--duration-fast)",
                  }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5"
                      style={{ background: "var(--gold)" }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 gap-1.5 bg-transparent border-none cursor-pointer"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all"
              style={{
                transitionDuration: "var(--duration-fast)",
                transform: menuOpen
                  ? "rotate(45deg) translateY(4px)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all"
              style={{
                transitionDuration: "var(--duration-fast)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all"
              style={{
                transitionDuration: "var(--duration-fast)",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-4px)"
                  : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center transition-all"
        style={{
          background: "var(--nav-bg-mobile)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--ease-standard)",
        }}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menú móvil">
          <ul className="flex flex-col items-center gap-2 list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen
                    ? "translateY(0)"
                    : "translateY(1rem)",
                  transition: `opacity var(--duration-normal) var(--ease-decelerate) ${i * 50}ms, transform var(--duration-normal) var(--ease-decelerate) ${i * 50}ms`,
                }}
              >
                <Link
                  href={link.href}
                  className="block px-6 py-3 text-center no-underline transition-colors"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-2xl)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: isActive(link.href)
                      ? "var(--gold)"
                      : "var(--text-1)",
                    transitionDuration: "var(--duration-fast)",
                  }}
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
