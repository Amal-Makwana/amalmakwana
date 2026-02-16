import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import InterestsPage from "@/app/interests/page";
import AboutPage from "@/app/about/page";
import ArticlesPage from "@/app/articles/page";

const interestCardTitles = ["Speaking at Conferences", "Guest Lectures at university", "Consultancy"];

describe("HomePage", () => {
  it("renders single-page sections with required anchor ids", () => {
    const { container } = render(<HomePage />);

    expect(container.querySelector("#hero")).toBeInTheDocument();
    expect(container.querySelector("#interests")).toBeInTheDocument();
    expect(container.querySelector("#articles")).toBeInTheDocument();
    expect(container.querySelector("#contact")).toBeInTheDocument();
    expect(screen.getByLabelText("Professional roles and interests")).toBeInTheDocument();
  });
});

describe("Interests page", () => {
  it("renders all interest cards", () => {
    render(<InterestsPage />);

    expect(screen.getByRole("heading", { name: "Interests" })).toBeInTheDocument();
    interestCardTitles.forEach((title) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });
});

describe("AboutPage", () => {
  it("points users to the homepage contact section", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: "Contact me" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to contact section" })).toHaveAttribute("href", "/#contact");
  });
});

describe("ArticlesPage", () => {
  it("renders article cards with external links", () => {
    render(<ArticlesPage />);

    expect(screen.getByRole("heading", { name: "Articles" })).toBeInTheDocument();
    const articleLink = screen.getByRole("link", {
      name: "Read article: Agentic Autonomous Systems: Moving from AI Experiments to Real-World Impact"
    });
    expect(articleLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/pulse/agentic-autonomous-systems-moving-from-ai-experiments-amal-makwana-anvfe/"
    );
    expect(articleLink).toHaveAttribute("target", "_blank");
  });
});
