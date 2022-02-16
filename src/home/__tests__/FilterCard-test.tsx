import { screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderWithRouter } from "src/helpers";
import { FilterCard } from "../FilterCard";

const queryClient = new QueryClient();

test("Render Filter Card", () => {
  renderWithRouter(
    <QueryClientProvider client={queryClient}>
      <FilterCard />
    </QueryClientProvider>,
  );
  expect(screen.getByText("Color")).toBeInTheDocument();
  expect(screen.getByText("All car colors")).toBeInTheDocument();
  expect(screen.getByText("Manufacturer")).toBeInTheDocument();
  expect(screen.getByText("All manufacturers")).toBeInTheDocument();
  expect(screen.getByText("Filter")).toBeInTheDocument();
});
