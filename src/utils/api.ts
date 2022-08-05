import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://api.example.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getCoins = async () => {
  const response = await axiosClient.get("/coins");
  return response.data;
};
