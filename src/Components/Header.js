import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="brand-logo"
            src= {LOGO_URL}
            alt="BrandLogo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>🧺</li>
            <li>Account</li>
            <li>
              <Link to="/about">About US</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default Header  