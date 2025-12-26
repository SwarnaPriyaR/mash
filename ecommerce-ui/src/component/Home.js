import { Link } from "react-router-dom";
import lightBg from "../assets/images/lightHome.png";
import darkBg from "../assets/images/darkHome.png";

function Home({ theme }) {
  const bgImage = theme === "dark" ? darkBg : lightBg;

  return (
    <div
      className="home-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="home-content">
      <h1 className="brand-title">Mash Clothing</h1>
        <Link to="/products" className="view-products-link">
            <button className="theme-btn">View Products</button>
          </Link>
      </div>
    </div>
  );
}

export default Home;
