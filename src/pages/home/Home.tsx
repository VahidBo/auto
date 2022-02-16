import { Grid } from "@mui/material";
import { FilterCard } from "./FilterCard";
import { CarsList } from "./CarsList";

export function Home() {
  return (
    <Grid container spacing={3} p={3} pb={0}>
      <Grid item xs={12} md="auto">
        <FilterCard />
      </Grid>
      <Grid item xs>
        <CarsList />
      </Grid>
    </Grid>
  );
}
