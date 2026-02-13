import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import WorkPage from "@/app/work/page";
import AboutPage from "@/app/about/page";
import InterestPage from "@/app/Interest/page";
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

  it("renders WorkPage interest cards", () => {
    render(<WorkPage />);

    expect(screen.getByText("Interests")).toBeVisible();
    expect(screen.getByText("Speaking at Conferences")).toBeVisible();
    expect(screen.getByText("Guest Lectures at university")).toBeVisible();
    expect(screen.getByText("Consultancy")).toBeVisible();
  });


  it("renders InterestPage cards", () => {
    render(<InterestPage />);

    expect(screen.getByText("Speaking at Conferences")).toBeVisible();
    expect(screen.getByText("Guest Lectures at university")).toBeVisible();
    expect(screen.getByText("Consultancy")).toBeVisible();
  });

  it("renders AboutPage contact sections and form fields", () => {
    render(<AboutPage />);

    expect(screen.getByText("Contact me")).toBeVisible();
    expect(screen.getByText("LinkedIn")).toBeVisible();
    expect(screen.getByRole("link", { name: "Visit my LinkedIn profile" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/amalmakwana/"
    );
    expect(screen.getByText("Send an enquiry")).toBeVisible();
    const enquiryDetails = screen.getByText("Send an enquiry").closest("details");
    expect(enquiryDetails).not.toHaveAttribute("open");
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("email address")).toBeInTheDocument();
    expect(screen.getByLabelText("phone number")).toBeInTheDocument();
    expect(screen.getByLabelText("Reason")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enquire" })).toBeInTheDocument();
  });
});
