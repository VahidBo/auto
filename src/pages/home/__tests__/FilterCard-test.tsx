import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "src/helpers";
import { FilterCard } from "../FilterCard";

test("Render FilterCard", () => {
  render(<FilterCard />);
  expect(screen.getByText("Color")).toBeInTheDocument();
  expect(screen.getByText("All car colors")).toBeInTheDocument();
  expect(screen.getByText("Manufacturer")).toBeInTheDocument();
  expect(screen.getByText("All manufacturers")).toBeInTheDocument();
  expect(screen.getByText("Filter")).toBeInTheDocument();
});

test("FilterCard: Open the color options and choose one", async () => {
  render(<FilterCard />);
  expect(screen.getByText("All car colors")).toBeInTheDocument();

  userEvent.click(screen.getByText("All car colors"));
  await waitFor(async () => expect(await screen.findAllByRole("option")).not.toHaveLength(1));

  userEvent.click(screen.getByText("Red"));
  await waitFor(async () => expect(await screen.findAllByText("Red")).toHaveLength(1));

  expect(screen.getByText("Red")).toBeInTheDocument();
  expect(screen.queryByText("All car colors")).not.toBeInTheDocument();
});
