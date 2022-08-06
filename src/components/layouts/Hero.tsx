import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Hero = ({ onChangeInput }: Props) => {
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
            className="w-full rounded-lg border border-purple-700 bg-gray-800 p-2.5 text-sm text-white"
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 group-hover:text-purple-500" />
        </div>
        <p className="mt-2 text-xs">
          Search examples: ** Create Random Words Fn **
        </p>
      </div>
    </div>
  );
};
export default Hero;
