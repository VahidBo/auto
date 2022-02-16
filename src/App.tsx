import { ThemeProvider } from "@mui/material/styles";
import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { withSuspense } from "./helpers";
import { globalStyles, theme } from "./styles";

const Home = lazy(() => import("src/pages/home"));
const CarDetails = lazy(() => import("./pages/car-details"));
const NotFound = lazy(() => import("./pages/not-found"));

const HomeWithSuspense = withSuspense(<Home />);
const CarDetailsWithSuspense = withSuspense(<CarDetails />);
const NotFoundWithSuspense = withSuspense(<NotFound />);

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={HomeWithSuspense} />
              <Route path="car-details/:stockNumber" element={CarDetailsWithSuspense} />
              <Route path="*" element={NotFoundWithSuspense} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
