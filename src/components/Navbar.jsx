import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="bg-black text-white p-4 flex flex-wrap justify-evenly items-center">
      <Link
        to="/"
        className="text-lg font-bold text-white hover:text-red-600 transition-colors"
      >
        MovieDB
      </Link>
      <div className="flex flex-wrap items-center">
        <Link
          className="p-2 text-white hover:text-red-600 transition-colors"
          to="/"
        >
          Popular
        </Link>
        <Link
          className="p-2 text-white hover:text-red-600 transition-colors"
          to="/top-rated"
        >
          Top Rated
        </Link>
        <Link
          className="p-2 text-white hover:text-red-600 transition-colors"
          to="/upcoming"
        >
          Upcoming
        </Link>
      </div>
      <Search onResults={onSearch} />
    </nav>
  );
};

export default Navbar;
