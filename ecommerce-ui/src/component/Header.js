import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logoLight.png";

function Header({ toggleTheme, theme, cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isCartPage = location.pathname === "/cart";

  return (
    <header className="header">
      {/* LEFT SIDE */}
      {isCartPage ? (
        <button className="theme-btn" onClick={() => navigate(-1)}>
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
          <Link to="/cart">
            <button className="theme-btn">
              Cart {cartCount > 0 && `(${cartCount})`}
            </button>
          </Link>
        )}

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
}

export default Header;
