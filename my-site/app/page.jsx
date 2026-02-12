"use client";

import { Reveal, StaggerList } from "@/app/components/reveal";

const focusAreas = [
  {
    title: "Design Systems",
    description: "Building adaptable patterns that stay consistent while scaling across products.",
  },
  {
    title: "Engineering Notes",
    description: "Writing concise breakdowns of tradeoffs, architecture choices, and lessons learned.",
  },
  {
    title: "Editorial Prototypes",
    description: "Experimenting with simple, content-first interfaces that feel polished and calm.",
  },
];

export default function HomePage() {
  return (
    <div className="editorial">
      <Reveal as="section" className="space-y-6">
        <h1>Hello, I&apos;m Amal Makwana.</h1>
        <p>
          I design and build thoughtful digital experiences. This space is where I share current
          work, writing, and ideas in progress.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={0.08}>
        <h2>Current Focus</h2>
        <p>
          Exploring product design systems, writing about engineering decisions, and building
          simple tools with a strong editorial sensibility.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-6" delay={0.12}>
        <h2>In Progress</h2>
        <StaggerList
          items={focusAreas}
          className="grid gap-4"
          renderItem={(item) => (
            <article className="rounded-xl border border-black/10 bg-white p-5">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-black/70">{item.description}</p>
            </article>
          )}
        />
      </Reveal>
    </div>
  );
}
