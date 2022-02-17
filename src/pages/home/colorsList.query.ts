import { useQuery } from "react-query";
import { axios, paths } from "src/api";

export type ColorsListResponseType = paths["/api/colors"]["get"]["responses"]["200"]["content"]["application/json"];

export function getColorsList() {
  return axios.get<ColorsListResponseType>("/api/colors").then(({ data }) => data);
}

export function useColorsList() {
  return useQuery("colorsList", getColorsList);
}
