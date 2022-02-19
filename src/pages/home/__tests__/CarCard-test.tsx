import { screen } from "@testing-library/react";
import { capitalizeFirstLetter, render } from "src/helpers";
import { mockCar } from "src/__fixtures__/api-mock-responses";
import { CarCard, CarCardProps } from "../CarCard";

test("Render CarCard", () => {
  const mockCarDetails = mockCar.data?.car as CarCardProps["carDetails"];
  const { manufacturerName, modelName, stockNumber, mileage, fuelType, color } = mockCarDetails;
  const carInfo = `Stock # ${stockNumber} - ${
    mileage?.number
  } ${mileage?.unit?.toUpperCase()} - ${fuelType} - ${capitalizeFirstLetter(color || "")}`;

  render(<CarCard carDetails={mockCarDetails} />);
  expect(screen.getByAltText(`${manufacturerName} ${modelName}`)).toBeInTheDocument();
  expect(screen.getByText(`${manufacturerName} ${modelName}`)).toBeInTheDocument();
  expect(screen.getByText(carInfo)).toBeInTheDocument();
  expect(screen.getByText("View details")).toBeInTheDocument();
  expect(screen.getByText("View details").getAttribute("href")).toBe(`/car-details/${stockNumber}`);
});
