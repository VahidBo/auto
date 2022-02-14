import { Grid } from "@mui/material";
import { FilterCard } from "./FilterCard";

export function Home() {
  return (
    <Grid container spacing={3} p={3}>
      <Grid item xs="auto">
        <FilterCard />
      </Grid>
      <Grid item xs>
        Car list will place here.
      </Grid>
    </Grid>
  );
}
