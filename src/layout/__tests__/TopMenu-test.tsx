import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { pages, TopMenu } from "../TopMenu";

test("Render TopMenu component", () => {
  render(<TopMenu />, { wrapper: MemoryRouter });
  expect(screen.getByAltText("auto logo")).toBeInTheDocument();
  const menuLinks = screen.getAllByRole("link");
  expect(menuLinks.length).toBe(pages.length);
  for (let i = 0; i < pages.length; i += 1) {
    expect(menuLinks[i]).toHaveTextContent(pages[i].title);
    expect(menuLinks[i].getAttribute("href")).toBe(pages[i].route);
  }
});
