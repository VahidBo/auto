import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

test("Render Footer component", () => {
  render(<Footer />);
  expect(screen.getByText("© --Company Name-- Group 2018")).toBeInTheDocument();
});
