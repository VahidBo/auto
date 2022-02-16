import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://auto1-mock-server.herokuapp.com/",
});
