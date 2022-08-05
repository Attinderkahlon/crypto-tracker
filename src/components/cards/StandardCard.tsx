type Props = {
  name: string;
  image: string;
  changePercentage: number;
  currentPrice: number;
  high24h: number;
  low24h: number;
  marketCap: number;
  marketCapRank: number;
  onCardClick: () => void;
};

const StandardCard = ({
  name,
  image,
  changePercentage,
  currentPrice,
  high24h,
  low24h,
  marketCap,
  marketCapRank,
  onCardClick,
}: Props) => {
  const percentChangeColor =
    changePercentage > 0 ? "text-green-500" : "text-red-500";
  return (
    <div
      onClick={onCardClick}
      className="group cursor-pointer rounded-2xl bg-zinc-900 p-4 text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-500"
    >
      <div className="flex items-center space-x-2">
        <div className="h-12 w-12">
          <img src={image} alt={name} />
        </div>
        <div className="grid text-sm">
          <h3>{name}</h3>
          <div className="flex space-x-2">
            <span>{"AUD " + currentPrice}</span>
            <span className={percentChangeColor}>{changePercentage + "%"}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 grid [&>*>span]:text-sm [&>*>span]:text-gray-400 group-hover:[&>*>span]:text-white [&>*]:flex [&>*]:justify-between">
        <div>
          <span>High (24h)</span>
          <p>{high24h}</p>
        </div>
        <div>
          <span>Low (24h)</span>
          <p>{low24h}</p>
        </div>
        <div>
          <span>Market Cap</span>
          <p>{marketCap}</p>
        </div>
        <div>
          <span>Market Cap Rank</span>
          <p>{marketCapRank}</p>
        </div>
      </div>
    </div>
  );
};
export default StandardCard;
