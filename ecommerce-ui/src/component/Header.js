import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const isHome = location.pathname === "/";
  const isProducts = location.pathname.startsWith("/products") || location.pathname.startsWith("/product");
  const isCart = location.pathname === "/cart";

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "var(--header-bg)",
        color: "var(--text-color)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left side */}
      <div>
        {isProducts || isCart ? (
          <button onClick={() => navigate(-1)}>Back</button>
        ) : (
          <Link to="/">
            <h2 style={{ margin: 0 }}>Mash Organics</h2>
          </Link>
        )}
      </div>

      {/* Right side */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={toggleTheme}>
          {darkTheme ? "Light Theme" : "Dark Theme"}
        </button>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
