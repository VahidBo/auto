import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Select } from "../shared";

const mockOptions = [
  { label: "Opt 1", value: "opt1" },
  { label: "Opt 2", value: "opt2" },
  { label: "Opt 3", value: "opt3" },
];

export function FilterCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="caption" mb={1.5} component="label">
          Color
        </Typography>
        <Select options={mockOptions} sx={{ mb: 1 }} />
        <Typography variant="caption" mb={1.5} mt={2}>
          Manufacturer
        </Typography>
        <Select options={mockOptions} />
      </CardContent>
      <CardActions>
        <Button>Filter</Button>
      </CardActions>
    </Card>
  );
}
