"use client";

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
    }, 280);

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
    </div>
  );
}
