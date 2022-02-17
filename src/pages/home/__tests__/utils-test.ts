import { generateSearchParams, prepareColorOptions, prepareManufacturerOptions } from "../utils";

it("Test cases of prepareColorOptions", () => {
  const defaultOption = { label: "All car colors", value: "all" };
  expect(prepareColorOptions(undefined)).toEqual([defaultOption]);
  expect(prepareColorOptions([])).toEqual([defaultOption]);
  expect(prepareColorOptions(["red"])).toEqual([defaultOption, { label: "Red", value: "red" }]);
  expect(prepareColorOptions(["Red"])).toEqual([defaultOption, { label: "Red", value: "Red" }]);
  expect(prepareColorOptions(["red", "yellow", "blue"])).toEqual([
    defaultOption,
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
    { label: "Blue", value: "blue" },
  ]);
});

it("Test cases of prepareManufacturerOptions", () => {
  const defaultOption = { label: "All manufacturers", value: "all" };
  expect(prepareManufacturerOptions(undefined)).toEqual([defaultOption]);
  expect(prepareManufacturerOptions([])).toEqual([defaultOption]);
  expect(prepareManufacturerOptions([{ name: "benz" }])).toEqual([defaultOption, { label: "Benz", value: "benz" }]);
  expect(prepareManufacturerOptions([{ name: "Benz" }])).toEqual([defaultOption, { label: "Benz", value: "Benz" }]);
  expect(prepareManufacturerOptions([{ name: "Benz" }, { name: "BMW" }])).toEqual([
    defaultOption,
    { label: "Benz", value: "Benz" },
    { label: "BMW", value: "BMW" },
  ]);
});

it("Test of generateSearchParams", () => {
  expect(generateSearchParams(null, null, null)).toEqual({});
  expect(generateSearchParams("1", null, null)).toEqual({ page: "1" });
  expect(generateSearchParams("1", "red", null)).toEqual({ page: "1", color: "red" });
  expect(generateSearchParams(null, "red", "benz")).toEqual({ color: "red", manufacturer: "benz" });
  expect(generateSearchParams("3", "red", "benz")).toEqual({ page: "3", color: "red", manufacturer: "benz" });
});
