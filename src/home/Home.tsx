import { Grid } from "@mui/material";
import { SelectOptionType } from "../shared";
import { FilterCard } from "./FilterCard";

const mockColorOptions: SelectOptionType[] = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "White", value: "white" },
];

const mockManufacturereOptions: SelectOptionType[] = [
  { label: "Benz", value: "benz" },
  { label: "BMW", value: "bmw" },
];

export function Home() {
  return (
    <Grid container spacing={3} p={3}>
      <Grid item xs="auto">
        <FilterCard colorOptions={mockColorOptions} manufacturerOptions={mockManufacturereOptions} />
      </Grid>
      <Grid item xs>
        Car list will place here.
      </Grid>
    </Grid>
  );
}
