import { fireEvent, render, screen, within } from "@testing-library/react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

describe("SiteHeader", () => {
  it("renders in-page navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "HOME" })).toHaveAttribute("href", "#home");
    expect(screen.getByRole("link", { name: "My Chatbot" })).toHaveAttribute("href", "#chatbot");
    expect(screen.getByRole("link", { name: "Interests" })).toHaveAttribute("href", "#interests");
    expect(screen.getByRole("link", { name: "Articles" })).toHaveAttribute("href", "#articles");
    expect(screen.getByRole("link", { name: "Contact Me" })).toHaveAttribute("href", "#contact");
  });

  it("toggles the mobile menu and closes after link click", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: "Toggle navigation menu" });
    fireEvent.click(menuButton);

    const mobileNav = screen.getByRole("navigation", { name: "Mobile navigation" });
    fireEvent.click(within(mobileNav).getByRole("link", { name: "Interests" }));

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
  });
});

describe("SiteFooter", () => {
  it("renders the current year copyright text", () => {
    render(<SiteFooter />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} All rights reserved.`)).toBeVisible();
  });
});
