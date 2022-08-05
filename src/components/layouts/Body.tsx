import { useEffect, useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { getCoins } from "../../utils/api";
import { Coin } from "../../utils/types";
import StandardCard from "../cards/StandardCard";

const Body = () => {
  const [coins, setCoins] = useState<Coin[]>();
  const [deleteCount, setDeleteCount] = useState(9);

  useEffect(() => {
    getCoins().then((res) => {
      setCoins(res.data);
      console.log("COINS", res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="my-6">Explore blockchains</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coins?.splice(0, deleteCount).map((coin) => (
          <StandardCard
            image={coin.image}
            name={coin.name}
            key={coin.name}
            onCardClick={() => console.log(coin)}
          />
        ))}
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
    </div>
  );
};

export default Body;
