import { Grid, Skeleton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

export function CarDetailsLoading() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      data-testid="car-details-page-skeleton"
    >
      <Box sx={{ backgroundColor: grey["A200"], width: 1, height: 300 }} />
      <Grid container spacing={3} maxWidth={800} mt={3}>
        <Grid item xs>
          <Typography variant="h4">
            <Skeleton animation="wave" width="50%" />
          </Typography>
          <Typography variant="body1">
            <Skeleton animation="wave" width="80%" />
          </Typography>
          <Skeleton animation="wave">
            <Typography variant="body2" mb={3}>
              This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that
              delivery times shown in this page are not definitive and may change due to bad weather conditions.
            </Typography>
          </Skeleton>
        </Grid>
        <Grid item xs="auto">
          <Skeleton animation="wave" width={240} height={150} />
        </Grid>
      </Grid>
    </Box>
  );
}
