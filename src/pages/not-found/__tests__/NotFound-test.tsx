import { screen } from "@testing-library/react";
import { render } from "src/helpers";
import { NotFound, SORRY_TEXT } from "../NotFound";

test("Render NotFound", () => {
  render(<NotFound />);
  expect(screen.getByAltText("auto logo")).toBeInTheDocument();
  expect(screen.getByText("404 - Not Found")).toBeInTheDocument();
  expect(screen.getByText(SORRY_TEXT)).toBeInTheDocument();
  expect(screen.getByText(/You can always go back/)).toBeInTheDocument();
  expect(screen.getByText("homepage").getAttribute("href")).toBe("/");
});
