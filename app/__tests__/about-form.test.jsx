import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Contact enquiry form on homepage", () => {
  it("updates each field, opens mailto and shows the submitted message", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    render(<HomePage />);

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
