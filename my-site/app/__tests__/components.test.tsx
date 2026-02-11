import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import ArticlesPage from "@/app/Articles/page";
import InterestPage from "@/app/Interest/page";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import RootLayout from "@/app/layout";
import Template from "@/app/template";

describe("App components", () => {
  it("renders SiteHeader navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("Interest")).toBeVisible();
    expect(screen.getByText("Articles")).toBeVisible();
  });

  it("renders SiteFooter copyright text", () => {
    render(<SiteFooter />);

    expect(screen.getByText(/All rights reserved\./i)).toBeVisible();
  });

  it("renders HomePage text", () => {
    render(<HomePage />);

    expect(screen.getByText("Hello, I'm Amal Makwana.")).toBeVisible();
    expect(
      screen.getByText("This is a one-sentence placeholder for your personal introduction.")
    ).toBeVisible();
  });

  it("renders ArticlesPage text", () => {
    render(<ArticlesPage />);

    expect(screen.getByText("Articles")).toBeVisible();
    expect(
      screen.getByText("Share your writing, notes, and article summaries in this section.")
    ).toBeVisible();
  });

  it("renders InterestPage text", () => {
    render(<InterestPage />);

    expect(screen.getByText("Interest")).toBeVisible();
    expect(
      screen.getByText("Add your interests, curiosities, and ongoing explorations here.")
    ).toBeVisible();
  });

  it("renders RootLayout children", () => {
    render(
      <RootLayout>
        <p>Layout child content</p>
      </RootLayout>
    );

    expect(screen.getByText("Layout child content")).toBeVisible();
  });

  it("renders Template children", () => {
    render(
      <Template>
        <p>Template child content</p>
      </Template>
    );

    expect(screen.getByText("Template child content")).toBeVisible();
  });
});
