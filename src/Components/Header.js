import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useNetworkStatus from "../Utils/useNetworkStatus";

const Header = () => {
  const networkStatus = useNetworkStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="brand-logo" src={LOGO_URL} alt="BrandLogo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Internet : {networkStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>🧺</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
