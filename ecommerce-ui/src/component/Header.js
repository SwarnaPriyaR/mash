import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle.js";


import logo from "../assets/images/logoLight.png";
import cartIcon from "../assets/images/trolley.png";


function Header({ toggleTheme, theme }) {

  const { cartCount } = useContext(CartContext); // ✅ use cartCount
  const location = useLocation();
  const navigate = useNavigate();

  const isCartPage = location.pathname === "/cart";

  return (
    <header className="header">
      {/* LEFT SIDE */}
      {isCartPage ? (
        <button className="theme-btn back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      ) : (
        <Link to="/">
          <img src={logo} alt="Mash Clothing" className="logo" />
        </Link>
      )}

      {/* RIGHT SIDE */}
      <div className="header-right">
        {!isCartPage && (
          <Link to="/cart" className="cart-icon-wrapper">
            <img
              src={cartIcon}
              alt="Cart"
              className="cart-icon-btn"
            />

            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        )}
        <div className="theme-switch">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
