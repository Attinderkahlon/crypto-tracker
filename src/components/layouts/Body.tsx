import { useEffect, useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { getCoins } from "../../utils/api";
import { Coin } from "../../utils/types";
import StandardCard from "../cards/StandardCard";
import Loader from "../Loader";
import Hero from "./Hero";

const Body = () => {
  const [coins, setCoins] = useState<Coin[]>();
  const [deleteCount, setDeleteCount] = useState(9);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCoins().then((res) => {
      setCoins(res.data);
      console.log("COINS", res.data);
    });
  }, []);

  return (
    <>
      <Hero onChangeInput={(e) => setSearch(e.target.value)} />
      <h1 className="my-6">Explore blockchains</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {!coins ? (
          <Loader />
        ) : (
          coins
            .filter((coin) =>
              coin.name.toLowerCase().includes(search.toLowerCase())
            )
            .splice(0, deleteCount)
            .map((coin) => (
              <StandardCard
                image={coin.image}
                name={coin.name}
                key={coin.name}
                changePercentage={parseFloat(
                  coin.price_change_percentage_24h.toFixed(2)
                )}
                currentPrice={coin.current_price}
                high24h={coin.high_24h}
                low24h={coin.low_24h}
                marketCap={coin.market_cap}
                marketCapRank={coin.market_cap_rank}
                onCardClick={() => console.log(coin)}
              />
            ))
        )}
      </div>
      <div className="mb-10 mt-4 flex select-none justify-end">
        <div
          className="group flex cursor-pointer items-center space-x-1 hover:text-purple-500"
          onClick={() => setDeleteCount(deleteCount + 6)}
        >
          <span>Show more</span>
          <FaChevronCircleDown className="group-hover:animate-bounce" />
        </div>
      </div>
    </>
  );
};

export default Body;
