import axios from "axios";
import { Coin } from "./types";

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getCoins = () => {
  return axiosClient.get("/coins/markets?vs_currency=aud&per_page=100");
};
