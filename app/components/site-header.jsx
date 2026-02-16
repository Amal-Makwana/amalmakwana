import Link from "next/link";

const navItems = [
  { href: "#hero", label: "Hero" },
  { href: "#interests", label: "Interests" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-cyan-200/15 bg-slate-950/45 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4 md:py-6">
        <Link
          href="#hero"
          className="inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.18em] text-cyan-100/90 transition-colors hover:text-white sm:text-base"
        >
          HOME
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em] text-cyan-100/75"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
