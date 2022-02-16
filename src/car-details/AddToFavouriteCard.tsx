import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";

export const FAVOURITE_CARD_TEXT =
  "If you like this car, click the button and save it in your collection of favourite items.";

export function AddToFavouriteCard() {
  const addOrRemoveFromFavourites = useCallback(() => {
    // TODO: Implement the functionality
  }, []);

  return (
    <Card sx={{ width: 300 }}>
      <CardContent sx={{ pb: 1 }}>
        <Typography variant="body2" component="label">
          {FAVOURITE_CARD_TEXT}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={addOrRemoveFromFavourites}>Save</Button>
      </CardActions>
    </Card>
  );
}
