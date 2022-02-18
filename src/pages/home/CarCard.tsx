import { CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Link } from "react-router-dom";
import { components } from "src/api";
import { capitalizeFirstLetter } from "src/helpers";

export interface CarCardProps {
  carDetails: components["schemas"]["Car"];
}

export function CarCard({ carDetails }: CarCardProps) {
  const { manufacturerName, modelName, stockNumber, mileage, fuelType, color, pictureUrl } = carDetails;
  return (
    <Card data-testid="car-card">
      <CardContent sx={{ p: 1, "&:last-child": { pb: 1 } }}>
        <Grid container spacing={3}>
          <Grid item xs="auto">
            <Box sx={{ height: 70, width: 83, img: { height: 70, width: 83 } }}>
              <img src={pictureUrl} alt={`${manufacturerName} ${modelName}`} />
            </Box>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">{`${manufacturerName} ${modelName}`}</Typography>
            <Typography variant="caption">
              {`Stock # ${stockNumber} - `}
              {`${mileage?.number} ${mileage?.unit?.toUpperCase()} - `}
              {`${fuelType} - ${capitalizeFirstLetter(color || "")}`}
            </Typography>
            <Box sx={{ mt: 0.5, a: { typography: "caption" } }}>
              <Link to={`car-details/${stockNumber}`}>View details</Link>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
