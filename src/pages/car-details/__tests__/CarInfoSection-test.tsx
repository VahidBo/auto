import { screen } from "@testing-library/react";
import { capitalizeFirstLetter, render } from "src/helpers";
import { mockCar } from "src/__fixtures__/api-mock-responses";
import { CarInfoSection, CarInfoSectionProps } from "../CarInfoSection";

const NOTE_TEXT =
  "This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.";

test("Render CarInfoSection", () => {
  const mockCarDetails = mockCar.data?.car as CarInfoSectionProps["carDetails"];
  const { manufacturerName, modelName, stockNumber, mileage, fuelType, color } = mockCarDetails;
  const carInfo = `Stock # ${stockNumber} - ${
    mileage?.number
  } ${mileage?.unit?.toUpperCase()} - ${fuelType} - ${capitalizeFirstLetter(color || "")}`;

  render(<CarInfoSection carDetails={mockCarDetails} />);
  expect(screen.getByText(`${manufacturerName} ${modelName}`)).toBeInTheDocument();
  expect(screen.getByText(carInfo)).toBeInTheDocument();
  expect(screen.getByText(NOTE_TEXT)).toBeInTheDocument();
});
