import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the main heading text", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /hello\s*i'm amal makwana/i })).toBeInTheDocument();
  });
});
