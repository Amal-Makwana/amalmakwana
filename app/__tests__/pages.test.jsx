import { act, render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import AgenticAutonomousSystemsPage from "@/app/articles/agentic-autonomous-systems/page";

const interestCardTitles = ["Speaking at Conferences", "Guest Lectures at University", "Consultancy"];

describe("HomePage", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it("renders hero heading and all stacked sections", () => {
    render(<HomePage />);

    expect(screen.getByLabelText("Professional roles and interests")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /hello\s*i'm amal makwana/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "My Chatbot" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Interests" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Articles" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Contact Me" })).toBeInTheDocument();
  });

  it("renders all interest cards", () => {
    render(<HomePage />);
    interestCardTitles.forEach((title) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });

  it("starts skill typing only after intro delay and then types tags", () => {
    const { container } = render(<HomePage />);

    const skillTyping = container.querySelector(".phrase-typing");
    expect(skillTyping).toBeInTheDocument();
    expect(skillTyping?.textContent).toBe("\u00A0");

    act(() => {
      jest.advanceTimersByTime(1120);
    });
    expect(skillTyping?.textContent).toBe("\u00A0");

    act(() => {
      jest.advanceTimersByTime(85);
    });
    expect(skillTyping).toHaveTextContent("A");
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

    expect(screen.getByRole("link", { name: "Back to Articles" })).toHaveAttribute("href", "/#articles");
    expect(screen.getByRole("link", { name: "Read full post on LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/pulse/agentic-autonomous-systems-moving-from-ai-experiments-amal-makwana-anvfe/"
    );
  });
});
