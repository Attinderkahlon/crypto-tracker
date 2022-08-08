import { useEffect, useState } from "react";
import { FaChevronCircleDown, FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCoins } from "../../utils/api";
import { Coin } from "../../utils/types";
import StandardCard from "../cards/StandardCard";
import Loader from "../Loader";
import Hero from "./Hero";

const Body = () => {
  const [coins, setCoins] = useState<Coin[]>();
  const [deleteCount, setDeleteCount] = useState(9);
  const [search, setSearch] = useState("");
  const [reverse, setReverse] = useState(false);
  const [activeSort, setActiveSort] = useState("rank");

  useEffect(() => {
    getCoins().then((res) => {
      setCoins(res.data);
    });
  }, []);

  const sortByPrice = (coins: Coin[]) => {
    setCoins(
      reverse
        ? [...coins].sort((a, b) => a.current_price - b.current_price)
        : [...coins].sort((a, b) => b.current_price - a.current_price)
    );
    setReverse(!reverse);
    setActiveSort("price");
  };
  const sortByRank = (coins: Coin[]) => {
    setCoins(
      reverse
        ? [...coins].sort((a, b) => a.market_cap_rank - b.market_cap_rank)
        : [...coins].sort((a, b) => b.market_cap_rank - a.market_cap_rank)
    );
    setReverse(!reverse);
    setActiveSort("rank");
  };
  const sortByName = (coins: Coin[]) => {
    setCoins(
      reverse
        ? [...coins].sort((a, b) => a.name.localeCompare(b.name))
        : [...coins].sort((a, b) => b.name.localeCompare(a.name))
    );
    setReverse(!reverse);
    setActiveSort("name");
  };

  return (
    <>
      <Hero onChangeInput={(e) => setSearch(e.target.value)} onClear={()=>setSearch("")} value={search} />
      <div className="my-8 flex items-end justify-between">
        <h1 className="w-min">Explore blockchains</h1>
        <div className="flex gap-3 [&>span]:flex [&>span]:cursor-pointer [&>span]:items-center">
          <span
            className={`${activeSort === "name" && "text-purple-600"}`}
            onClick={() => coins && sortByName(coins)}
          >
            Name
            <FaSort />
          </span>
          <span
            className={`${activeSort === "rank" && "text-purple-600"}`}
            onClick={() => coins && sortByRank(coins)}
          >
            Rank
            <FaSort />
          </span>
          <span
            className={`${activeSort === "price" && "text-purple-600"}`}
            onClick={() => coins && sortByPrice(coins)}
          >
            Price
            <FaSort />
          </span>
        </div>
      </div>
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
              <Link to={`/${coin.id}`} state={coin} key={coin.id}>
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
                />
              </Link>
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
