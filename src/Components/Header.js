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
            <li>
              <img
                className="cart-logo"
                src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
                alt="cart"
              />
            </li>
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header  