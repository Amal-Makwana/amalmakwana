"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/work", label: "Interests" },
  { href: "/about", label: "Contact me" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-black/10">
      <div className="container-shell flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-base font-medium tracking-tight transition-opacity hover:opacity-70"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-black/15 px-3 py-2 text-sm md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link text-sm text-black/80">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="container-shell flex flex-col gap-4 border-t border-black/10 pb-6 pt-4 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link w-fit text-sm text-black/80"
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
