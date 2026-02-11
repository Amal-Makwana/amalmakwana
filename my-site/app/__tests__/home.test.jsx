import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the main heading text", () => {
    render(<HomePage />);

    expect(screen.getByText("Hello, I'm Amal Makwana.")).toBeInTheDocument();
  });
});
