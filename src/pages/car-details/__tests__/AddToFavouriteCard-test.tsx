import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "src/helpers";
import { AddToFavouriteCard, FAVOURITE_CARD_TEXT } from "../AddToFavouriteCard";

test("Render AddToFavouriteCard and click save button", () => {
  renderWithRouter(<AddToFavouriteCard />);
  expect(screen.getByText(FAVOURITE_CARD_TEXT)).toBeInTheDocument();
  expect(screen.getByText("Save")).toBeInTheDocument();

  userEvent.click(screen.getByText("Save"));
  expect(screen.getByText("Save")).toBeInTheDocument();
  // TODO: Add expectations after implemnt functionality
});
