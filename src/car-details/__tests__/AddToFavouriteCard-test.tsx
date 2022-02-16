import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouter } from "src/helpers";
import { AddToFavouriteCard, FAVOURITE_CARD_TEXT } from "../AddToFavouriteCard";

test("Render AddToFavouriteCard and click save button", () => {
  renderWithRouter(<AddToFavouriteCard />);
  expect(screen.getByText(FAVOURITE_CARD_TEXT)).toBeInTheDocument();
  expect(screen.getByText("Save")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Save"));
  expect(screen.getByText("Save")).toBeInTheDocument();
  // TODO: Add expectations after implemnt functionality
});
