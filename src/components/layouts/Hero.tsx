import { ChangeEvent } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

type Props = {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  value: string;
};

const Hero = ({ onChangeInput, onClear, value }: Props ) => {
  return (
    <div className="hero-bg-img flex h-80 w-full">
      <div className="my-auto w-full">
        <div className="grid max-w-sm gap-2">
          <h1 className="font-bold leading-none">
            Blockchain explorer, analytics and web services
          </h1>
          <p>Explore data stored on 19 blockchains</p>
        </div>
        <div className="group relative mt-6">
          <input
            onChange={onChangeInput}
            placeholder="Search crypto"
            type="text"
            value={value}
            className="w-full rounded-lg border border-purple-700 bg-gray-800 p-2.5 text-sm text-white"
          /> 
          <FaSearch className="absolute right-12 top-1/2 -translate-y-1/2 hover:text-purple-500" /> 
          <FaTimes  onClick={onClear} className="absolute right-1 top-1/2 -translate-y-1/2 hover:text-purple-900" />
        </div>
        <p className="mt-2 text-xs">
          Search examples: Bitcoin, Etherium, Doge, etc.
        </p>
      </div>
    </div>
  );
};
export default Hero;
