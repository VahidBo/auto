import { SelectChangeEvent } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Select } from "src/components";
import { useColorsList } from "./colorsList.query";
import { useManufacturersList } from "./manufacturersList.query";
import { generateSearchParams, prepareColorOptions, prepareManufacturerOptions } from "./utils";

export function FilterCard() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [color, setColor] = useState(() => searchParams.get("color") || "all");
  const [manufacturer, setManufacturer] = useState(() => searchParams.get("manufacturer") || "all");

  const { data: colorsData } = useColorsList();
  const { data: manufacturersData } = useManufacturersList();

  const preparedColorOptions = useMemo(() => prepareColorOptions(colorsData?.colors), [colorsData?.colors]);
  const preparedManufacturerOptions = useMemo(
    () => prepareManufacturerOptions(manufacturersData?.manufacturers),
    [manufacturersData?.manufacturers],
  );

  const onChangeColor = useCallback((event: SelectChangeEvent<string>) => {
    setColor(event.target.value);
  }, []);
  const onChangeManufacturer = useCallback((event: SelectChangeEvent<string>) => {
    setManufacturer(event.target.value);
  }, []);
  const onApplyFilters = useCallback(() => {
    const page = searchParams.get("page");
    const newSearchParams = generateSearchParams(page, color, manufacturer);
    setSearchParams(newSearchParams);
  }, [color, manufacturer, searchParams, setSearchParams]);

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
