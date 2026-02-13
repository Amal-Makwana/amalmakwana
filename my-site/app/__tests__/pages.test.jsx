import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import InterestsPage from "@/app/Interests/page";
import InterestPage from "@/app/Interest/page";
import AboutPage from "@/app/about/page";
import ArticlesPage from "@/app/Articles/page";

const interestCardTitles = ["Speaking at Conferences", "Guest Lectures at university", "Consultancy"];

describe("HomePage", () => {
  it("renders hero heading and intro label", () => {
    render(<HomePage />);

    expect(screen.getByText("AI Native Portfolio")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /hello\s*i'm amal makwana/i })).toBeInTheDocument();
  });
});

describe("Interests and Interest pages", () => {
  it.each([
    ["InterestsPage", InterestsPage, "Interests"],
    ["InterestPage", InterestPage, "Interest"]
  ])("%s renders all interest cards", (_, PageComponent, headingText) => {
    render(<PageComponent />);

    expect(screen.getByRole("heading", { name: headingText })).toBeInTheDocument();
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
  it("renders section heading and supporting copy", () => {
    render(<ArticlesPage />);

    expect(screen.getByRole("heading", { name: "Articles" })).toBeInTheDocument();
    expect(screen.getByText("Share your writing, notes, and article summaries in this section.")).toBeInTheDocument();
  });
});
