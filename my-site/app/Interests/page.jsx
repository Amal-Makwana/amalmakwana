const interestCards = [
  {
    title: "Speaking at Conferences",
    description:
      "Sharing ideas on product design, AI-enabled workflows, and practical innovation with cross-industry audiences.",
    palette: "from-indigo-500/20 via-fuchsia-500/15 to-sky-500/20",
    svg: (
      <svg viewBox="0 0 120 120" className="h-24 w-24" aria-hidden="true">
        <defs>
          <linearGradient id="conf-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <rect x="10" y="18" width="100" height="84" rx="16" fill="url(#conf-gradient)" opacity="0.9" />
        <circle cx="60" cy="42" r="10" fill="white" />
        <path d="M40 80c6-13 34-13 40 0" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M26 48l12 4m56-4-12 4" stroke="white" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Guest Lectures at university",
    description:
      "Engaging students with real-world case studies on digital transformation, leadership, and industry collaboration.",
    palette: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    svg: (
      <svg viewBox="0 0 120 120" className="h-24 w-24" aria-hidden="true">
        <defs>
          <linearGradient id="lecture-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <path d="M18 50 60 28l42 22-42 22-42-22Z" fill="url(#lecture-gradient)" />
        <path d="M36 63v16c0 8 48 8 48 0V63" stroke="#1f2937" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="92" cy="60" r="4" fill="#1f2937" />
        <path d="M92 64v18" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Consultancy",
    description:
      "Helping teams solve strategic and operational challenges through tailored roadmaps, mentorship, and execution support.",
    palette: "from-emerald-500/20 via-cyan-500/10 to-blue-500/20",
    svg: (
      <svg viewBox="0 0 120 120" className="h-24 w-24" aria-hidden="true">
        <defs>
          <linearGradient id="consult-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect x="18" y="24" width="84" height="72" rx="14" fill="url(#consult-gradient)" opacity="0.9" />
        <path d="M36 74h48" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <path d="M42 58 54 46l12 10 12-14" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    )
  }
];

export default function WorkPage() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Interests</h1>
        <p className="text-lg text-slate-200">A few areas where I love to contribute and collaborate.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {interestCards.map((interest) => (
          <article
            key={interest.title}
            className={`rounded-2xl border border-white/20 bg-gradient-to-br ${interest.palette} p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="mb-4 flex justify-center rounded-xl bg-white/80 p-3 backdrop-blur">{interest.svg}</div>
            <h2 className="mb-2 text-xl font-semibold text-slate-100">{interest.title}</h2>
            <p className="text-sm leading-relaxed text-slate-200">{interest.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
