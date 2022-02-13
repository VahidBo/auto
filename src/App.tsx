import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarDetails } from "./car-details";
import { Home } from "./home";
import { Layout } from "./layout";
import { NotFound } from "./not-found/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="car-details/:carId" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
