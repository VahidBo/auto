import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { capitalizeFirstLetter } from "src/helpers";
import { CarCard, CarCardProps } from "../CarCard";

const mockCarDetails: CarCardProps["carDetails"] = {
  stockNumber: 41400,
  manufacturerName: "Fiat",
  modelName: "Marea",
  mileage: {
    number: 100141,
    unit: "km",
  },
  fuelType: "Diesel",
  color: "white",
  pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
};

test("Render CarCard", () => {
  const { manufacturerName, modelName, stockNumber, mileage, fuelType, color } = mockCarDetails;
  const carInfo = `Stock # ${stockNumber} - ${
    mileage?.number
  } ${mileage?.unit?.toUpperCase()} - ${fuelType} - ${capitalizeFirstLetter(color || "")}`;

  render(<CarCard carDetails={mockCarDetails} />, { wrapper: MemoryRouter });
  expect(screen.getByAltText("car thumbnail")).toBeInTheDocument();
  expect(screen.getByText(`${manufacturerName} ${modelName}`)).toBeInTheDocument();
  expect(screen.getByText(carInfo)).toBeInTheDocument();
  expect(screen.getByText("View details")).toBeInTheDocument();
  expect(screen.getByText("View details").getAttribute("href")).toBe(`/car-details/${stockNumber}`);
});
