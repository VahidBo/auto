import { useQuery } from "react-query";
import { axios, paths } from "src/api";

export type ManufacturersListResponseType =
  paths["/api/manufacturers"]["get"]["responses"]["200"]["content"]["application/json"];

export function getManufacturersList() {
  return axios.get<ManufacturersListResponseType>("/api/manufacturers").then(({ data }) => data);
}

export function useManufacturersList() {
  return useQuery("manufacturersList", () => getManufacturersList());
}
