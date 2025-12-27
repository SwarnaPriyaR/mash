import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";

import cartIcon from "../assets/images/trolley.png";

function Header({ toggleTheme, theme }) {
  const { cartCount } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isCartPage = location.pathname === "/cart";

  return (
    <header className="header">
      <div className="header-left">
        {isCartPage && (
          <button className="theme-btn back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
        )}
      </div>

      <div className="header-right">
        {!isCartPage && (
          <Link to="/cart" className="cart-icon-wrapper">
            <img src={cartIcon} alt="Cart" className="cart-icon-btn" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        )}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}

export default Header;
