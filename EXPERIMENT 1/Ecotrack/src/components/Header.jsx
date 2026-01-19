import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (

    <header className="bg-gradient-to-r from-emerald-600 to-green-500 text-white py-4 shadow-md">
      <h1 className="text-center text-2xl md:text-3xl font-bold tracking-wide">
        {title}
      </h1>
      <Link to="/" className="absolute left-4 top-4 text-white hover:underline text-sm md:text-base">
        Home
      </Link>
      <Link to="/log" className="absolute right-4 top-4 text-white hover:underline text-sm md:text-base">
        View Logs
      </Link>
    </header>
  );
};

export default Header;
