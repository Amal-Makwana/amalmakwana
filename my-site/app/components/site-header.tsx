"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/Interest", label: "Interest" },
  { href: "/Articles", label: "Articles" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-black/10">
      <div className="container-shell flex items-center justify-between py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Your Name
        </Link>

        <button
          type="button"
          className="rounded-md border border-black/15 px-3 py-2 text-sm md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  isActive ? "font-medium" : "text-black/70 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="container-shell flex flex-col gap-4 border-t border-black/10 pb-6 pt-4 md:hidden"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${isActive ? "font-medium" : "text-black/70"}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
