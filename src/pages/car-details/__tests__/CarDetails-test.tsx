import { render } from "src/helpers";
import { CarDetails } from "../CarDetails";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalModule,
    useParams: () => ({ stockNumber: "41400" }),
  };
});

test("Render CarDetails page loading state", () => {
  render(<CarDetails />);
  expect(screen.getByTestId("car-details-page-skeleton")).toBeInTheDocument();
});

test("Render CarDetails page after getting data", async () => {
  render(<CarDetails />);
  expect(await screen.findByTestId("car-info-section")).toBeInTheDocument();
  expect(await screen.findByTestId("add-to-favourite-cars-card")).toBeInTheDocument();
});

test("CarDetails: Press save button", async () => {
  render(<CarDetails />);
  expect(await screen.findByTestId("add-to-favourite-cars-card")).toBeInTheDocument();
  expect(await screen.findByText("Save")).toBeInTheDocument();

  userEvent.click(screen.getByText("Save"));

  expect(await screen.findByText("Remove")).toBeInTheDocument();
});

// TODO: Add some tests for error in details page
