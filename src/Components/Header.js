import { LOGO_URL } from "../Utils/Constants";

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
            <li>Home</li>
            <li>🧺</li>
            <li>Account</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header  