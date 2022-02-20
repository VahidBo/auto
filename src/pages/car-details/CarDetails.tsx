import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";
import Box from "@mui/system/Box";
import { useParams } from "react-router-dom";
import { AddToFavouriteCard } from "./AddToFavouriteCard";
import { useCarDetails } from "./carDetails.query";
import { CarDetailsLoading } from "./CarDetailsLoading";
import { CarInfoSection } from "./CarInfoSection";
import { CarDetailsError } from "./CarDetailsError";

export function CarDetails() {
  const { stockNumber } = useParams();
  const { data, isLoading, error, refetch } = useCarDetails({ stockNumber: +(stockNumber || -1) });

  if (isLoading) {
    return <CarDetailsLoading />;
  }
  if (error || !data || !data.car) {
    return <CarDetailsError refetch={refetch} />;
  }
  const { car } = data;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box
        sx={{
          backgroundImage: `url(${car?.pictureUrl})`,
          backgroundSize: "cover",
          backgroundColor: grey["A200"],
          width: 1,
          height: 300,
        }}
      />
      <Grid container spacing={3} maxWidth={800} mt={3}>
        <Grid item xs>
          <CarInfoSection carDetails={car} />
        </Grid>
        <Grid item xs={12} sm="auto">
          <AddToFavouriteCard stockNumber={car.stockNumber} />
        </Grid>
      </Grid>
    </Box>
  );
}
