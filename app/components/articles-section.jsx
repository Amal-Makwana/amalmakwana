import { ArticleCard } from "@/app/components/article-card";

const articles = [
  {
    title: "Agentic Autonomous Systems: Moving from AI Experiments to Real-World Impact",
    description:
      "A practical summary of how agentic systems are evolving from experiments into structured production programs.",
    link: "/articles/agentic-autonomous-systems"
  }
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="section-shell" aria-labelledby="articles-heading">
      <div className="container-shell py-20">
        <h2 id="articles-heading" className="section-title">Articles</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
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
      </div>
    </section>
  );
}
