import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { Select, SelectOptionType } from "src/components";

export interface FilterCardProps {
  colorOptions: SelectOptionType[];
  manufacturerOptions: SelectOptionType[];
}

export function FilterCard({ colorOptions, manufacturerOptions }: FilterCardProps) {
  const preparedColorOptions = useMemo(
    () => [{ label: "All car colors", value: "all" }, ...colorOptions],
    [colorOptions],
  );
  const preparedManufacturerOptions = useMemo(
    () => [{ label: "All manufacturers", value: "all" }, ...manufacturerOptions],
    [manufacturerOptions],
  );
  return (
    <Card>
      <CardContent>
        <Typography variant="caption" mb={1.5} component="label">
          Color
        </Typography>
        <Select options={preparedColorOptions} value="all" sx={{ mb: 1 }} />
        <Typography variant="caption" mb={1.5} mt={2}>
          Manufacturer
        </Typography>
        <Select options={preparedManufacturerOptions} value="all" />
      </CardContent>
      <CardActions>
        <Button>Filter</Button>
      </CardActions>
    </Card>
  );
}
