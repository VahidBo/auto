import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect } from "react";
import { useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import { CarCard } from "./CarCard";
import { getCarsList, useCarsList } from "./carsList.query";
import { CarsListPaginationButtons } from "./CarsListPaginationButtons";
import { CarsListSkeleton } from "./CarsListSkeleton";
import { generateSearchParams } from "./utils";

const PAGES_COUNT_LIMIT = 10;

export function CarsList() {
  const queryClient = useQueryClient();
  const [queryParams, setQueryParams] = useSearchParams();

  const page = +(queryParams.get("page") || 1);
  const color = queryParams.get("color") || "";
  const manufacturer = queryParams.get("manufacturer") || "";

  const { status, data, isFetching, isPreviousData } = useCarsList({ page, color, manufacturer });

  const hasMorePage = (data?.totalPageCount || 0) > page && page < PAGES_COUNT_LIMIT;
  const pagesCount = data?.totalPageCount ? Math.min(data.totalPageCount, PAGES_COUNT_LIMIT) : 0;

  // Prefetch the next page!
  useEffect(() => {
    if (hasMorePage) {
      const params = { page: page + 1, color, manufacturer };
      queryClient.prefetchQuery(["carsList", page + 1, color, manufacturer], () => getCarsList(params), {
        staleTime: 60 * 1000,
      });
    }
  }, [color, hasMorePage, manufacturer, page, queryClient]);

  const onFirstPageButtonPressed = useCallback(() => {
    const newParams = generateSearchParams("1", color, manufacturer);
    setQueryParams(newParams);
  }, [color, manufacturer, setQueryParams]);

  const onLastPageButtonPressed = useCallback(() => {
    const newParams = generateSearchParams(`${pagesCount}`, color, manufacturer);
    setQueryParams(newParams);
  }, [color, manufacturer, pagesCount, setQueryParams]);

  const onNextPageButtonPressed = useCallback(() => {
    if (!isPreviousData && hasMorePage) {
      const newParams = generateSearchParams(`${page + 1}`, color, manufacturer);
      setQueryParams(newParams);
    }
  }, [color, hasMorePage, isPreviousData, manufacturer, page, setQueryParams]);

  const onPreviousPageButtonPressed = useCallback(() => {
    if (page > 1) {
      const newParams = generateSearchParams(`${page - 1}`, color, manufacturer);
      setQueryParams(newParams);
    }
  }, [color, manufacturer, page, setQueryParams]);

  return (
    <>
      <Typography variant="h6">Available cars</Typography>
      <Typography variant="body1" mb={3}>
        {data?.totalCarsCount
          ? `Showing ${data.cars?.length} of ${Math.min(data.totalCarsCount, 10 * PAGES_COUNT_LIMIT)} results`
          : "-"}
      </Typography>
      {status === "loading" || isFetching ? (
        <CarsListSkeleton />
      ) : (
        <Grid container spacing={1}>
          {(data?.cars || []).map((car: any) => (
            <Grid item xs={12} key={car.stockNumber}>
              <CarCard carDetails={car} />
            </Grid>
          ))}
        </Grid>
      )}
      <CarsListPaginationButtons
        pagesCount={pagesCount}
        currentPage={page}
        onFirstPageButtonPressed={onFirstPageButtonPressed}
        onLastPageButtonPressed={onLastPageButtonPressed}
        onNextPageButtonPressed={onNextPageButtonPressed}
        onPreviousPageButtonPressed={onPreviousPageButtonPressed}
      />
    </>
  );
}
