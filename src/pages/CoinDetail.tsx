import AreaSplineChart from "../components/charts/AreaSplineChart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getChartDataByDaysAndId, getCoins } from "../utils/api";
import { chartData, Coin } from "../utils/types";
import { format } from "date-fns";
import NotFound from "./NotFound";

const CoinDetail = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState<Coin>();

  const [chartData, setChartData] = useState<chartData>();

  useEffect(() => {
    console.log(coinId);
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
    <>
      {chartData ? (
        <div className="h-full w-full">
          <h1>Coin Detail</h1>
          {coin && (
            <div className="grid">
              <div className="flex h-20 w-full items-center space-x-4 border-2">
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
            </div>
          )}
          {labels && data && <AreaSplineChart labels={labels} data={data} />}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};
export default CoinDetail;
