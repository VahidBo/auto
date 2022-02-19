import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "src/helpers";
import { CarDetailsError } from "../CarDetailsError";

test("Render CarDetailsError", () => {
  render(<CarDetailsError refetch={() => {}} />);

  expect(screen.getByText("Something went wrong :(")).toBeInTheDocument();
  expect(screen.getByText("Retry")).toBeInTheDocument();
  expect(screen.getByText("Go to homepage")).toBeInTheDocument();
  expect(screen.getByText("Go to homepage").getAttribute("href")).toBe("/");
});

test("CarDetailsError - click on retry button", () => {
  const retryHandler = jest.fn();
  render(<CarDetailsError refetch={retryHandler} />);

  userEvent.click(screen.getByText("Retry"));
  expect(retryHandler).toBeCalledTimes(1);
});
