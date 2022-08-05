import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="h-80 w-full flex hero-bg-img">
      <div className="my-auto w-full">
        <div className="max-w-sm grid gap-2">
          <h1 className="font-bold leading-none">
            Blockchain explorer, analytics and web services
          </h1>
          <p>Explore data stored on 19 blockchains</p>
        </div>
        <div className="relative group mt-6">
          <input
            placeholder="Search crypto"
            type="text"
            className="bg-gray-800 border border-cyan-700 text-white text-sm rounded-lg w-full p-2.5"
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 group-hover:text-cyan-500" />
        </div>
        <p className="text-xs mt-2">
          Search examples: ** Create Random Words Fn **
        </p>
      </div>
    </div>
  );
};
export default Hero;
