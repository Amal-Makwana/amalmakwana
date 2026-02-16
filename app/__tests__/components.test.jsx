import { render, screen } from "@testing-library/react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

describe("SiteHeader", () => {
  it("renders desktop navigation links with section anchors", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "HOME" })).toHaveAttribute("href", "#hero");
    expect(screen.getByRole("link", { name: "Hero" })).toHaveAttribute("href", "#hero");
    expect(screen.getByRole("link", { name: "Interests" })).toHaveAttribute("href", "#interests");
    expect(screen.getByRole("link", { name: "Articles" })).toHaveAttribute("href", "#articles");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");

    expect(screen.queryByRole("button", { name: "Toggle navigation menu" })).not.toBeInTheDocument();
  });
});

describe("SiteFooter", () => {
  it("renders the current year copyright text", () => {
    render(<SiteFooter />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} All rights reserved.`)).toBeVisible();
  });
});
