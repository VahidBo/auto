import { CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const ARRAY_WITH_TEN_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function CarsListSkeleton() {
  return (
    <Grid container spacing={1}>
      {ARRAY_WITH_TEN_ITEMS.map((item) => (
        <Grid key={item} item xs={12}>
          <Card>
            <CardContent sx={{ p: 1, "&:last-child": { pb: 1 } }}>
              <Grid container spacing={3}>
                <Grid item xs="auto">
                  <Skeleton animation="wave" sx={{ transform: "scale(1, 1)" }} width={83} height={70} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6" component="div">
                    <Skeleton animation="wave" width="70%" />
                  </Typography>
                  <Typography variant="caption" component="div">
                    <Skeleton animation="wave" width="70%" />
                  </Typography>
                  <Typography variant="caption" component="div">
                    <Skeleton animation="wave" width={70} />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
