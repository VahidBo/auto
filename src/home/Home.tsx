import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="car-details/123">Go to car datails page</Link>
    </div>
  );
}
