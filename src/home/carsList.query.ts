import { useQuery } from "react-query";
import { axios, paths } from "src/api";

export type CarsListResponseType = paths["/api/cars"]["get"]["responses"]["200"]["content"]["application/json"];

export function getCarsList(page = 0) {
  return axios.get<CarsListResponseType>("/api/cars", { params: { page } }).then(({ data }) => data);
}

export function useCarsList(page = 0) {
  return useQuery(["carsList", page], () => getCarsList(page), { keepPreviousData: true, staleTime: 60 * 1000 });
}
