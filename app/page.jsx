"use client";

import { useEffect, useState } from "react";
import { ArticleCard } from "@/app/components/article-card";

const phrases = [
  "Avid Learner",
  "AI Enthusiast",
  "Transformation Lead",
  "Engineering Manager",
  "Product Owner",
  "Agile Expert"
];

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
    description: "Providing industry insights and perspectives that can be applied to enterprises to gain real value",
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
        <path
          d="M42 58 54 46l12 10 12-14"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    )
  }
];

const articles = [
  {
    title: "Agentic Autonomous Systems: Moving from AI Experiments to Real-World Impact",
    description:
      "A deep dive into how agentic systems are evolving from experimental AI workflows into structured, autonomous production systems.",
    link: "https://www.linkedin.com/pulse/agentic-autonomous-systems-moving-from-ai-experiments-amal-makwana-anvfe/"
  }
];

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 8.98h4v12H3v-12Zm7 0h3.84v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14v6.27h-4v-5.56c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.65h-4v-12Z" />
    </svg>
  );
}

function buildEnquiryMailto(formData) {
  const subject = encodeURIComponent(`Website enquiry from ${formData.name || "Visitor"}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nReason: ${formData.reason}`
  );

  return `mailto:amal.makwana@gmail.com?subject=${subject}&body=${body}`;
}

export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: ""
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnquire = (event) => {
    event.preventDefault();

    const mailtoUrl = buildEnquiryMailto(formData);
    window.open(mailtoUrl, "_self");
    setSubmitted(true);
  };

  return (
    <div className="editorial space-y-14 md:space-y-16">
      <section id="hero" className="section-grid scroll-mt-24">
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

      <section id="interests" className="space-y-8 scroll-mt-24">
        <div className="max-w-2xl space-y-4">
          <h2>Interests</h2>
          <p>A few areas where I love to contribute and collaborate.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {interestCards.map((interest) => (
            <article
              key={interest.title}
              className={`rounded-2xl border border-white/20 bg-gradient-to-br ${interest.palette} p-5 sm:p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="mb-4 flex justify-center rounded-xl bg-white/80 p-3 backdrop-blur">{interest.svg}</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100 sm:text-xl">{interest.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{interest.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="articles" className="space-y-8 scroll-mt-24">
        <div className="max-w-2xl space-y-4">
          <h2>Articles</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.link} title={article.title} description={article.description} link={article.link} />
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-6 scroll-mt-24">
        <h2>Contact me</h2>
        <p>
          Let&apos;s connect about collaborations, opportunities, or ideas. You can use this section to share your
          preferred contact details.
        </p>

        <details className="rounded-md border border-white/25 bg-white/5 p-4 sm:p-5" open>
          <summary className="cursor-pointer py-1 text-sm font-medium text-slate-100">LinkedIn</summary>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/amalmakwana/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#0A66C2] hover:opacity-85"
            >
              <LinkedInIcon className="h-6 w-6" />
              <span>Visit my LinkedIn profile</span>
            </a>
          </div>
        </details>

        <details className="rounded-md border border-white/25 bg-white/5 p-4 sm:p-5">
          <summary className="cursor-pointer py-1 text-sm font-medium text-slate-100">Send an enquiry</summary>
          <form className="mt-4 space-y-4" onSubmit={handleEnquire}>
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full min-h-11 rounded-md border border-white/25 bg-slate-950/40 px-3 py-2 text-base text-slate-100 sm:text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full min-h-11 rounded-md border border-white/25 bg-slate-950/40 px-3 py-2 text-base text-slate-100 sm:text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
                phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full min-h-11 rounded-md border border-white/25 bg-slate-950/40 px-3 py-2 text-base text-slate-100 sm:text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="reason" className="block text-sm font-medium text-slate-200">
                Reason
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full min-h-11 rounded-md border border-white/25 bg-slate-950/40 px-3 py-2 text-base text-slate-100 sm:text-sm"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="min-h-11 rounded-md bg-cyan-500 px-5 py-2 text-sm font-medium text-slate-950 transition-opacity hover:opacity-85"
            >
              Enquire
            </button>
          </form>
        </details>

        {submitted ? <p>Thanks for reaching out... I will be in touch shortly</p> : null}
      </section>
    </div>
  );
}
