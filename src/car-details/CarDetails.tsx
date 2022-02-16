import { useParams } from "react-router";
import { useCarDetails } from "./carDetails.query";

export function CarDetails() {
  const { stockNumber } = useParams();
  const { data } = useCarDetails({ stockNumber: +(stockNumber || -1) });
  console.log(data);
  return <div>Car details page</div>;
}
