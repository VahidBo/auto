import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import { CarCard } from "./CarCard";
import { getCarsList, useCarsList } from "./carsList.query";
import { CarsListPaginationButtons } from "./CarsListPaginationButtons";

const PAGES_COUNT_LIMIT = 10;

export function CarsList() {
  const queryClient = useQueryClient();
  const [queryParams] = useSearchParams();

  const page = +(queryParams.get("page") || 1);
  const { status, data, isFetching, isPreviousData } = useCarsList(page);

  const hasMorePage = (data?.totalPageCount || 0) > page && page < PAGES_COUNT_LIMIT;
  const pagesCount = data?.totalPageCount ? Math.min(data.totalPageCount, PAGES_COUNT_LIMIT) : 0;

  // Prefetch the next page!
  useEffect(() => {
    if (hasMorePage) {
      queryClient.prefetchQuery(["carsList", page + 1], () => getCarsList(page + 1));
    }
  }, [hasMorePage, page, queryClient]);

  return (
    <>
      <Typography variant="h6">Available cars</Typography>
      <Typography variant="body1" mb={3}>
        {data?.totalCarsCount ? `Showing 10 of ${Math.min(data.totalCarsCount, 10 * PAGES_COUNT_LIMIT)} results` : "-"}
      </Typography>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={1}>
          {(data?.cars || []).map((car: any) => (
            <Grid item xs={12}>
              <CarCard key={car.stockNumber} carDetails={car} />
            </Grid>
          ))}
        </Grid>
      )}
      <CarsListPaginationButtons
        isPreviousData={isPreviousData}
        hasMorePage={hasMorePage}
        pagesCount={pagesCount}
        currentPage={page}
      />
      {isFetching ? <span> Loading...</span> : null}
    </>
  );
}
