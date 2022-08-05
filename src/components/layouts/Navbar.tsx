import { FaCog, FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-10 w-full h-16 flex">
      <Link to="/" className="flex items-center space-x-2 flex-nowrap">
        <FaCoins className="text-cyan-600 h-6 w-6" />
        <span className="font-semibold flex flex-nowrap">
          COIN <span className="text-cyan-600">TRACE</span>
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
