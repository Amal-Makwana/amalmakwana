import { fireEvent, render, screen } from "@testing-library/react";
import AboutPage, { buildEnquiryMailto } from "@/app/about/page";

describe("buildEnquiryMailto", () => {
  it("builds a fully encoded mailto URL", () => {
    const mailto = buildEnquiryMailto({
      name: "Amal",
      email: "amal@example.com",
      phone: "+44 1234",
      reason: "Let's collaborate"
    });

    expect(mailto).toContain("mailto:amal.makwana@gmail.com");
    expect(mailto).toContain(encodeURIComponent("Website enquiry from Amal"));
    expect(mailto).toContain(encodeURIComponent("Name: Amal"));
    expect(mailto).toContain(encodeURIComponent("Email: amal@example.com"));
  });

  it("falls back to Visitor when the name is empty", () => {
    const mailto = buildEnquiryMailto({
      name: "",
      email: "contact@example.com",
      phone: "123",
      reason: "Question"
    });

    expect(mailto).toContain(encodeURIComponent("Website enquiry from Visitor"));
  });
});

describe("AboutPage enquiry form", () => {
  it("updates each field, opens mailto and shows the submitted message", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    render(<AboutPage />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { name: "name", value: "Amal" } });
    fireEvent.change(screen.getByLabelText("email address"), { target: { name: "email", value: "amal@example.com" } });
    fireEvent.change(screen.getByLabelText("phone number"), { target: { name: "phone", value: "+44 1234" } });
    fireEvent.change(screen.getByLabelText("Reason"), { target: { name: "reason", value: "Let's collaborate" } });

    fireEvent.click(screen.getByRole("button", { name: "Enquire" }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).toHaveBeenCalledWith(expect.stringContaining("mailto:amal.makwana@gmail.com"), "_self");
    expect(screen.getByText(/Thanks for reaching out/i)).toBeInTheDocument();

    openSpy.mockRestore();
  });
});
