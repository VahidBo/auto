import { render, screen } from "@testing-library/react";
import { SelectOptionType } from "../../shared";
import { FilterCard } from "../FilterCard";

const mockColorOptions: SelectOptionType[] = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "White", value: "white" },
];

const mockManufacturereOptions: SelectOptionType[] = [
  { label: "Benz", value: "benz" },
  { label: "BMW", value: "bmw" },
];

// TODO: Complete this test
test("Render Filter Card", () => {
  render(<FilterCard colorOptions={mockColorOptions} manufacturerOptions={mockManufacturereOptions} />);
  expect(screen.getByText("Color")).toBeInTheDocument();
  expect(screen.getByText("All car colors")).toBeInTheDocument();
  expect(screen.getByText("Manufacturer")).toBeInTheDocument();
  expect(screen.getByText("All manufacturers")).toBeInTheDocument();
  expect(screen.getByText("Filter")).toBeInTheDocument();
});
