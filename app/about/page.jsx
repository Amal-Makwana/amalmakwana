import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact me</h1>
      <p className="text-base text-slate-200 sm:text-lg">The contact section now lives on the homepage for a streamlined mobile scroll experience.</p>
      <Link href="/#contact" className="nav-link inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em] text-cyan-100/75">
        Go to contact section
      </Link>
    </section>
  );
}
