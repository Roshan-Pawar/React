import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useNetworkStatus from "../Utils/useNetworkStatus";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const networkStatus = useNetworkStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-md">
      <div>
        <img className="w-56" src={LOGO_URL} alt="BrandLogo" />
      </div>
      <div>
        <ul className="flex my-10">
          <li className="px-3 hover:cursor-text">
            Internet : {networkStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-3 hover:text-pink-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 hover:text-pink-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 hover:text-pink-400">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-3 font-semibold hover:text-pink-400">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
