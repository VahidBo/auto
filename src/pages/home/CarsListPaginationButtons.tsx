import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

export interface CarsListPaginationButtonsProps {
  pagesCount: number;
  currentPage: number;
  onFirstPageButtonPressed: () => void;
  onLastPageButtonPressed: () => void;
  onNextPageButtonPressed: () => void;
  onPreviousPageButtonPressed: () => void;
}

export function CarsListPaginationButtons({
  pagesCount,
  currentPage,
  onFirstPageButtonPressed,
  onLastPageButtonPressed,
  onNextPageButtonPressed,
  onPreviousPageButtonPressed,
}: CarsListPaginationButtonsProps) {
  return (
    <Box sx={{ p: 3, px: { xs: 1, md: 3 }, display: "flex", justifyContent: "center", "& button": { mx: 1.5 } }}>
      <MuiLink component="button" onClick={onFirstPageButtonPressed}>
        First
      </MuiLink>
      <MuiLink component="button" onClick={onPreviousPageButtonPressed}>
        Previous
      </MuiLink>
      <Typography variant="caption" mx={1.5}>
        {pagesCount === 0 ? "Page - of -" : `Page ${currentPage} of ${pagesCount}`}
      </Typography>

      <MuiLink component="button" onClick={onNextPageButtonPressed}>
        Next
      </MuiLink>
      <MuiLink component="button" onClick={onLastPageButtonPressed}>
        Last
      </MuiLink>
    </Box>
  );
}
