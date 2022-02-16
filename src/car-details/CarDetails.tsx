import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useParams } from "react-router";
import { AddToFavouriteCard } from "./AddToFavouriteCard";
import { useCarDetails } from "./carDetails.query";
import { CarInfoSection } from "./CarInfoSection";

export function CarDetails() {
  const { stockNumber } = useParams();
  const { data, isLoading, error } = useCarDetails({ stockNumber: +(stockNumber || -1) });

  if (isLoading) {
    return <div>"Loading..."</div>;
  }
  if (error || !data || !data.car) {
    console.log(error);
    return <div>"error"</div>;
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
        <Grid item xs="auto">
          <AddToFavouriteCard />
        </Grid>
      </Grid>
    </Box>
  );
}
