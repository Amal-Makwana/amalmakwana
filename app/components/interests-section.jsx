const interestCards = [
  {
    title: "Speaking at Conferences",
    description:
      "Sharing ideas on product design, AI-enabled workflows, and practical innovation with cross-industry audiences.",
    svg: (
      <svg viewBox="0 0 120 120" className="h-20 w-20" aria-hidden="true">
        <rect x="10" y="18" width="100" height="84" rx="16" fill="#0EA5E9" opacity="0.15" />
        <circle cx="60" cy="42" r="10" fill="#0EA5E9" />
        <path d="M40 80c6-13 34-13 40 0" stroke="#0EA5E9" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  {
    title: "Guest Lectures at University",
    description:
      "Engaging students with real-world case studies on digital transformation, leadership, and industry collaboration.",
    svg: (
      <svg viewBox="0 0 120 120" className="h-20 w-20" aria-hidden="true">
        <path d="M18 50 60 28l42 22-42 22-42-22Z" fill="#14B8A6" opacity="0.2" />
        <path d="M36 63v16c0 8 48 8 48 0V63" stroke="#14B8A6" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Consultancy",
    description:
      "Providing industry insights and perspectives that can be applied to enterprises to gain real value.",
    svg: (
      <svg viewBox="0 0 120 120" className="h-20 w-20" aria-hidden="true">
        <rect x="18" y="24" width="84" height="72" rx="14" fill="#0EA5E9" opacity="0.14" />
        <path d="M36 74h48" stroke="#0EA5E9" strokeWidth="6" strokeLinecap="round" />
        <path d="M42 58 54 46l12 10 12-14" stroke="#14B8A6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    )
  }
];

export default function InterestsSection() {
  return (
    <section id="interests" className="section-shell" aria-labelledby="interests-heading">
      <div className="container-shell py-14">
        <h2 id="interests-heading" className="section-title">Interests</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {interestCards.map((interest) => (
            <article key={interest.title} className="tech-card p-6">
              <div className="mb-4 flex justify-center rounded-xl bg-white p-3 shadow-sm">{interest.svg}</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{interest.title}</h3>
              <p className="text-slate-600">{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
