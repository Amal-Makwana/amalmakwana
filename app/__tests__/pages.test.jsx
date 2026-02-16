import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import InterestsPage from "@/app/interests/page";
import AboutPage from "@/app/about/page";
import ArticlesPage from "@/app/articles/page";
import AgenticAutonomousSystemsPage from "@/app/articles/agentic-autonomous-systems/page";

const interestCardTitles = ["Speaking at Conferences", "Guest Lectures at university", "Consultancy"];

describe("HomePage", () => {
  it("renders hero heading and intro label", () => {
    render(<HomePage />);

    expect(screen.getByLabelText("Professional roles and interests")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /hello\s*i'm amal makwana/i })).toBeInTheDocument();
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
  it("renders contact sections and all form fields", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: "Contact me" })).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Visit my LinkedIn profile" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/amalmakwana/"
    );

    expect(screen.getByText("Send an enquiry")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeRequired();
    expect(screen.getByLabelText("email address")).toBeRequired();
    expect(screen.getByLabelText("phone number")).toBeRequired();
    expect(screen.getByLabelText("Reason")).toBeRequired();
    expect(screen.getByRole("button", { name: "Enquire" })).toBeInTheDocument();
  });
});

describe("ArticlesPage", () => {
  it("renders an article card with an internal link", () => {
    render(<ArticlesPage />);

    expect(screen.getByRole("heading", { name: "Articles" })).toBeInTheDocument();

    const localArticleLink = screen.getByRole("link", {
      name: "Read article: Agentic Autonomous Systems: Moving from AI Experiments to Real-World Impact"
    });
    expect(localArticleLink).toHaveAttribute("href", "/articles/agentic-autonomous-systems");
    expect(localArticleLink).not.toHaveAttribute("target", "_blank");

    expect(screen.queryByRole("link", { name: "Read article: Original LinkedIn publication" })).not.toBeInTheDocument();
  });
});

describe("Article detail page", () => {
  it("renders article content and navigation links", () => {
    render(<AgenticAutonomousSystemsPage />);

    expect(
      screen.getByRole("heading", {
        name: "Agentic Autonomous Systems: Moving from AI Experiments to Real-World Impact"
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Back to Articles" })).toHaveAttribute("href", "/articles");
    expect(screen.getByRole("link", { name: "Read full post on LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/pulse/agentic-autonomous-systems-moving-from-ai-experiments-amal-makwana-anvfe/"
    );
  });
});
