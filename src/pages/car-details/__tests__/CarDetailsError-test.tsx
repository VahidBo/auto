import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "src/helpers";
import { CarDetailsError } from "../CarDetailsError";

test("Render CarDetailsError", () => {
  renderWithRouter(<CarDetailsError refetch={() => {}} />);

  expect(screen.getByText("Something went wrong :(")).toBeInTheDocument();
  expect(screen.getByText("Retry")).toBeInTheDocument();
  expect(screen.getByText("Go to homepage")).toBeInTheDocument();
  expect(screen.getByText("Go to homepage").getAttribute("href")).toBe("/");
});

test("CarDetailsError - click on retry button", () => {
  const retryHandler = jest.fn();
  renderWithRouter(<CarDetailsError refetch={retryHandler} />);

  userEvent.click(screen.getByText("Retry"));
  expect(retryHandler).toBeCalledTimes(1);
});
