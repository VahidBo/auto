import { screen } from "@testing-library/react";
import { capitalizeFirstLetter, renderWithRouter } from "src/helpers";
import { CarInfoSection, CarInfoSectionProps } from "../CarInfoSection";

const mockCarDetails: CarInfoSectionProps["carDetails"] = {
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

const NOTE_TEXT =
  "This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.";

test("Render CarInfoSection", () => {
  const { manufacturerName, modelName, stockNumber, mileage, fuelType, color } = mockCarDetails;
  const carInfo = `Stock # ${stockNumber} - ${
    mileage?.number
  } ${mileage?.unit?.toUpperCase()} - ${fuelType} - ${capitalizeFirstLetter(color || "")}`;

  renderWithRouter(<CarInfoSection carDetails={mockCarDetails} />);
  expect(screen.getByText(`${manufacturerName} ${modelName}`)).toBeInTheDocument();
  expect(screen.getByText(carInfo)).toBeInTheDocument();
  expect(screen.getByText(NOTE_TEXT)).toBeInTheDocument();
});
