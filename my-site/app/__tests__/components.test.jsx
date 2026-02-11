import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import WorkPage from "@/app/work/page";
import AboutPage from "@/app/about/page";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

describe("App components", () => {
  it("renders SiteHeader navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("Interests")).toBeVisible();
    expect(screen.getByText("Contact me")).toBeVisible();
  });

  it("renders SiteFooter copyright text", () => {
    render(<SiteFooter />);

    expect(screen.getByText(/All rights reserved\./i)).toBeVisible();
  });

  it("renders HomePage text", () => {
    render(<HomePage />);

    expect(screen.getByText("Hello, I'm Amal Makwana.")).toBeVisible();
  });

  it("renders WorkPage text", () => {
    render(<WorkPage />);

    expect(screen.getByText("Interests")).toBeVisible();
  });

  it("renders AboutPage text", () => {
    render(<AboutPage />);

    expect(screen.getByText("Contact me")).toBeVisible();
  });
});
