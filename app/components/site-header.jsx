"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/interests", label: "Interests" },
  { href: "/articles", label: "Articles" },
  { href: "/contactme", label: "Contact Me" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-sky-100 bg-white/90 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4 md:py-6">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.18em] text-slate-800 transition-colors hover:text-sky-600 sm:text-base"
          onClick={() => setMenuOpen(false)}
        >
          HOME
        </Link>

        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-md border border-sky-200 px-4 py-2 text-sm text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em] text-slate-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="container-shell flex flex-col gap-2 border-t border-sky-100 pb-5 pt-3 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link inline-flex min-h-11 w-fit items-center py-1 text-sm uppercase tracking-[0.14em] text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
