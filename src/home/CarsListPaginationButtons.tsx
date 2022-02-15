import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export interface CarsListPaginationButtonsProps {
  isPreviousData: boolean;
  hasMorePage: boolean;
  pagesCount: number;
  currentPage: number;
}

export function CarsListPaginationButtons({
  isPreviousData,
  hasMorePage,
  pagesCount,
  currentPage,
}: CarsListPaginationButtonsProps) {
  const [, setQueryParams] = useSearchParams();

  const onFirstPageButtonPressed = useCallback(() => {
    // TODO: Be aware of other filters
    setQueryParams({ page: "1" });
  }, [setQueryParams]);

  const onLastPageButtonPressed = useCallback(() => {
    // TODO: Be aware of other filters
    setQueryParams({ page: `${pagesCount}` });
  }, [pagesCount, setQueryParams]);

  const onNextPageButtonPressed = useCallback(() => {
    if (!isPreviousData && hasMorePage) {
      // TODO: Be aware of other filters
      setQueryParams({ page: `${currentPage + 1}` });
    }
  }, [hasMorePage, isPreviousData, currentPage, setQueryParams]);

  const onPreviousPageButtonPressed = useCallback(() => {
    if (currentPage > 1) {
      // TODO: Be aware of other filters
      setQueryParams({ page: `${currentPage - 1}` });
    }
  }, [currentPage, setQueryParams]);

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center", "& button": { mx: 1.5 } }}>
      <MuiLink component="button" onClick={onFirstPageButtonPressed}>
        First
      </MuiLink>
      <MuiLink component="button" onClick={onPreviousPageButtonPressed}>
        Previous
      </MuiLink>
      <Typography variant="caption" mx={1.5}>{`Page ${currentPage} of ${pagesCount}`}</Typography>
      <MuiLink component="button" onClick={onNextPageButtonPressed}>
        Next
      </MuiLink>
      <MuiLink component="button" onClick={onLastPageButtonPressed}>
        Last
      </MuiLink>
    </Box>
  );
}
