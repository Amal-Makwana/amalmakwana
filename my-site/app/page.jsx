export default function HomePage() {
  return (
    <div className="editorial">
      <section className="section-grid">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">AI Native Portfolio</p>
          <h1>
            Hello <span className="typewriter-line" aria-label="I'm Amal Makwana">I&apos;m Amal Makwana</span>
          </h1>
          <p>
            I design and build thoughtful digital experiences. This space is where I share current
            work, writing, and ideas in progress.
          </p>
        </div>

        <aside className="signal-card space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-violet-200/80">Live System Signal</p>
          <p>
            Building calm, high-clarity interfaces with modern engineering foundations and a
            future-ready AI workflow.
          </p>
        </aside>
      </section>

      <section className="space-y-4">
        <h2>Current Focus</h2>
        <p>
          Exploring product design systems, writing about engineering decisions, and building
          simple tools with a strong editorial sensibility.
        </p>
      </section>
    </div>
  );
}
