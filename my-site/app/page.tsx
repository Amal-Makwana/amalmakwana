const selectedWork = [
  {
    title: "Project One",
    description: "A short description of a featured project goes here."
  },
  {
    title: "Project Two",
    description: "A short description of another project goes here."
  },
  {
    title: "Project Three",
    description: "A short description of one more project goes here."
  }
];

const companies = ["Company One", "Company Two", "Company Three", "Company Four"];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="max-w-2xl space-y-5">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Hello, I&apos;m [Your Name].
        </h1>
        <p className="text-lg text-black/70">
          This is a one-sentence placeholder for your personal introduction.
        </p>
      </section>

      <section className="space-y-6" aria-labelledby="selected-work-heading">
        <h2 id="selected-work-heading" className="text-2xl font-semibold tracking-tight">
          Selected work
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {selectedWork.map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 p-6">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-black/70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6" aria-labelledby="worked-with-heading">
        <h2 id="worked-with-heading" className="text-2xl font-semibold tracking-tight">
          Worked with
        </h2>
        <ul className="grid gap-3 text-black/70 sm:grid-cols-2 md:grid-cols-4">
          {companies.map((company) => (
            <li key={company} className="text-sm">
              {company}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
