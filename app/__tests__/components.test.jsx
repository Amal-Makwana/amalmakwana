import { fireEvent, render, screen, within } from "@testing-library/react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

describe("SiteHeader", () => {
  it("renders desktop navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "HOME" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Interests" })).toHaveAttribute("href", "/interests");
    expect(screen.getByRole("link", { name: "Articles" })).toHaveAttribute("href", "/articles");
    expect(screen.getByRole("link", { name: "Contact Me" })).toHaveAttribute("href", "/contactme");
  });

  it("toggles the mobile menu and updates accessibility state", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: "Toggle navigation menu" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    const mobileNav = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(mobileNav).toBeInTheDocument();

    fireEvent.click(within(mobileNav).getByRole("link", { name: "Interests" }));

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
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
