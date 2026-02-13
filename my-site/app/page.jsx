const phrases = [
  "Avid Learner",
  "AI Enthusiast",
  "Transformation Lead",
  "Engineering Manager",
  "Product Owner",
  "Agile Expert",
];

export default function HomePage() {
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
              <span
                key={phrase}
                className="phrase-chip"
                style={{
                  "--delay": `${index * 0.35}s`,
                }}
              >
                {phrase}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
