import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarDetails } from "./car-details";
import { Home } from "./home";
import { Layout } from "./layout";
import { NotFound } from "./not-found/NotFound";
import { globalStyles, theme } from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="car-details/:carId" element={<CarDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
