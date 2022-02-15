import { CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Link } from "react-router-dom";

export function CarCard() {
  return (
    <Card>
      <CardContent sx={{ p: 1, "&:last-child": { pb: 1 } }}>
        <Grid container rowSpacing={3}>
          <Grid item xs="auto">
            <img src="#" alt="car thumbnail" />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Car Name</Typography>
            <Typography variant="caption">Stock # 61184 - 152.263 KM - Petrol - Yellow</Typography>
            <Box mt={0.5}>
              <Link to="/">
                <MuiLink>View details</MuiLink>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
