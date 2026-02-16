import { ArticleCard } from "@/app/components/article-card";

const articles = [
  {
    title: "Agentic Autonomous Systems: Moving from AI Experiments to Real-World Impact",
    description:
      "A practical summary of how agentic systems are evolving from experiments into structured production programs.",
    link: "/articles/agentic-autonomous-systems"
  }
];

export default function ArticlesPage() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Articles</h1>
        <p className="text-slate-200">Browse published writing and article summaries.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard
            key={article.link}
            title={article.title}
            description={article.description}
            link={article.link}
            external={article.external}
          />
        ))}
      </div>
    </section>
  );
}
