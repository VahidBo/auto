import { Grid } from "@mui/material";
import { SelectOptionType } from "src/components";
import { CarsList } from "./CarsList";
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
    <Grid container spacing={3} p={3} pb={0}>
      <Grid item xs="auto">
        <FilterCard colorOptions={mockColorOptions} manufacturerOptions={mockManufacturereOptions} />
      </Grid>
      <Grid item xs>
        <CarsList />
      </Grid>
    </Grid>
  );
}
