import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("Render CarsList with 10 cars (carsCount: 200, pagesCount: 20)", async () => {
  render(<CarsList />);
  expect(screen.getByText("Available cars")).toBeInTheDocument();
  expect(await screen.findByText("Showing 10 of 100 results")).toBeInTheDocument();
  expect(await screen.findAllByTestId("car-card")).toHaveLength(10);
  expect(screen.getByText("First")).toBeInTheDocument();
  expect(screen.getByText("Previous")).toBeInTheDocument();
  expect(await screen.findByText("Page 1 of 10")).toBeInTheDocument();
  expect(screen.getByText("Next")).toBeInTheDocument();
  expect(screen.getByText("Last")).toBeInTheDocument();
});

test("CarsList: Click on Next and Previous buttons", async () => {
  render(<CarsList />);
  expect(await screen.findByText("Page 1 of 10")).toBeInTheDocument();
  expect(screen.getByText("Next")).toBeInTheDocument();

  userEvent.click(screen.getByText("Next"));

  expect(await screen.findByText("Page 2 of 10")).toBeInTheDocument();
  expect(await screen.findAllByTestId("car-card")).toHaveLength(10);
  expect(screen.getByText("Previous")).toBeInTheDocument();

  userEvent.click(screen.getByText("Previous"));

  expect(await screen.findByText("Page 1 of 10")).toBeInTheDocument();
  expect(await screen.findAllByTestId("car-card")).toHaveLength(10);
});

test("CarsList: Click on Last and First buttons", async () => {
  render(<CarsList />);
  expect(await screen.findByText("Page 1 of 10")).toBeInTheDocument();
  expect(screen.getByText("Last")).toBeInTheDocument();

  userEvent.click(screen.getByText("Last"));

  expect(await screen.findByText("Page 10 of 10")).toBeInTheDocument();
  expect(await screen.findAllByTestId("car-card")).toHaveLength(10);
  expect(screen.getByText("First")).toBeInTheDocument();

  userEvent.click(screen.getByText("First"));

  expect(await screen.findByText("Page 1 of 10")).toBeInTheDocument();
  expect(await screen.findAllByTestId("car-card")).toHaveLength(10);
});

test("CarsList: Prevous button should not work", async () => {
  render(<CarsList />);
  expect(await screen.findByText("Page 1 of 10")).toBeInTheDocument();
  expect(screen.getByText("Previous")).toBeInTheDocument();

  userEvent.click(screen.getByText("Previous"));

  expect(await screen.findByText("Page 1 of 10")).toBeInTheDocument();
});

test("CarsList: Next button should not work", async () => {
  render(<CarsList />);
  expect(await screen.findByText("Page 1 of 10")).toBeInTheDocument();

  userEvent.click(screen.getByText("Last"));
  expect(await screen.findByText("Page 10 of 10")).toBeInTheDocument();

  expect(screen.getByText("Next")).toBeInTheDocument();
  userEvent.click(screen.getByText("Next"));

  expect(await screen.findByText("Page 10 of 10")).toBeInTheDocument();
});

// TODO: Write test for the case that api response for cars is []
