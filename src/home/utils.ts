import { components } from "src/api";
import { SelectOptionType } from "src/components";
import { capitalizeFirstLetter } from "src/helpers";

export function prepareColorOptions(colors: string[] | undefined): SelectOptionType[] {
  const colorOptions: SelectOptionType[] = [];
  if (colors) {
    colors.forEach((color) => {
      colorOptions.push({ label: capitalizeFirstLetter(color), value: color });
    });
  }
  return [{ label: "All car colors", value: "all" }, ...colorOptions];
}

type Manufacturer = components["schemas"]["Manufacturer"];

export function prepareManufacturerOptions(manufacturers: Manufacturer[] | undefined): SelectOptionType[] {
  const manufacturerOptions: SelectOptionType[] = [];
  if (manufacturers) {
    manufacturers.forEach((m) => {
      manufacturerOptions.push({ label: capitalizeFirstLetter(m.name || ""), value: m.name || "" });
    });
  }
  return [{ label: "All manufacturers", value: "all" }, ...manufacturerOptions];
}
