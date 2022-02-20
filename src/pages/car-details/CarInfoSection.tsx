import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { components } from "src/api";
import { capitalizeFirstLetter } from "src/helpers";

export interface CarInfoSectionProps {
  carDetails: components["schemas"]["Car"];
}

export function CarInfoSection({ carDetails }: CarInfoSectionProps) {
  const { manufacturerName, modelName, stockNumber, mileage, fuelType, color } = carDetails;
  return (
    <Box px={1.5} data-testid="car-info-section">
      <Typography variant="h4" mb={3}>{`${manufacturerName} ${modelName}`}</Typography>
      <Typography variant="body1" mb={3}>
        {`Stock # ${stockNumber} - `}
        {`${mileage?.number} ${mileage?.unit?.toUpperCase()} - `}
        {`${fuelType} - ${capitalizeFirstLetter(color || "")}`}
      </Typography>
      <Typography variant="body2" mb={3}>
        This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery
        times shown in this page are not definitive and may change due to bad weather conditions.
      </Typography>
    </Box>
  );
}
