import Link from "next/link";

export default function AgenticAutonomousSystemsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.14em] text-sky-700">Article</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Agentic Autonomous Systems: Moving from AI Experiments to Real-World Impact
        </h1>
        <p className="text-slate-600">
          A concise walkthrough of what changes when organizations shift from one-off AI prototypes to autonomous,
          measurable, and governed systems.
        </p>
      </div>

      <section className="space-y-4 text-slate-600">
        <h2 className="text-xl font-semibold text-slate-900">Key ideas</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Design agents around clear business outcomes, not just model capabilities.</li>
          <li>Define operating guardrails for autonomy, escalation, and observability from day one.</li>
          <li>Focus on repeatable workflows where multi-step reasoning creates measurable efficiency.</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href="/articles"
          className="inline-flex min-h-11 items-center rounded-md border border-sky-200 px-4 py-2 text-sm text-slate-700 hover:border-sky-400 hover:text-sky-700"
        >
          Back to Articles
        </Link>
        <a
          href="https://www.linkedin.com/pulse/agentic-autonomous-systems-moving-from-ai-experiments-amal-makwana-anvfe/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600"
        >
          Read full post on LinkedIn
        </a>
      </div>
    </article>
  );
}
