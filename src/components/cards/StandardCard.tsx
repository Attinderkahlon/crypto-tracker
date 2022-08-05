type Props = {
  name: string;
  image: string;
  onCardClick: () => void;
};

const StandardCard = ({ name, image, onCardClick }: Props) => {
  return (
    <div
      onClick={onCardClick}
      className="group cursor-pointer rounded-2xl bg-zinc-900 p-4 text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-500"
    >
      <div className="flex items-center space-x-2">
        <div className="h-12 w-12">
          <img src={image} alt={name} />
        </div>
        <div className="grid">
          <h3>{name}</h3>
          <div className="flex space-x-2">
            <span>$1001</span>
            <span>3%</span>
          </div>
        </div>
      </div>
      <div className="mt-3 grid [&>*>span]:text-gray-400 group-hover:[&>*>span]:text-white">
        <div className="flex justify-between">
          <span>Some option</span>
          <p>12345</p>
        </div>
        <div className="flex justify-between">
          <span>Some option</span>
          <p>12345</p>
        </div>
        <div className="flex justify-between">
          <span>Some option</span>
          <p>12345</p>
        </div>
        <div className="flex justify-between">
          <span>Some option</span>
          <p>12345</p>
        </div>
      </div>
    </div>
  );
};
export default StandardCard;
