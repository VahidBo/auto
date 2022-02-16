import { useQuery } from "react-query";
import { axios, paths } from "src/api";

export type CarsListResponseType = paths["/api/cars"]["get"]["responses"]["200"]["content"]["application/json"];
export type CarsListParamsType = paths["/api/cars"]["get"]["parameters"]["query"];

export function getCarsList(params: CarsListParamsType) {
  return axios.get<CarsListResponseType>("/api/cars", { params }).then(({ data }) => data);
}

export function useCarsList(params: CarsListParamsType) {
  const { page, color, manufacturer } = params;
  return useQuery(["carsList", page, color, manufacturer], () => getCarsList(params), {
    keepPreviousData: true,
    staleTime: 60 * 1000,
  });
}
