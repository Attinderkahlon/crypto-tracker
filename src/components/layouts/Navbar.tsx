import { FaCog, FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-10 flex h-16 w-full justify-between">
      <Link to="/" className="flex flex-nowrap items-center space-x-2">
        <FaCoins className="h-10 w-10 text-purple-600" />
        <span className="flex flex-nowrap font-semibold">
          COIN <span className="text-purple-600">TRACE</span>
        </span>
      </Link>
      <div className="flex space-x-6">
        <Link to="/profile" className="flex items-center">
          Profile
        </Link>
        <Link to="/wallet" className="flex items-center">
          Wallet
        </Link>
        <div className="flex items-center">
          <FaCog />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
