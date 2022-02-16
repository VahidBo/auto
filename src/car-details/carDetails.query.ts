import { useQuery } from "react-query";
import { axios, paths } from "src/api";

export type CarDetailsResponseType =
  paths["/api/cars/{stockNumber}"]["get"]["responses"]["200"]["content"]["application/json"];
export type CarDetailsParametersType = paths["/api/cars/{stockNumber}"]["get"]["parameters"]["path"];

export function getCarDetails({ stockNumber }: CarDetailsParametersType) {
  return axios.get<CarDetailsResponseType>(`/api/cars/${stockNumber}`).then(({ data }) => data);
}

export function useCarDetails({ stockNumber }: CarDetailsParametersType) {
  return useQuery(["carDetails", stockNumber], () => getCarDetails({ stockNumber }));
}
