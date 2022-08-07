import AreaSplineChart from "../components/charts/AreaSplineChart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getChartDataByDaysAndId, getCoins } from "../utils/api";
import { chartData, Coin } from "../utils/types";
import { format } from "date-fns";
import { FaArrowUp, FaAtlas, FaShoppingBag } from "react-icons/fa";

const CoinDetail = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState<Coin>();

  const [chartData, setChartData] = useState<chartData>();

  useEffect(() => {
    coinId &&
      getChartDataByDaysAndId(coinId, 30).then((res) => {
        setChartData(res.data);
      });
    getCoins().then((res) => {
      setCoin(res.data?.find((coin: Coin) => coin.id === coinId));
    });
  }, [coinId]);

  const labels = chartData?.prices.map((price) =>
    format(new Date(price[0]), "dd MMMM")
  );

  const data =
    chartData && chartData.prices.map((price) => Math.trunc(price[1]));

  useEffect(() => {
    console.log(coin);
  }, [coin]);

  return (
    <div className="h-full w-full">
      {coin && (
        <div className="mt-10 grid gap-16">
          <div className="mx-auto flex h-20 items-center space-x-4">
            <img src={coin.image} alt={coin.name} className="h-16" />
            <div className="grid h-min">
              <span className="text-sm text-gray-500">{coin.symbol}</span>
              <h1>{coin.name}</h1>
            </div>
            <div className="grid h-min">
              <span className="text-sm text-gray-500">Price (AUD)</span>
              <h1 className="font-semibold">${coin.current_price}</h1>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="flex space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-purple-500">
                <FaShoppingBag />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Market Cap</span>
                <h3>{coin.market_cap}</h3>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-purple-500">
                <FaAtlas />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Max Supply</span>
                <h3>{coin.max_supply}</h3>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-purple-500">
                <FaArrowUp />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Market Rank</span>
                <h3>{coin.market_cap_rank}</h3>
              </div>
            </div>
          </div>
          <div className="my-10">
            {labels && data && <AreaSplineChart labels={labels} data={data} />}
          </div>
        </div>
      )}
    </div>
  );
};
export default CoinDetail;
