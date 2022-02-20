import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import { useFavouriteCars } from "src/hooks";

export const FAVOURITE_CARD_TEXT =
  "If you like this car, click the button and save it in your collection of favourite items.";

export interface AddToFavouriteCardProps {
  stockNumber?: number;
}

export function AddToFavouriteCard({ stockNumber }: AddToFavouriteCardProps) {
  const { favouritCars, addToFavouriteCars, removeFromFavouriteCars } = useFavouriteCars();
  const isFavourite = favouritCars.includes(stockNumber || -1);

  const addOrRemoveFromFavourites = useCallback(() => {
    if (stockNumber) {
      if (isFavourite) {
        removeFromFavouriteCars(stockNumber);
      } else {
        addToFavouriteCars(stockNumber);
      }
    }
  }, [addToFavouriteCars, isFavourite, removeFromFavouriteCars, stockNumber]);

  const buttonText = isFavourite ? "Remove" : "Save";

  return (
    <Box px={1.5} data-testid="add-to-favourite-cars-card">
      <Card sx={{ width: { xs: 1, sm: 300 } }}>
        <CardContent sx={{ pb: 1 }}>
          <Typography variant="body2" component="label">
            {FAVOURITE_CARD_TEXT}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addOrRemoveFromFavourites}>{buttonText}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
