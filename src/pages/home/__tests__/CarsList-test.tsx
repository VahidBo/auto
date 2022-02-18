import { screen } from "@testing-library/react";
import { render } from "src/helpers";
import { CarsList } from "../CarsList";

test("Render CarsList loading state", () => {
  render(<CarsList />);
  expect(screen.getByText("Available cars")).toBeInTheDocument();
  expect(screen.getByText("-")).toBeInTheDocument();
  expect(screen.getAllByTestId("car-card-skeleton")).toHaveLength(10);
  expect(screen.getByText("First")).toBeInTheDocument();
  expect(screen.getByText("Previous")).toBeInTheDocument();
  expect(screen.getByText("Page - of -")).toBeInTheDocument();
  expect(screen.getByText("Next")).toBeInTheDocument();
  expect(screen.getByText("Last")).toBeInTheDocument();
});

test("Render CarsList with 2 cars", async () => {
  render(<CarsList />);
  expect(screen.getByText("Available cars")).toBeInTheDocument();
  expect(await screen.findByText("Showing 2 of 2 results")).toBeInTheDocument();
  expect(await screen.findAllByTestId("car-card")).toHaveLength(2);
  expect(screen.getByText("First")).toBeInTheDocument();
  expect(screen.getByText("Previous")).toBeInTheDocument();
  expect(await screen.findByText("Page 1 of 1")).toBeInTheDocument();
  expect(screen.getByText("Next")).toBeInTheDocument();
  expect(screen.getByText("Last")).toBeInTheDocument();
});
