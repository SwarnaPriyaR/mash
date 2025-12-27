import { Link } from "react-router-dom";
import lightBg from "../assets/images/lightHome.png";
import darkBg from "../assets/images/darkHome.png";

function Home({ theme }) {
  const bgImage = theme === "dark" ? darkBg : lightBg;

  return (
    <div>
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

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
        <p>Email: <a href="mailto:info@mashclothing.com">info@mashclothing.com</a></p>
        <p>
          Instagram:{" "}
          <a href="https://instagram.com/mashclothing" target="_blank" rel="noopener noreferrer">
            @mashclothing
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
