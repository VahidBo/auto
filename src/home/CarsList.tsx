import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { CarCard } from "./CarCard";
import { getCarsList, useCarsList } from "./carsList.query";

export function CarsList() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const { status, data, isFetching, isPreviousData } = useCarsList(page);

  const hasMore = data?.totalPageCount || 0 > page;

  // Prefetch the next page!
  useEffect(() => {
    if (hasMore) {
      queryClient.prefetchQuery(["carsList", page + 1], () => getCarsList(page + 1));
    }
  }, [hasMore, page, queryClient]);

  return (
    <>
      <Typography variant="h6">Available cars</Typography>
      <Typography variant="body1" mb={3}>
        Showing 10 of 100 results
      </Typography>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <>
          {(data?.cars || []).map((car: any) => (
            <CarCard key={"some"} carDetails={car} />
          ))}
        </>
      )}
      <div>Current Page: {page + 1}</div>
      <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          setPage((old) => (hasMore ? old + 1 : old));
        }}
        disabled={isPreviousData || !hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}
    </>
  );
}
