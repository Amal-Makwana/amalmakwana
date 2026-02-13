const phrases = [
  "Avid Learner",
  "AI Enthusiast",
  "Transformation Lead",
  "Engineering Manager",
  "Product Owner",
  "Agile Expert",
];

const phraseAnimationSettings = [
  { x: "-130px", y: "-90px", delay: "0s", duration: "7s" },
  { x: "140px", y: "-70px", delay: "0.7s", duration: "7.6s" },
  { x: "-110px", y: "95px", delay: "1.3s", duration: "8.1s" },
  { x: "155px", y: "105px", delay: "1.9s", duration: "7.4s" },
  { x: "0px", y: "-130px", delay: "2.6s", duration: "8.4s" },
  { x: "0px", y: "130px", delay: "3.1s", duration: "7.8s" },
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
            {phrases.map((phrase, index) => {
              const animation = phraseAnimationSettings[index % phraseAnimationSettings.length];
              return (
                <span
                  key={phrase}
                  className="phrase-chip"
                  style={{
                    "--from-x": animation.x,
                    "--from-y": animation.y,
                    "--delay": animation.delay,
                    "--duration": animation.duration,
                  }}
                >
                  {phrase}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
