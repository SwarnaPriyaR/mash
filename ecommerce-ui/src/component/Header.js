import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";

import logoLight from "../assets/images/logoLight.png";
import logoDark from "../assets/images/logoDark.png";
import cartIcon from "../assets/images/trolley.png";

function Header({ toggleTheme, theme }) {
  const { cartCount } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  const isCartPage = path === "/cart";

  // show logo ONLY on product list & product detail pages
  const showLogo =
    path === "/products" || path.startsWith("/product/");

  const logo = theme === "dark" ? logoDark : logoLight;

  return (
    <header className="header">
      {/* LEFT SIDE */}
      <div className="header-left">
        {isCartPage && (
          <button className="theme-btn back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
        )}

        {!isCartPage && showLogo && (
          <Link to="/">
            <img src={logo} alt="Mash Clothing" className="header-logo" />
          </Link>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">
        {!isCartPage && (
          <Link to="/cart" className="cart-icon-wrapper">
            <img src={cartIcon} alt="Cart" className="cart-icon-btn" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        )}

        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}

export default Header;
