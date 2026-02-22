import { fireEvent, render, screen } from "@testing-library/react";
import ContactSection, { buildQueryMailto } from "@/app/components/contact-section";

describe("buildQueryMailto", () => {
  it("builds a fully encoded mailto URL", () => {
    const mailto = buildQueryMailto({
      name: "Amal",
      email: "amal@example.com",
      phone: "+44 1234",
      query: "Let's collaborate"
    });

    expect(mailto).toContain("mailto:amal.makwana@gmail.com");
    expect(mailto).toContain(encodeURIComponent("Website query from Amal"));
    expect(mailto).toContain(encodeURIComponent("Query: Let's collaborate"));
  });
});

describe("ContactSection form", () => {
  it("submits with current input values in the mailto body", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    render(<ContactSection />);

    fireEvent.change(screen.getByPlaceholderText("Your name"), { target: { name: "name", value: "A Tester" } });
    fireEvent.change(screen.getByPlaceholderText("Your email address"), { target: { name: "email", value: "tester@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Your phone number"), { target: { name: "phone", value: "555-0100" } });
    fireEvent.change(screen.getByPlaceholderText("Share your query"), { target: { name: "query", value: "Need more details" } });

    fireEvent.click(screen.getByRole("button", { name: "Submit Query" }));

    const calledMailto = openSpy.mock.calls[0][0];
    expect(calledMailto).toContain(encodeURIComponent("Query: Need more details"));

    openSpy.mockRestore();
  });
});
