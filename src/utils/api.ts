import axios from "axios";

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

export const getChartDataByDaysAndId = (coindId: string, daysAgo: number) => {
  return axiosClient.get(
    `/coins/${coindId}/market_chart?vs_currency=aud&days=${daysAgo}&interval=daily`
  );
};
