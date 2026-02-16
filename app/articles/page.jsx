import { ArticleCard } from "@/app/components/article-card";

const articles = [
  {
    title: "Agentic Autonomous Systems: Moving from AI Experiments to Real-World Impact",
    description:
      "A deep dive into how agentic systems are evolving from experimental AI workflows into structured, autonomous production systems.",
    link: "https://www.linkedin.com/pulse/agentic-autonomous-systems-moving-from-ai-experiments-amal-makwana-anvfe/"
  }
];

export default function ArticlesPage() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Articles</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.link} title={article.title} description={article.description} link={article.link} />
        ))}
      </div>
    </section>
  );
}
