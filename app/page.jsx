"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const phrases = [
  "Avid Learner",
  "AI Enthusiast",
  "Transformation Lead",
  "Engineering Manager",
  "Product Owner",
  "Agile Expert",
];

export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const revealInterval = setInterval(() => {
      setVisibleCount((current) => {
        if (current >= phrases.length) {
          clearInterval(revealInterval);
          return current;
        }

        return current + 1;
      });
    }, window.innerWidth < 640 ? 360 : 280);

    return () => clearInterval(revealInterval);
  }, []);

  return (
    <div className="editorial">
      <section className="section-grid">
        <div className="space-y-6">
          <h1>
            Hello
            <br />
            <span className="typewriter-line" aria-label="I'm Amal Makwana">
              I&apos;m Amal Makwana
            </span>
          </h1>
          <div className="phrase-cloud" aria-label="Professional roles and interests">
            {phrases.map((phrase, index) => (
              <span key={phrase} className={`phrase-chip ${index < visibleCount ? "is-visible" : ""}`}>
                {phrase}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid mt-12 border-t border-cyan-200/15 pt-8 sm:pt-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Articles</h2>
          <p className="text-slate-200">
            I write about AI, product leadership, and practical transformation.
          </p>
          <Link
            href="/articles"
            className="inline-flex min-h-11 items-center rounded-md border border-cyan-200/30 px-4 py-2 text-sm font-medium text-cyan-100"
          >
            Go to Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
