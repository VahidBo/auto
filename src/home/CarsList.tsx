import Typography from "@mui/material/Typography";
import { CarCard } from "./CarCard";

export function CarsList() {
  return (
    <>
      <Typography variant="h6">Available cars</Typography>
      <Typography variant="body1" mb={3}>
        Showing 10 of 100 results
      </Typography>
      <CarCard />
    </>
  );
}
