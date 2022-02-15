import { SelectChangeEvent } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useCallback, useMemo, useState } from "react";
import { Select, SelectOptionType } from "src/components";
import { FiltersStore, useFiltersStore } from "./useFiltersStore";

const filtersSelector = (s: FiltersStore) => s.setFilters;

export interface FilterCardProps {
  colorOptions: SelectOptionType[];
  manufacturerOptions: SelectOptionType[];
}

export function FilterCard({ colorOptions, manufacturerOptions }: FilterCardProps) {
  const setFilters = useFiltersStore(filtersSelector);
  const [color, setColor] = useState("all");
  const [manufacturer, setManufacturer] = useState("all");

  const preparedColorOptions = useMemo(
    () => [{ label: "All car colors", value: "all" }, ...colorOptions],
    [colorOptions],
  );
  const preparedManufacturerOptions = useMemo(
    () => [{ label: "All manufacturers", value: "all" }, ...manufacturerOptions],
    [manufacturerOptions],
  );

  const onChangeColor = useCallback((event: SelectChangeEvent<string>) => {
    setColor(event.target.value);
  }, []);
  const onChangeManufacturer = useCallback((event: SelectChangeEvent<string>) => {
    setManufacturer(event.target.value);
  }, []);
  const onApplyFilters = useCallback(() => {
    setFilters({ color, manufacturer });
  }, [color, manufacturer, setFilters]);
  return (
    <Card>
      <CardContent>
        <Typography variant="caption" mb={1.5} component="label">
          Color
        </Typography>
        <Select options={preparedColorOptions} value={color} onChange={onChangeColor} sx={{ mb: 1 }} />
        <Typography variant="caption" mb={1.5} mt={2}>
          Manufacturer
        </Typography>
        <Select options={preparedManufacturerOptions} value={manufacturer} onChange={onChangeManufacturer} />
      </CardContent>
      <CardActions>
        <Button onClick={onApplyFilters}>Filter</Button>
      </CardActions>
    </Card>
  );
}
