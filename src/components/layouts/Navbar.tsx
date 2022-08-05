import { FaCog, FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-10 flex h-16 w-full">
      <Link to="/" className="flex flex-nowrap items-center space-x-2">
        <FaCoins className="h-6 w-6 text-purple-600" />
        <span className="flex flex-nowrap font-semibold">
          COIN <span className="text-purple-600">TRACE</span>
        </span>
      </Link>
      <div className="flex w-full justify-center space-x-6">
        <Link to="/" className="flex items-center">
          Option A
        </Link>
        <Link to="/" className="flex items-center">
          Option B
        </Link>
        <div className="flex items-center">
          <FaCog />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
