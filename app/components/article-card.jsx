import Link from "next/link";

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14 19 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14v5h-14V5h5" />
    </svg>
  );
}

export function ArticleCard({ title, description, link, external = false }) {
  const linkContent = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-100 underline-offset-4 transition-all duration-200 group-hover:underline group-focus-within:underline">
          {title}
        </h2>
        <ExternalLinkIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-200/85" />
      </div>
      <p className="text-sm leading-relaxed text-slate-200">{description}</p>
    </>
  );

  return (
    <article className="group rounded-2xl border border-white/20 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
      {external ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block space-y-3 focus-visible:outline-none"
          aria-label={`Read article: ${title}`}
        >
          {linkContent}
        </a>
      ) : (
        <Link href={link} className="block space-y-3 focus-visible:outline-none" aria-label={`Read article: ${title}`}>
          {linkContent}
        </Link>
      )}
    </article>
  );
}
